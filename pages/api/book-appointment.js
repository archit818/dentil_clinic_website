import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, location, service, message } = req.body;

  // Validate required fields
  if (!name || !phone || !email || !location || !service || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const results = { email: false, sms: false, sheet: false };
  const errors = [];

  // ─── 1. SEND CONFIRMATION EMAIL ───────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #1B3C73 0%, #2563eb 100%); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px;">🦷 Appointment Confirmed!</h1>
        </div>
        <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="font-size: 18px; color: #1f2937;">Dear <strong>${name}</strong>,</p>
          <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
            Thank you for booking an appointment with us! Your request has been <strong style="color: #16a34a;">successfully registered</strong>. 
            Our team will review your details and <strong>give you a call shortly</strong> to confirm your appointment time.
          </p>
          
          <div style="background: #f0f9ff; border-left: 4px solid #2563eb; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
            <h3 style="color: #1B3C73; margin: 0 0 15px 0;">📋 Appointment Details</h3>
            <table style="width: 100%; font-size: 15px; color: #374151;">
              <tr><td style="padding: 6px 0; font-weight: 600;">Patient Name:</td><td>${name}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Phone:</td><td>${phone}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Email:</td><td>${email}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Location:</td><td>${location}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Service:</td><td>${service}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Message:</td><td>${message}</td></tr>
            </table>
          </div>

          <p style="font-size: 15px; color: #6b7280; line-height: 1.6;">
            If you have any urgent queries, feel free to call us at <a href="tel:+911234567890" style="color: #2563eb;">+91 12345 67890</a>.
          </p>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 13px; color: #9ca3af;">© ${new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;

    // Send to patient
    await transporter.sendMail({
      from: `"Dental Clinic" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: '✅ Appointment Booked Successfully – Dental Clinic',
      html: mailHtml,
    });

    // Also send a notification to the clinic
    await transporter.sendMail({
      from: `"Dental Clinic Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `🆕 New Appointment: ${name} – ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Appointment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      `,
    });

    results.email = true;
  } catch (err) {
    console.error('Email error:', err.message);
    errors.push('Email sending failed');
  }

  // ─── 2. SEND SMS VIA FAST2SMS ─────────────────────────────────────
  try {
    if (process.env.FAST2SMS_API_KEY) {
      // Clean phone number - remove +91, spaces, dashes
      const cleanPhone = phone.replace(/[\s\-\+]/g, '').replace(/^91/, '');

      console.log(`Sending SMS to: ${cleanPhone}`);

      const smsResponse = await fetch('https://www.fast2sms.com/dev/bulkV2', {
        method: 'POST',
        headers: {
          'authorization': process.env.FAST2SMS_API_KEY.trim(),
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        },
        body: JSON.stringify({
          route: 'q',
          message: `Dear ${name}, your appointment request for ${service} at Dental Clinic has been successfully registered. We will call you shortly to confirm your appointment. Thank you!`,
          language: 'english',
          flash: 0,
          numbers: cleanPhone,
        }),
      });

      const smsData = await smsResponse.json();
      console.log('Fast2SMS Response:', JSON.stringify(smsData));

      if (smsData.return === true) {
        results.sms = true;
      } else {
        errors.push(`SMS failed: ${smsData.message || 'Check terminal for details'}`);
      }
    } else {
      errors.push('SMS not configured (FAST2SMS_API_KEY missing)');
    }
  } catch (err) {
    console.error('SMS error detail:', err);
    errors.push(`SMS processing error: ${err.message}`);
  }

  // ─── 3. LOG TO GOOGLE SHEET ────────────────────────────────────────
  try {
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      const sheetResponse = await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          location,
          service,
          message,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      // Google Apps Script returns a redirect, so we check for that
      if (sheetResponse.ok || sheetResponse.redirected) {
        results.sheet = true;
      } else {
        errors.push('Google Sheet update failed');
      }
    } else {
      errors.push('Google Sheet not configured (GOOGLE_SHEET_WEBHOOK_URL missing)');
    }
  } catch (err) {
    console.error('Sheet error:', err.message);
    errors.push('Google Sheet update failed');
  }

  // ─── RESPONSE ──────────────────────────────────────────────────────
  const allSucceeded = results.email && results.sms && results.sheet;
  const anySucceeded = results.email || results.sms || results.sheet;

  return res.status(anySucceeded ? 200 : 500).json({
    success: anySucceeded,
    message: anySucceeded
      ? 'Your appointment has been successfully booked! You will receive a confirmation shortly.'
      : 'Failed to process your appointment. Please try again or call us directly.',
    results,
    errors: errors.length > 0 ? errors : undefined,
  });
}

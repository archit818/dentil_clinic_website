import { Fragment, useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import PageProgress from 'components/PageProgress';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91',
    email: '',
    location: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('');
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');
    setResults(null);

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setStatusMessage(data.message);
        setResults(data.results);
        // Reset form
        setFormData({
          name: '',
          phone: '+91',
          email: '',
          location: '',
          service: '',
          message: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Book Appointment | Dental Clinic</title>
        <meta name="description" content="Book your dental appointment online with our expert specialists." />
      </Head>

      <PageProgress />

      <main className="content-wrapper">
        {/* Breadcrumb Section */}
        <nav aria-label="breadcrumb" className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs bg-color">
          <div className="text-center text-white">
            <h1 className="merriweather display-1 mb-2 text-white">Book Appointment</h1>
            <p className="lato fs-18">
              <a href="/" className="text-white opacity-75">Home</a> / <span className="text-white">Book Appointment</span>
            </p>
          </div>
        </nav>

        {/* Appointment Form Section */}
        <section className="wrapper bg-color pb-14">
          <div className="container py-10 py-md-14">
            <div className="row justify-content-center shadow-lg gx-0 rounded-4 overflow-hidden bg-white">
              
              {/* Left Column: The Form */}
              <div className="col-lg-8 p-6 p-md-10">
                <h2 className="merriweather fs-38 mb-3 text-center">Book An Appointment</h2>
                <p className="lato fs-18 text-center mb-10 text-muted">Get Rid Of With Any Kind Of Dental Issue Now:</p>

                {/* ── Success Message ── */}
                {status === 'success' && (
                  <div className="alert d-flex align-items-start mb-6 p-4 rounded-3" style={{
                    background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                    border: '1px solid #6ee7b7',
                  }}>
                    <div className="me-3 fs-40" style={{ lineHeight: 1 }}>✅</div>
                    <div>
                      <h5 className="merriweather mb-2" style={{ color: '#065f46' }}>Appointment Booked Successfully!</h5>
                      <p className="lato mb-2" style={{ color: '#047857' }}>{statusMessage}</p>
                      {results && (
                        <div className="d-flex flex-wrap gap-2 mt-2">
                          {results.email && (
                            <span className="badge rounded-pill px-3 py-2" style={{ background: '#059669', color: '#fff' }}>
                              📧 Confirmation Email Sent
                            </span>
                          )}
                          {results.sms && (
                            <span className="badge rounded-pill px-3 py-2" style={{ background: '#0891b2', color: '#fff' }}>
                              📱 SMS Sent
                            </span>
                          )}
                          {results.sheet && (
                            <span className="badge rounded-pill px-3 py-2" style={{ background: '#7c3aed', color: '#fff' }}>
                              📋 Record Updated
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ── Error Message ── */}
                {status === 'error' && (
                  <div className="alert d-flex align-items-start mb-6 p-4 rounded-3" style={{
                    background: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
                    border: '1px solid #fca5a5',
                  }}>
                    <div className="me-3 fs-40" style={{ lineHeight: 1 }}>❌</div>
                    <div>
                      <h5 className="merriweather mb-1" style={{ color: '#991b1b' }}>Something Went Wrong</h5>
                      <p className="lato mb-0" style={{ color: '#b91c1c' }}>{statusMessage}</p>
                    </div>
                  </div>
                )}
                
                <form className="contact-form needs-validation" noValidate onSubmit={handleSubmit}>
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="text"
                          id="form_name"
                          name="name"
                          placeholder="Full Name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        />
                        <label htmlFor="form_name">Full Name *</label>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="tel"
                          id="form_phone"
                          name="phone"
                          placeholder="Phone Number"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        />
                        <label htmlFor="form_phone">Phone Number *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="email"
                          id="form_email"
                          name="email"
                          placeholder="Email Address"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        />
                        <label htmlFor="form_email">Email Address *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <select
                          required
                          className="form-select"
                          id="form_location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        >
                          <option value="" disabled>Choose Hospital Location</option>
                          <option value="Location 1">Location 1</option>
                          <option value="Location 2">Location 2</option>
                        </select>
                        <label htmlFor="form_location">Location *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <select
                          required
                          className="form-select"
                          id="form_service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        >
                          <option value="" disabled>Choose Required Service</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Root Canal Treatment">Root Canal Treatment</option>
                          <option value="Cavity Filling">Cavity Filling</option>
                          <option value="Orthodontics">Orthodontics</option>
                          <option value="Teeth Whitening">Teeth Whitening</option>
                          <option value="Wisdom Tooth Surgery">Wisdom Tooth Surgery</option>
                          <option value="Crown &amp; Bridges">Crown &amp; Bridges</option>
                          <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                          <option value="Other">Other</option>
                        </select>
                        <label htmlFor="form_service">Service *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea
                          required
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          className="form-control"
                          style={{ height: '150px' }}
                          value={formData.message}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        ></textarea>
                        <label htmlFor="form_message">Message *</label>
                      </div>
                    </div>

                    <div className="col-12 text-center merriweather">
                      <button
                        type="submit"
                        className="btn bg-theme-dark text-white px-10 py-3 rounded-pill d-inline-flex align-items-center gap-2"
                        disabled={status === 'loading'}
                        id="submit-appointment-btn"
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Booking Appointment...
                          </>
                        ) : (
                          'Book Appointment'
                        )}
                      </button>
                      <p className="text-muted fs-14 mt-4 lato">* These fields are required.</p>
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Column: Address & Map */}
              <div className="col-lg-4 bg-soft-primary p-6 p-md-10 d-flex flex-column">
                <div className="contact-info mb-8">
                  <h4 className="merriweather fs-24 mb-4">Contact Details</h4>
                  
                  <div className="d-flex mb-4">
                    <div className="icon text-primary fs-28 me-4 mt-n1"><i className="uil uil-location-pin-alt"></i></div>
                    <div>
                      <h5 className="mb-1 merriweather">Address</h5>
                      <address className="lato text-muted mb-0">123 Main Street, Springfield, IL 62704 United States</address>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="icon text-primary fs-28 me-4 mt-n1"><i className="uil uil-envelope"></i></div>
                    <div>
                      <h5 className="mb-1 merriweather">Email</h5>
                      <a href="mailto:company@gmail.com" className="lato text-muted">company@gmail.com</a>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="icon text-primary fs-28 me-4 mt-n1"><i className="uil uil-phone-volume"></i></div>
                    <div>
                      <h5 className="mb-1 merriweather">Phone</h5>
                      <a href="tel:+911234567890" className="lato text-muted">+91 12345 67890</a>
                    </div>
                  </div>
                </div>

                <div className="map-container flex-grow-1 mt-auto">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e74c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '300px' }} 
                    allowFullScreen="" 
                    loading="lazy"
                    className="rounded-4"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default BookAppointment;

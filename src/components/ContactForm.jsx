const ContactForm = () => {
  return (
    <section className="wrapper bg-light py-14 py-md-16">
      <div className="container">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6">
            <h2 className="merriweather display-4 mb-4">Book An Appointment</h2>
            <p className="lead fs-22 mb-7">Ready for a beautiful smile? Our dental specialists are here to help you achieve the results you want.</p>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="fa-solid fa-phone"></i> </div>
              </div>
              <div>
                <h5 className="mb-1">Phone</h5>
                <p>+1-234-567-8900</p>
              </div>
            </div>
            <div className="d-flex flex-row mt-4">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="fa-solid fa-envelope"></i> </div>
              </div>
              <div>
                <h5 className="mb-1">Email</h5>
                <p>hello@dentalclinic.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-lg p-6">
              <form className="contact-form needs-validation" method="post" action="./" noValidate>
                <div className="row gx-4">
                  <div className="col-md-6">
                    <div className="form-floating mb-4">
                      <input id="form_name" type="text" name="name" className="form-control" placeholder="Jane" required />
                      <label htmlFor="form_name">First Name *</label>
                      <div className="invalid-feedback"> Please enter your first name. </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-4">
                      <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Doe" required />
                      <label htmlFor="form_lastname">Last Name *</label>
                      <div className="invalid-feedback"> Please enter your last name. </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-4">
                      <input id="form_email" type="email" name="email" className="form-control" placeholder="jane.doe@example.com" required />
                      <label htmlFor="form_email">Email *</label>
                      <div className="invalid-feedback"> Please provide a valid email address. </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-4">
                      <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="+1-234-567-8900" />
                      <label htmlFor="form_phone">Phone Number</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <textarea id="form_message" name="message" className="form-control" placeholder="Your message" style={{height: '150px'}} required></textarea>
                      <label htmlFor="form_message">Message *</label>
                      <div className="invalid-feedback"> Please enter your message. </div>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary rounded-pill btn-send mb-3 w-100">Send Message</button>
                    <p className="text-muted"><strong>*</strong> These fields are required.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

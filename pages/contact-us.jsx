import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';

const ContactUs = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us | Dental Clinic</title>
        <meta name="description" content="Reach out to Dental Clinic for your dental needs. We are here to help you with expert care and advanced techniques." />
      </Head>

      <PageProgress />

      <main className="content-wrapper">
        {/* Breadcrumb Section - Using Signature Blue Gradient */}
        <nav aria-label="breadcrumb" className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs bg-color">
          <div className="text-center text-white">
            <h1 className="merriweather display-1 mb-2 text-white">Contact Us</h1>
            <p className="lato fs-18">
              <a href="/" className="text-white opacity-70">Home</a> / <span className="text-white">Contact Us</span>
            </p>
          </div>
        </nav>

        {/* Contact Form & Info Section */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row justify-content-center shadow-lg rounded-4 overflow-hidden g-0 bg-white">
              {/* Left Column: Form */}
              <div className="col-lg-8 p-6 p-md-10 border-end">
                <h2 className="merriweather fs-38 mb-3 text-center">Drop Us a Line</h2>
                <p className="lato fs-18 text-center text-muted mb-10">
                  Reach out to us from our contact form and we will get back to you shortly
                </p>

                <form className="contact-form">
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input required type="text" name="name" id="form_name" placeholder="Name" className="form-control" />
                        <label htmlFor="form_name">Full Name *</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input required type="tel" name="phone" id="form_phone" placeholder="Phone" className="form-control" />
                        <label htmlFor="form_phone">Phone *</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input required type="email" name="email" id="form_email" placeholder="Email" className="form-control" />
                        <label htmlFor="form_email">Email *</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input required type="text" name="subject" id="form_subject" placeholder="Subject" className="form-control" />
                        <label htmlFor="form_subject">Subject *</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea name="message" id="form_message" placeholder="Message" className="form-control" style={{ height: '150px' }} required></textarea>
                        <label htmlFor="form_message">Message *</label>
                      </div>
                    </div>
                    <div className="col-12 text-center merriweather">
                      <button type="submit" className="btn bg-theme-dark text-white rounded-pill px-8 mb-3">Send Message</button>
                      <p className="text-muted fs-14 lato"><strong>*</strong> These fields are required.</p>
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Column: Contact Info & Small Map */}
              <div className="col-lg-4 p-6 p-md-10 bg-soft-primary">
                <div className="contact-info">
                  <h4 className="merriweather fs-24 mb-5">Our Contact</h4>
                  
                  <div className="d-flex mb-4">
                    <div className="icon text-primary fs-28 me-3"><i className="uil uil-location-pin-alt"></i></div>
                    <address className="lato mb-0">123 Main Street, Springfield, IL 62704 United States</address>
                  </div>

                  <div className="d-flex mb-4 align-items-center">
                    <div className="icon text-primary fs-28 me-3"><i className="uil uil-envelope"></i></div>
                    <a href="mailto:company@gmail.com" className="lato text-body">company@gmail.com</a>
                  </div>

                  <div className="d-flex mb-6 align-items-center">
                    <div className="icon text-primary fs-28 me-3"><i className="uil uil-phone-volume"></i></div>
                    <a href="tel:+911234567890" className="lato text-body">+91 12345 67890</a>
                  </div>

                  <div className="rounded overflow-hidden shadow-sm">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e74c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus" 
                      width="100%" 
                      height="250" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Locations (Full Maps) */}
        <section className="wrapper bg-grays py-14 py-md-16">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="merriweather fs-38">Hospital Locations</h2>
            </div>
            <div className="row gy-10 justify-content-center">
              <div className="col-lg-6">
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden h-100 p-4">
                  <h3 className="merriweather fs-24 text-center mb-4">Location 1</h3>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e74c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="rounded"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden h-100 p-4">
                  <h3 className="merriweather fs-24 text-center mb-4">Location 2</h3>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e74c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="rounded"
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

export default ContactUs;

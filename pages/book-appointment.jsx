import { Fragment } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import PageProgress from 'components/PageProgress';

const BookAppointment = () => {
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
                
                <form className="contact-form needs-validation" noValidate>
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input required type="text" id="form_name" name="name" placeholder="Full Name" className="form-control" />
                        <label htmlFor="form_name">Full Name *</label>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input required type="tel" id="form_phone" name="phone" placeholder="Phone Number" className="form-control" defaultValue="+91" />
                        <label htmlFor="form_phone">Phone Number *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input required type="email" id="form_email" name="email" placeholder="Email Address" className="form-control" />
                        <label htmlFor="form_email">Email Address *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <select required className="form-select" id="form_location" name="location">
                          <option value="" disabled selected>Choose Hospital Location</option>
                          <option value="Location 1">Location 1</option>
                          <option value="Location 2">Location 2</option>
                        </select>
                        <label htmlFor="form_location">Location *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <select required className="form-select" id="form_service" name="service">
                          <option value="" disabled selected>Choose Required Service</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Root Canal Treatment">Root Canal Treatment</option>
                          <option value="Cavity Filling">Cavity Filling</option>
                          <option value="Orthodontics">Orthodontics</option>
                          <option value="Teeth Whitening">Teeth Whitening</option>
                          <option value="Wisdom Tooth Surgery">Wisdom Tooth Surgery</option>
                          <option value="Crown & Bridges">Crown & Bridges</option>
                          <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                          <option value="Other">Other</option>
                        </select>
                        <label htmlFor="form_service">Service *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea required id="form_message" name="message" placeholder="Message" className="form-control" style={{ height: '150px' }}></textarea>
                        <label htmlFor="form_message">Message *</label>
                      </div>
                    </div>

                    <div className="col-12 text-center merriweather">
                      <button type="submit" className="btn bg-theme-dark text-white px-10 py-3 rounded-pill">
                        Send Message
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

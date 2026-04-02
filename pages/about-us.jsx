import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Topbar from 'components/Topbar';
import PageProgress from 'components/PageProgress';

import Counter from 'components/Counter';

const AboutUs = () => {
  return (
    <Fragment>
      <Head>
        <title>About Us | Dental Clinic</title>
        <meta name="description" content="Discover excellence in dental care at Dental Clinic. Our team of qualified specialists provides personalized treatment in Springfield." />
      </Head>

      <PageProgress />
      {/* Layout will provide Navbar and Topbar through _app.jsx wrapper */}

      <main className="content-wrapper">
        {/* Breadcrumb Section */}
        <nav aria-label="breadcrumb" className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs bg-color">
          <div className="text-center text-white">
            <h1 className="merriweather display-1 mb-2 text-white">About Us</h1>
            <p className="lato fs-18">
              <a href="/" className="text-white opacity-70">Home</a> / <span className="text-white">About Us</span>
            </p>
          </div>
        </nav>

        {/* Counts & Intro Summary Section */}
        <section className="wrapper bg-light py-14 py-md-16">
          <div className="container">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-10">
              {/* Left Column: Counters */}
              <div className="col-lg-7 order-lg-2">
                <div className="row gx-md-5 gy-5">
                  <Counter
                    title="Years Of Experience"
                    number={14}
                    suffix="+"
                    Img="/img/icons/smile-mackovers.webp"
                  />
                  <Counter
                    title="Clinics"
                    number={2}
                    Img="/img/icons/root-canal-treatment.webp"
                  />
                  <Counter
                    title="Doctors"
                    number={7}
                    suffix="+"
                    Img="/img/icons/dental-implants.webp"
                  />
                  <Counter
                    title="Patients"
                    number={20000}
                    suffix="+"
                    Img="/img/icons/patient-treatment.webp"
                  />
                </div>
              </div>

              {/* Right Column: Intro Text */}
              <div className="col-lg-5">
                <div className="d-flex align-items-center mb-2">
                  <h3 className="merriweather fs-18 fw-bold text-primary mb-0 me-3">Dental Clinic</h3>
                  <div className="flex-grow-1" style={{ height: '3px', background: 'var(--bs-primary)', opacity: '0.2' }}></div>
                </div>
                <h2 className="merriweather fs-38 mb-3">Dental Specialist in Location</h2>
                <p className="lato fs-18 text-justify text-muted mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit! Iste, quia. Beatae esse distinctio modi aperiam! Culpa recusandae aut, nam perspiciatis officia veniam modi esse?
                </p>
                <p className="lato fs-18 text-justify text-muted">
                  Tempore omnis, porro amet quam placeat architecto atque numquam. Nobis doloribus est, consectetur libero quae facere ex exercitationem cum praesentium.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Gallery (2 Locations) */}
        <section className="wrapper bg-grays py-12 py-md-14">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="merriweather fs-38 mb-4">Best Dentist in Location</h2>
              <p className="lato fs-18 text-center text-muted col-lg-8 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse.
              </p>
            </div>
            <div className="row gx-8 gy-8 justify-content-center">
              <div className="col-md-6">
                <div className="shadow-lg p-3 rounded-4 bg-white">
                  <div className="position-relative overflow-hidden rounded-4" style={{ paddingBottom: '60%' }}>
                    <Image src="/img/best-dental-hospital.webp" alt="Location Clinic 1" layout="fill" objectFit="cover" className="hover-scale" />
                  </div>
                  <h3 className="merriweather fs-24 text-center mt-4 mb-2 text-primary">Location Clinic 1</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="shadow-lg p-3 rounded-4 bg-white">
                  <div className="position-relative overflow-hidden rounded-4" style={{ paddingBottom: '60%' }}>
                    <Image src="/img/best-dental-hospital-2.webp" alt="Location Clinic 2" layout="fill" objectFit="cover" className="hover-scale" />
                  </div>
                  <h3 className="merriweather fs-24 text-center mt-4 mb-2 text-primary">Location Clinic 2</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="wrapper bg-light py-14 py-md-16">
          <div className="container">
            <div className="text-center mb-10">
              <div className="d-flex align-items-center justify-content-center mb-3 mx-auto" style={{ maxWidth: '400px' }}>
                <div className="flex-grow-1" style={{ height: '2px', background: 'var(--bs-primary)', opacity: '0.2', marginRight: '15px' }}></div>
                <h3 className="merriweather fs-18 fw-bold text-primary mb-0">Our Team</h3>
                <div className="flex-grow-1" style={{ height: '2px', background: 'var(--bs-primary)', opacity: '0.2', marginLeft: '15px' }}></div>
              </div>
              <h2 className="merriweather fs-38">Dental Doctors in Location</h2>
            </div>
            
            <div className="row gx-8 gy-10">
              {[
                { name: 'Dr. Kevin Patterson', role: 'Director', src: '/img/specialist-1.webp' },
                { name: 'Dr. Jessica Morgan', role: 'Dental Surgeon', src: '/img/avatar-1.webp' },
                { name: 'Dr. Brandon Rivera', role: 'DMD, MS', src: '/img/specialist-2.webp' },
                { name: 'Dr. Megan Hayes', role: 'Dental Medicine', src: '/img/avatar-2.webp' }
              ].map((member, i) => (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="card shadow-lg border-0 rounded-4 overflow-hidden h-100">
                    <figure className="m-0 overflow-hidden" style={{ position: 'relative', height: '300px' }}>
                      <Image src={member.src} alt={member.name} layout="fill" objectFit="cover" className="hover-scale" />
                    </figure>
                    <div className="card-body text-center p-6">
                      <h3 className="merriweather fs-24 text-primary mb-1">{member.name}</h3>
                      <p className="lato fs-18 text-muted mb-0">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule CTA */}
        <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-color text-white" style={{ backgroundImage: 'url(/img/gallery-1.webp)' }}>
          <div className="container py-14 py-md-16">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h2 className="merriweather fs-42 text-white mb-4">Schedule Your Appointment Today!</h2>
                <p className="lato fs-18 text-white opacity-85 mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error.
                </p>
                <div className="merriweather">
                  <a href="/book-appointment" className="btn btn-white btn-lg rounded-pill px-8">Book Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hear From Our Patients Section */}
        <section className="wrapper bg-grays py-14 py-md-16">
          <div className="container">
            <div className="row gy-10 gx-lg-12 align-items-center">
              <div className="col-lg-6">
                <div className="position-relative">
                  <figure className="rounded-4 overflow-hidden shadow-lg m-0">
                    <Image src="/img/gallery-2.webp" alt="Patient Success Stories" width={800} height={500} />
                  </figure>
                  <a href="/img/testimonial-1.mp4" className="btn btn-circle btn-primary btn-play ripple mx-auto position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
                    <i className="uil uil-play fs-30"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center mb-2">
                  <h3 className="merriweather fs-18 fw-bold text-primary mb-0 me-3">Real Stories Real Smile</h3>
                  <div className="flex-grow-1" style={{ height: '3px', background: 'var(--bs-primary)', opacity: '0.2' }}></div>
                </div>
                <h2 className="merriweather fs-38 mb-4">Hear From Our Patients</h2>
                <p className="lato fs-18 text-muted text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit! Iste, quia. Beatae esse distinctio modi aperiam!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutUs;

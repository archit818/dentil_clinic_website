import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import PageProgress from 'components/PageProgress';
import OtherTreatments from 'components/OtherTreatments';

const CavityFilling = () => {
  return (
    <Fragment>
      <Head>
        <title>Cavity Filling | Dental Clinic</title>
        <meta name="description" content="Professional cavity filling treatment at Dental Clinic. Restore your teeth with our advanced clinical procedures and tooth-colored fillings." />
      </Head>

      <PageProgress />

      <main className="content-wrapper overflow-hidden">
        {/* Inner Page Hero Section */}
        <section className="wrapper bg-color text-white">
          <div className="container pt-14 pb-14">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-8 mb-lg-0">
                <figure className="rounded-4 overflow-hidden shadow-lg m-0">
                   <div className="position-relative" style={{ width: '100%', height: '400px' }}>
                    <Image 
                      src="https://dentals-clinic.netlify.app/img/services/cavity-fillings.webp" 
                      alt="Cavity Filling Hero" 
                      layout="fill"
                      objectFit="cover" 
                    />
                  </div>
                </figure>
              </div>

              <div className="col-lg-6 offset-lg-1 text-center text-lg-start">
                <h1 className="merriweather display-1 text-white mb-3">Cavity Filling</h1>
                <h2 className="merriweather fs-30 text-white mb-4">Schedule Your Appointment Today!</h2>
                <p className="text-white fs-18 lato mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error.
                </p>
                <div className="merriweather">
                  <a href="/book-appointment" className="btn btn-white btn-lg rounded-pill px-8">Book Appointment</a>
                </div>
                <p className="lato fs-16 mt-6 mb-0 opacity-70">
                  <a href="/" className="text-white">Home</a> / <span className="text-white">Cavity Filling</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="wrapper bg-light">
          <div className="container py-10 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-md-8 col-lg-6 position-relative">
                <div className="shape bg-soft-primary rounded-circle rellax w-20 h-20" style={{ top: '-2.9rem', left: '-1.9rem' }}></div>
                <figure className="rounded-4 overflow-hidden shadow-lg m-0">
                  <div className="position-relative" style={{ width: '100%', height: '400px' }}>
                    <Image 
                      src="https://dentals-clinic.netlify.app/img/services/cavity-fillings.webp" 
                      alt="Cavity Filling In Location" 
                      layout="fill" 
                      objectFit="cover" 
                    />
                  </div>
                </figure>
              </div>

              <div className="col-lg-6">
                <h2 className="merriweather display-4 mb-4">Cavity Filling In Location</h2>
                <p className="mb-4 fs-18 text-justify lato text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit! Iste, quia. Beatae esse distinctio modi aperiam.
                </p>
                <p className="mb-4 fs-18 text-justify lato text-muted">
                  Culpa recusandae aut, nam perspiciatis officia veniam modi esse? Reprehenderit exercitationem ipsa iste quam, molestiae ipsum pariatur! Quia ex facere delectus, libero consequatur laboriosam placeat unde alias iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit! Iste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="wrapper bg-grays text-center">
          <div className="container py-10 py-md-12">
            <h2 className="merriweather display-5 mb-5">What is Cavity Filling?</h2>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <p className="fs-18 lato text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit! Iste, quia. Beatae esse distinctio modi aperiam! Culpa recusandae aut, nam perspiciatis officia veniam modi esse? Reprehenderit exercitationem ipsa iste quam, molestiae ipsum pariatur! Quia ex facere delectus, libero consequatur laboriosam placeat unde alias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="wrapper bg-white">
          <div className="container py-10 py-md-16">
            <div className="heading mb-12">
              <h2 className="merriweather display-4 text-center">Benefits of Cavity Filling</h2>
            </div>
            
            <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
              {[
                { n: 1, t: 'Lorem ipsum dolor', d: 'Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error possimus magni dolore incidunt illo.' },
                { n: 2, t: 'Adipisicing elit', d: 'Culpa recusandae aut, nam perspiciatis officia veniam modi esse? Reprehenderit exercitationem ipsa iste quam.' },
                { n: 3, t: 'Consequatur laboriosam placeat', d: 'Iste, quia. Beatae esse distinctio modi aperiam! Culpa recusandae aut, nam perspiciatis officia veniam.' },
                { n: 4, t: 'Lorem ipsum dolor sit', d: 'Nam perspiciatis officia veniam modi esse? Reprehenderit exercitationem ipsa iste quam, molestiae ipsum pariatur.' },
                { n: 5, t: 'Officia veniam modi esse', d: 'Beatae esse distinctio modi aperiam! Culpa recusandae aut, nam perspiciatis officia veniam modi esse? Reprehenderit.' },
                { n: 6, t: 'libero consequatur laboriosam', d: 'Debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae.' }
              ].map((benefit, i) => (
                <div className="col-lg-6" key={i}>
                  <div className="card shadow-lg border-0 rounded-4 mb-4 hover-translate-y-n3 transition-all">
                    <div className="card-body p-6">
                      <div className="d-flex flex-row">
                        <div>
                          <span className="icon btn btn-circle btn-lg bg-soft-primary pe-none me-4 text-primary fs-20">
                            <span className="number">{benefit.n}</span>
                          </span>
                        </div>
                        <div>
                          <h3 className="mb-1 fs-24 merriweather">{benefit.t}</h3>
                          <p className="mb-0 fs-18 text-justify lato text-muted">{benefit.d}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedure Section - Timeline */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-16">
            <div className="heading text-center mb-12">
              <h2 className="merriweather display-4">Cavity Filling Procedure</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <ul className="timeline">
                  {[
                    { t: 'Adipisicing', d: 'Recusandae qui velit rerum a eum fugit! Iste, quia. Beatae esse distinctio modi aperiam! Culpa recusandae aut, nam perspiciatis officia veniam modi esse? Reprehenderit exercitationem ipsa iste quam, molestiae ipsum pariatur! Quia ex facere delectus, libero consequatur laboriosam placeat unde alias.' },
                    { t: 'Officia venia', d: 'Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit! Iste, quia. Beatae esse distinctio modi aperiam.' },
                    { t: 'Aliquam asperiores', d: "On the day of the surgery, anesthesia will be administered to ensure you're comfortable and pain-free during the procedure. Options may include local anesthesia, sedation, or general anesthesia, depending on the complexity of the surgery and your preferences." },
                    { t: 'Libero consequaturtion', d: 'Culpa recusandae aut, nam perspiciatis officia veniam modi esse? Reprehenderit exercitationem ipsa iste quam, molestiae ipsum pariatur! Quia ex facere delectus, libero consequatur laboriosam placeat unde alias iste minima, debitis aliquam asperiores ab accusantium error.' },
                    { t: 'Possimus magni', d: 'Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit! Iste, quia. Beatae esse distinctio modi aperiam! Culpa recusandae aut.' },
                    { t: 'Reprehenderit', d: 'Beatae esse distinctio modi aperiam! Culpa recusandae aut, nam perspiciatis officia veniam modi esse? Reprehenderit exercitationem ipsa iste quam, molestiae ipsum pariatur! Quia ex facere delectus, libero consequatur laboriosam placeat unde alias.' },
                    { t: 'Facere delectus', d: 'Molestiae ipsum pariatur! Quia ex facere delectus, libero consequatur laboriosam placeat unde alias iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit.' }
                  ].map((step, i) => (
                    <li className="timeline-item" key={i}>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h3 className="fs-24 merriweather mb-2">{step.t}</h3>
                        <p className="lato text-muted text-justify">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="wrapper bg-white">
          <div className="container py-14 py-md-16">
            <div className="heading text-center mb-12 d-flex flex-column align-items-center">
              <div className="d-flex align-items-center justify-content-center mb-3" style={{ width: '551px' }}>
                <div style={{ flex: '1', height: '2px', backgroundColor: '#B3E5FC', marginRight: '12px' }}></div>
                <h3 className="fs-18 fw-bold text-primary merriweather mb-0">Why Choose</h3>
                <div style={{ flex: '1', height: '2px', backgroundColor: '#B3E5FC', marginLeft: '12px' }}></div>
              </div>
              <h2 className="merriweather display-4">Dental Clinic for Cavity Filling</h2>
            </div>

            <div className="row gy-8 justify-content-center">
              {[
                { t: 'Expertise and Experience', i: 'https://dentals-clinic.netlify.app/img/icons/expertise-and-experience.webp' },
                { t: 'Comprehensive Care', i: 'https://dentals-clinic.netlify.app/img/icons/comprehensive-care.webp' },
                { t: 'State-of-the-Art Facilities', i: 'https://dentals-clinic.netlify.app/img/icons/state-of-the-art-facilities.webp' },
                { t: 'Personalized Treatment', i: 'https://dentals-clinic.netlify.app/img/icons/personalized-treatment.webp' }
              ].map((item, i) => (
                <div className="col-lg-4 col-xl-3 col-md-6" key={i}>
                  <div className="d-flex flex-column align-items-center justify-content-center shadow-lg rounded-4 p-8 why-choose-card bg-white hover-translate-y-n3 transition-all h-100">
                    <Image 
                      src={item.i} 
                      alt={item.t} 
                      width={80} 
                      height={80} 
                      className="mb-4"
                    />
                    <h3 className="fs-22 text-center merriweather">{item.t}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Treatments Section */}
        <OtherTreatments currentSlug="cavity-filling-treatment-location" />
      </main>
    </Fragment>
  );
};

export default CavityFilling;

import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import PageProgress from 'components/PageProgress';

const galleryImages = [
  { src: '/img/gallery-1.webp', alt: 'Dental Transformation 1' },
  { src: '/img/gallery-2.webp', alt: 'Dental Transformation 2' },
  { src: '/img/gallery-3.webp', alt: 'Dental Transformation 3' },
  { src: '/img/best-dental-hospital.webp', alt: 'Modern Clinic Facility' },
  { src: '/img/best-dental-hospital-2.webp', alt: 'Care & Comfort' },
  { src: '/img/best-dental-hospital-3.webp', alt: 'Advanced Technology' },
  { src: '/img/hero-bg.webp', alt: 'Quality Care' },
  { src: '/img/facts-bg.webp', alt: 'Patient Success' },
  { src: '/img/specialist-1.webp', alt: 'Expert Specialist 1' },
  { src: '/img/specialist-2.webp', alt: 'Expert Specialist 2' }
];

const Gallery = () => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio & Gallery | Dental Clinic</title>
        <meta name="description" content="Witness the remarkable before & after results of our patients' transformations. See the impact of our expert dental care." />
      </Head>

      <PageProgress />

      <main className="content-wrapper">
        {/* Breadcrumb Section - Using Signature Blue Gradient for Consistency */}
        <nav aria-label="breadcrumb" className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs bg-color">
          <div className="text-center text-white">
            <h1 className="merriweather display-1 mb-2 text-white">Gallery</h1>
            <p className="lato fs-18">
              <a href="/" className="text-white opacity-70">Home</a> / <span className="text-white">Gallery</span>
            </p>
          </div>
        </nav>

        <section id="portfolio">
          <div className="wrapper bg-grays">
            <div className="container py-10 py-md-12 text-center">
              <div className="row">
                <div className="col-lg-10 mx-auto mb-8">
                  <h2 className="merriweather fs-38 mb-3">Transformations & Success Stories</h2>
                  <p className="lead fs-18 lato">
                    Witness the Remarkable Before & After Results of Our Patients' Transformations and Success Stories, 
                    Showcasing the Impact of Our Expert Care and Advanced Techniques
                  </p>
                </div>
              </div>

              {/* Masonry-style Grid */}
              <div className="grid grid-view projects-masonry">
                <div className="row gx-md-6 gy-6">
                  {galleryImages.map((image, index) => (
                    <div className="project item col-md-6 col-xl-4" key={index}>
                      <figure className="rounded-4 overflow-hidden shadow-lg m-0 transition-all hover-translate-y-n3">
                        <div className="position-relative" style={{ height: index % 2 === 0 ? '300px' : '480px' }}>
                          <Image 
                            src={image.src} 
                            alt={image.alt} 
                            layout="fill" 
                            objectFit="cover" 
                            className="hover-scale"
                          />
                        </div>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Gallery;

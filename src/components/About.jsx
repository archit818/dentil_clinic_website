import Image from 'next/image';

const About = () => {
  return (
    <section className="wrapper bg-light py-14 py-md-16">
      <div className="container">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6">
            <div className="row gx-md-5 gy-5">
              <div className="col-md-6">
                <figure className="rounded mb-5">
                  <Image src="/img/best-dental-hospital.webp" alt="Modern Dental Clinic" width={600} height={400} layout="responsive" className="rounded" />
                </figure>
                <figure className="rounded">
                  <Image src="/img/best-dental-hospital-2.webp" alt="Expert Dentist" width={600} height={400} layout="responsive" className="rounded" />
                </figure>
              </div>
              <div className="col-md-6 mt-md-10">
                <figure className="rounded mb-5">
                  <Image src="/img/best-dental-hospital-3.webp" alt="Patient Treatment" width={600} height={750} layout="responsive" className="rounded" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="merriweather text-primary fs-18 text-uppercase mb-3">Dental Clinic</h3>
            <h1 className="merriweather display-4 mb-5">Best Dental Hospital in Location</h1>
            <p className="lead fs-22 mb-7">Experience the highest standard of dental care in a patient-friendly environment.</p>
            <div className="row counter-wrapper gy-6 mb-7">
              <div className="col-md-6">
                <h2 className="merriweather text-primary display-2">12+</h2>
                <p className="lato mb-0">Years of Experience</p>
              </div>
              <div className="col-md-6">
                <h2 className="merriweather text-primary display-2">50+</h2>
                <p className="lato mb-0">Specialists on Team</p>
              </div>
            </div>
            <p>Our clinic is equipped with modern facilities and advanced diagnostic tools. We pride ourselves on creating beautiful smiles that last a lifetime.</p>
            <div className="mt-8">
              <a href="#" className="btn btn-primary rounded-pill">Learn More About Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

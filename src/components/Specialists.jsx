import Image from 'next/image';

const specialists = [
  {
    name: 'Dr. John Doe',
    role: 'Senior Dentist',
    src: '/img/specialist-1.webp'
  },
  {
    name: 'Dr. Jane Smith',
    role: 'Orthodontist Specialist',
    src: '/img/specialist-2.webp'
  }
];

const Specialists = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7 order-lg-2">
            <div className="row gx-md-5 gy-5">
              {specialists.map((spec, i) => (
                <div className="col-md-6" key={i}>
                  <figure className="rounded">
                    <Image
                      src={spec.src}
                      alt={spec.name}
                      width={600}
                      height={750}
                      className="rounded"
                      layout="responsive"
                    />
                  </figure>
                  <div className="text-center mt-3">
                    <h4 className="mb-1">{spec.name}</h4>
                    <p className="text-muted">{spec.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <h2 className="fs-15 text-uppercase text-primary mb-3">Expert Team</h2>
            <h3 className="merriweather display-4 mb-5">Our Qualified Dental Specialists</h3>
            <p className="lead fs-22 mb-7">Our team of experienced dentists is dedicated to providing the highest quality care in a comfortable environment.</p>
            <p>We combine advanced technology with compassionate care to ensure every patient receives personalized treatment tailored to their needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;

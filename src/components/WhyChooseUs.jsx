import Image from 'next/image';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Expert Care',
      text: 'Our team of world-class dental specialists provides personalized care using the latest clinical techniques.',
      src: '/img/icons/patient-treatment.webp'
    },
    {
      title: 'Advanced Technology',
      text: 'We use cutting-edge diagnostic and treatment equipment to ensure precise results and a comfortable experience.',
      src: '/img/icons/root-canal-treatment.webp'
    },
    {
      title: 'Patient-Centered',
      text: 'Your comfort and satisfaction are our top priorities. We listen to your needs and design tailored treatments.',
      src: '/img/icons/smile-mackovers.webp'
    }
  ];

  return (
    <section className="wrapper bg-light py-14 py-md-16">
      <div className="container">
        <div className="row section-title text-center mb-10">
          <h3 className="merriweather text-primary fs-18 text-uppercase mb-3">Why Choose Us</h3>
          <h2 className="merriweather display-4 mb-4">Dental Clinic for Your Dental Needs</h2>
        </div>
        <div className="row gx-md-8 gy-8">
          {reasons.map((reason, i) => (
            <div className="col-lg-4" key={i}>
              <div className="card border-0 shadow-lg p-6 text-center h-100 rounded-4">
                <div 
                  className="icon-container rounded-circle p-4 mb-5 mx-auto" 
                  style={{ 
                    background: '#f8f9fa', 
                    backgroundImage: 'radial-gradient(#dee2e6 1px, transparent 1px)', 
                    backgroundSize: '10px 10px',
                    width: '120px',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    src={reason.src}
                    width={80}
                    height={80}
                    alt={reason.title}
                  />
                </div>
                <h3 className="merriweather fs-24 mb-3 text-primary">{reason.title}</h3>
                <p className="lato fs-18 mb-0 text-muted opacity-85">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

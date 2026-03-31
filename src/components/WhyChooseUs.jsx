const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Expert Care',
      text: 'Our team of world-class dental specialists provides personalized care using the latest clinical techniques.'
    },
    {
      title: 'Advanced Technology',
      text: 'We use cutting-edge diagnostic and treatment equipment to ensure precise results and a comfortable experience.'
    },
    {
      title: 'Patient-Centered',
      text: 'Your comfort and satisfaction are our top priorities. We listen to your needs and design tailored treatments.'
    }
  ];

  return (
    <section className="wrapper bg-light py-14 py-md-16">
      <div className="container">
        <div className="row section-title text-center mb-10">
          <h3 className="merriweather text-primary fs-18 text-uppercase mb-3">Why Choose Us</h3>
          <h1 className="merriweather display-4 mb-4">Dental Clinic for Your Dental Needs</h1>
        </div>
        <div className="row gx-md-5 gy-5">
          {reasons.map((reason, i) => (
            <div className="col-lg-4" key={i}>
              <div className="card border-0 shadow-sm p-6 text-center h-100">
                <div className="icon-rounded bg-soft-primary mx-auto mb-4">
                  <i className="fa-solid fa-check text-primary"></i>
                </div>
                <h4 className="merriweather mb-3">{reason.title}</h4>
                <p className="lato mb-0">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

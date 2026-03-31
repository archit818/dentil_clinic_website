import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Peterson',
    quote: 'Excellent service! Highly professional dental care in a modern environment. The staff was incredibly welcoming and informative. I felt completely at ease throughout my treatment.',
    src: '/img/avatar-1.webp'
  },
  {
    name: 'Robert Brown',
    quote: 'State of the art technology and a very friendly team. My smile has never been better thanks to their orthodontic expertise. The results exceeded my expectations!',
    src: '/img/avatar-2.webp'
  },
  {
    name: 'Emily Davis',
    quote: 'The best dental experience I have ever had. The cleaning was thorough and painless. I highly recommend their pediatric care for families. Professional and caring!',
    src: '/img/avatar-1.webp'
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="wrapper bg-light py-14 py-md-16 overflow-hidden">
      <div className="container">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          
          {/* Left Column: Transparent Water Fill */}
          <div className="col-lg-5 text-center text-lg-start">
            <h3 className="merriweather text-primary fs-18 text-uppercase mb-3">Patient Experiences</h3>
            <h1 className="merriweather display-4 mb-8">Clinical Excellence</h1>
            
            <div className="d-flex flex-column align-items-center align-items-lg-start mb-8">
              <div className="water-container mb-4">
                <div className="water-fill" style={{ height: '95%' }}></div>
                <div className="water-content">
                  <p className="water-text">95%</p>
                  <p className="water-subtext text-primary">Satisfaction</p>
                </div>
              </div>
              
              <div className="p-5 bg-white shadow-sm rounded-4 border-start border-5 border-primary" style={{ maxWidth: '400px' }}>
                <h4 className="merriweather mb-2">Personalized Treatments</h4>
                <p className="lato mb-0 text-muted">We design every procedure specifically for your unique smile and health history, ensuring optimal outcomes for every patient.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Even Larger Sliding Testimonial Box */}
          <div className="col-lg-7">
            <div className="position-relative">
              
              {/* Slider Arrows (Positioned at each end of the box) */}
              <button 
                className="slider-btn-v3 left" 
                onClick={prevSlide}
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <button 
                className="slider-btn-v3 right" 
                onClick={nextSlide}
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>

              {/* Testimonial Window (XXL Card) */}
              <div className="testimonial-window px-4">
                <div 
                  className="card shadow-lg testimonial-card-xxl animate__animated animate__fadeIn"
                  key={currentSlide}
                >
                  <blockquote className="icon mb-0">
                    <p className="lato fs-24 mb-10" style={{fontStyle: 'italic', lineHeight: '1.8'}}>
                      “{testimonials[currentSlide].quote}”
                    </p>
                    <div className="blockquote-details d-flex align-items-center">
                      <figure className="rounded-circle w-16 h-16 me-5 overflow-hidden shadow-sm border border-3 border-primary">
                        <Image 
                          src={testimonials[currentSlide].src} 
                          alt={testimonials[currentSlide].name} 
                          width={100} 
                          height={100} 
                          className="rounded-circle"
                          objectFit="cover"
                        />
                      </figure>
                      <div className="info">
                        <h3 className="mb-0 merriweather text-primary">{testimonials[currentSlide].name}</h3>
                        <p className="mb-0 text-muted lato fw-bold fs-18">Verified Clinic Patient</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

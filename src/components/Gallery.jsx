import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const CaseStudy = ({ beforeImg, afterImg, title, description }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleStart = () => {
    isDragging.current = true;
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const onMouseMove = (e) => handleMove(e.clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);
    const onEnd = () => handleEnd();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };
  }, []);

  return (
    <div className="col-lg-4 mb-10">
      <div 
        className="ba-container" 
        ref={containerRef}
        style={{ cursor: 'default' }} /* Reverting cursor to allow scroll awareness */
      >
        <div className="ba-label ba-label-before">Before</div>
        <div className="ba-label ba-label-after">After</div>
        
        {/* After Image (Base) */}
        <Image 
          src={afterImg} 
          alt={title + " After"} 
          className="ba-image-base"
          width={600}
          height={450}
          draggable="false"
        />
        
        {/* Before Image (Overlay with clipping) */}
        <div className="ba-overlay-container" style={{ width: `${sliderPos}%` }}>
          <Image 
            src={beforeImg} 
            alt={title + " Before"} 
            className="ba-image-overlay before-effect"
            width={600}
            height={450}
            draggable="false"
          />
        </div>
        
        {/* Handle (The only draggable part) */}
        <div 
          className="ba-handle" 
          style={{ left: `${sliderPos}%`, cursor: 'ew-resize' }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <div className="ba-handle-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 8 22 12 18 16"></polyline><polyline points="6 8 2 12 6 16"></polyline><line x1="2" y1="12" x2="22" y2="12"></line></svg>
          </div>
        </div>
      </div>
      
      <div className="ba-case-info">
        <h4 className="merriweather">{title}</h4>
        <p className="lato">{description}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const cases = [
    {
      title: 'Smile Whitening',
      description: 'Professional grade whitening that removes years of stains in a single session.',
      after: '/img/gallery-1.webp',
      before: '/img/gallery-1.webp'
    },
    {
      title: 'Orthodontic Alignment',
      description: 'Correcting complex misalignments with advanced invisible braces technology.',
      after: '/img/gallery-2.webp',
      before: '/img/gallery-2.webp'
    },
    {
      title: 'Full Reconstruction',
      description: 'Restoring functionality and aesthetics with premium dental implants.',
      after: '/img/gallery-3.webp',
      before: '/img/gallery-3.webp'
    }
  ];

  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row mb-12">
          <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-primary mb-3">Our Work</h2>
            <h3 className="merriweather display-4 mb-10 px-md-15 px-lg-0">Explore Our Dental Gallery</h3>
          </div>
        </div>
        
        <div className="row">
          {cases.map((c, i) => (
            <CaseStudy 
              key={i}
              title={c.title}
              description={c.description}
              beforeImg={c.before}
              afterImg={c.after}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

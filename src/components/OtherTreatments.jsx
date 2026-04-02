import Image from 'next/image';
import Link from 'next/link';

const OtherTreatments = ({ currentSlug }) => {
  const treatments = [
    { title: 'Dental Implants', slug: 'dental-implants-clinic-location', img: 'https://dentals-clinic.netlify.app/img/services/dental-implants.webp' },
    { title: 'Root Canal Treatment', slug: 'root-canal-treatment-location', img: 'https://dentals-clinic.netlify.app/img/services/root-canal-treatment.webp' },
    { title: 'Cavity Filling', slug: 'cavity-filling-treatment-location', img: 'https://dentals-clinic.netlify.app/img/services/cavity-fillings.webp' },
    { title: 'Orthodontics', slug: 'orthodontics-treatment-location', img: 'https://dentals-clinic.netlify.app/img/services/orthodonitics.webp' },
    { title: 'Teeth Whitening', slug: 'teeth-whitening-treatment-location', img: 'https://dentals-clinic.netlify.app/img/services/teeth-whitening.webp' },
    { title: 'Wisdom Tooth Surgery', slug: 'wisdom-tooth-surgery-location', img: 'https://dentals-clinic.netlify.app/img/services/wisdom-tooth-surgery.webp' },
    { title: 'Crown & Bridges', slug: 'crown-and-bridges-treatment-location', img: 'https://dentals-clinic.netlify.app/img/services/crown-and-bridges.webp' },
    { title: 'Pediatric Dentistry', slug: 'pediatric-dentistry-location', img: 'https://dentals-clinic.netlify.app/img/services/paediatric-dentistry.webp' }
  ];

  // Filter out the current page
  const list = treatments.filter(t => t.slug !== currentSlug).slice(0, 3);

  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="heading text-center mb-10">
          <h2 className="merriweather display-4">Other Treatments</h2>
        </div>
        
        <div className="row gy-8">
          {list.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden h-100 hover-translate-y-n3 transition-all bg-white">
                <figure className="m-0 position-relative" style={{ height: '220px' }}>
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    layout="fill" 
                    objectFit="cover" 
                  />
                </figure>
                <div className="card-body p-6 text-center">
                  <h3 className="fs-22 merriweather mb-3 text-primary">{item.title}</h3>
                  <p className="lato text-muted mb-4 fs-16">
                    Professional, expert care for your dental health and aesthetic smile goals.
                  </p>
                  <Link href={`/${item.slug}`} className="btn btn-soft-primary btn-sm rounded-pill lato fw-bold">
                    View Treatment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTreatments;

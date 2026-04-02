import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Image from 'next/image';

/**
 * Counter component for displaying a metric with icon, animated number, and title.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Title of the metric.
 * @param {number} props.number - Numeric value to animate.
 * @param {string} props.Img - Image URL or path for the icon.
 * @param {string} [props.suffix] - Optional suffix (e.g., "+", "%").
 * @returns {JSX.Element} Rendered counter block.
 */
const Counter = ({ title, number, Img, suffix }) => {
  return (
    <div className="col-md-6 col-lg-3 px-xl-6">
      <div
        className="d-flex flex-column justify-content-center align-items-center bg-white rounded counter-cards p-5"
        aria-label={`Counter card: ${title}`}
      >
        <div 
          className="icon-container rounded-circle p-4 mb-4" 
          style={{ 
            background: '#f8f9fa', 
            backgroundImage: 'radial-gradient(#dee2e6 1px, transparent 1px)', 
            backgroundSize: '10px 10px' 
          }}
        >
          <Image
            src={Img}
            width={80}
            height={80}
            alt={title}
            priority
          />
        </div>
        <h3 className="fs-32 merriweather mt-2 text-primary" aria-label={`${number}${suffix || ''}`}>
          <CountUp end={number} duration={3} suffix={suffix} />
        </h3>
        <p className="fw-bold fs-18 text-center merriweather">{title}</p>
      </div>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  Img: PropTypes.string.isRequired,
  suffix: PropTypes.string,
};

export default Counter;

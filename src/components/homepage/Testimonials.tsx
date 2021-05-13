import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => (
  <>
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonial">
          <h3 className="testimonial__title">John Doe</h3>
          <p className="testimonial__caption">Papa du petit Charlie</p>
          <p className="testimonial__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testimonial__stars">
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
          </div>
        </div>
        <div className="testimonial">
          <h3 className="testimonial__title">Jane Doe</h3>
          <p className="testimonial__caption">Maman de la petite Lou</p>
          <p className="testimonial__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testimonial__stars">
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
          </div>
        </div>
        <div className="testimonial">
          <h3 className="testimonial__title">Jane Doe</h3>
          <p className="testimonial__caption">Maman de la petite Lou</p>
          <p className="testimonial__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testimonial__stars">
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
          </div>
        </div>
        <div className="testimonial">
          <h3 className="testimonial__title">John Doe</h3>
          <p className="testimonial__caption">Papa du petit Charlie</p>
          <p className="testimonial__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testimonial__stars">
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
            <FontAwesomeIcon className="testimonial__star" icon={faStar} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Testimonials;

import React from 'react';
import clothing1 from '../assets/clothing-1.png';
import clothing2 from '../assets/clothing-2.png';
import clothing3 from '../assets/clothing-3.png';
import clothing4 from '../assets/clothing-4.png';
import clothing5 from '../assets/clothing-5.png';
import clothing6 from '../assets/clothing-6.png';

const Examples = () => (
  <>
    <section className="examples">
      <div className="examples__container">
        <img className="example__img" src={clothing1} alt="" />
        <img className="example__img" src={clothing2} alt="" />
        <img className="example__img" src={clothing3} alt="" />
        <img className="example__img" src={clothing4} alt="" />
        <img className="example__img" src={clothing5} alt="" />
        <img className="example__img" src={clothing6} alt="" />
      </div>
    </section>
  </>
);

export default Examples;

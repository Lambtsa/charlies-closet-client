import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import clothing1 from '../assets/clothing-1.png';
import clothing2 from '../assets/clothing-2.png';
import clothing3 from '../assets/clothing-3.png';
import clothing4 from '../assets/clothing-4.png';
import clothing5 from '../assets/clothing-5.png';
import clothing6 from '../assets/clothing-6.png';
import clothing7 from '../assets/clothing-7.png';
import clothing8 from '../assets/clothing-8.png';

const ItemList = () => (
  <>
    <section className="itemlist">
      <div className="itemlist__container">
        <div className="item">
          <img className="item__img" src={clothing1} alt="" />
          <h4 className="item__title">Item title</h4>
          <p className="item__price">38,00 €</p>
          <FontAwesomeIcon className="item__heart" icon={faHeart} />
        </div>
        <div className="item">
          <img className="item__img" src={clothing2} alt="" />
          <h4 className="item__title">Item title</h4>
          <p className="item__price">42,00 €</p>
          <FontAwesomeIcon className="item__heart" icon={faHeart} />
        </div>
        <div className="item">
          <img className="item__img" src={clothing3} alt="" />
          <h4 className="item__title">Item title</h4>
          <p className="item__price">26,00 €</p>
          <FontAwesomeIcon className="item__heart" icon={faHeart} />
        </div>
        <div className="item">
          <img className="item__img" src={clothing4} alt="" />
          <h4 className="item__title">Item title</h4>
          <p className="item__price">32,00 €</p>
          <FontAwesomeIcon className="item__heart" icon={faHeart} />
        </div>
        <div className="item">
          <img className="item__img" src={clothing5} alt="" />
          <h4 className="item__title">Item title</h4>
          <p className="item__price">36,00 €</p>
          <FontAwesomeIcon className="item__heart" icon={faHeart} />
        </div>
        <div className="item">
          <img className="item__img" src={clothing6} alt="" />
          <h4 className="item__title">Item title</h4>
          <p className="item__price">42,00 €</p>
          <FontAwesomeIcon className="item__heart" icon={faHeart} />
        </div>
        <div className="item">
          <img className="item__img" src={clothing7} alt="" />
          <h4 className="item__title">Item title</h4>
          <p className="item__price">29,00 €</p>
          <FontAwesomeIcon className="item__heart" icon={faHeart} />
        </div>
        <div className="item">
          <img className="item__img" src={clothing8} alt="" />
          <h4 className="item__title">Item title</h4>
          <p className="item__price">35,00 €</p>
          <FontAwesomeIcon className="item__heart" icon={faHeart} />
        </div>
      </div>
    </section>
  </>
);

export default ItemList;

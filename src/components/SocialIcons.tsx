import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare as facebook,
  faInstagram as instagram,
  faTwitter as twitter,
  faTiktok as tiktok,
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = (props: {class: string}) => {
  return (
    <>
      <div className={`social ${props.class}`}>
        <a href="/">
          <FontAwesomeIcon className="social__icon" icon={facebook} />
        </a>
        <a href="/">
          <FontAwesomeIcon className="social__icon" icon={instagram} />
        </a>
        <a href="/">
          <FontAwesomeIcon className="social__icon" icon={twitter} />
        </a>
        <a href="/">
          <FontAwesomeIcon className="social__icon" icon={tiktok} />
        </a>
      </div>
    </>
  );
};

export default SocialIcons;

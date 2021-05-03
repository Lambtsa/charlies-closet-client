import React from 'react';

const Copyright = () => (
  <>
    <div className="copyright">
      <div className="copyright__container">
        <p className="copyright__content">
          {`© ${new Date().getFullYear()} Charlie's Closet. Tous droits reservés.`}
        </p>
      </div>
    </div>
  </>
);

export default Copyright;

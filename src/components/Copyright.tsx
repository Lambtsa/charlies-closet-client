import React from 'react';

const Copyright = (props: {type: string}) => (
  <>
    <div className={`copyright ${props.type}`}>
      {`© ${new Date().getFullYear()} Charlie's Closet. Tous droits réservés`}
    </div>
  </>
);

export default Copyright;

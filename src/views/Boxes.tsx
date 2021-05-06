import React, { useEffect } from 'react';

const Boxes = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <>
      <h2>Boxes</h2>
    </>
  );
};

export default Boxes;

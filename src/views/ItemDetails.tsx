import React, { useEffect } from 'react';

const ItemDetails = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <h2>Item details</h2>
    </>
  );
};

export default ItemDetails;

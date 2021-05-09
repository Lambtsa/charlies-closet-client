import React, { useEffect } from 'react';

/*
  Components
*/
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Boxes = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <>
      <Header type="dark" fixed/>
      <main className="main">
        <h2>Boxes</h2>
      </main>
      <Footer />
    </>
  );
};

export default Boxes;

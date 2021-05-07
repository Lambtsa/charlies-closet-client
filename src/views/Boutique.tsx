import React, { useEffect } from 'react';

/*
  Components
*/
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import ItemList from '../components/ItemList';
import Footer from '../components/Footer';

const Boutique = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <Header type="light" fixed />
      <Jumbotron height={70} />
      <main className="main">
        <ItemList />
      </main>
      <Footer />
    </>
  );
};

export default Boutique;

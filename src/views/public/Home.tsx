import React, { useEffect } from 'react';

/*
  Components
*/
import Header from '../../components/Header';
import Jumbotron from '../../components/Jumbotron';
import Services from '../../components/Services';
import About from '../../components/About';
import Examples from '../../components/Examples';
import Testimonials from '../../components/Testimonials';
import HowItWorks from '../../components/HowItWorks';
import Footer from '../../components/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <Header type="light" fixed />
      <main className="main">
        <Jumbotron height={100} />
        <Services />
        <About />
        <HowItWorks />
        <Examples />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;

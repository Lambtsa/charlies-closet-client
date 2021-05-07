import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../mockData/FAQ.json';
/*
  Components
*/
import Footer from '../components/Footer';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Expandable from '../components/Expandable';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <Header type="light" fixed />
      <Jumbotron height={70} />
      <main className="main">
        <section className="faq">
          <div className="faq__container">
            <h1 className="faq__title">Questions / Réponses</h1>
            {data && data.map((element: any) => <Expandable key={element.id} data={element} />)}
            <div className="faq__contact">
              <p>Vous avez encore des questions ?</p>
              <Link className="faq__link" to="/contact-us">Contactez-nous</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;

import React from 'react';

const Jumbotron = (props: { height: number } ) => (
  <>
    <section className={`jumbotron height-${props.height}`}>
      <div className="jumbotron__container">
        <h1 className="jumbotron__title">Habillez votre enfant sans déshabiller la planète</h1>
        <p className="jumbotron__subtitle">Tous les mois, des vêtements made in France, éco-responsable pour accompagner les premiers pas de votre ptit chou.</p>
        <button type="button" className="jumbotron__btn">Découvrir</button>
      </div>
    </section>
  </>
);

export default Jumbotron;

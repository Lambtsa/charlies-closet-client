import React from 'react';

const About = () => (
  <>
    <section className="about">
      <div className="about__container">
        <h2 className="about__quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</h2>
        <div className="about__content">
          <h3 className="about__title">About us</h3>
          <p className="about__subtitle">{`Les enfants mettent les vetements trop peu de fois dans les débuts de leur vie, ce qui fait que nous achetons beaucoup trop de vetements qui rentent au final au placard apres les avoir utilisé que quelques fois. De même pour les vêtements pour femmes enceintes ou allaitantes. La location de vêtements est une solution bien pensée pour répondre à la problématique des parents qui veulent habiller leur enfant avec des vêtements éco-responsables mais à moindre coût.`}</p>
        </div>
      </div>
    </section>
  </>
);

export default About;

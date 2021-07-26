import React from 'react';

import Footer from './Footer';
import ToInlineList from './ToInlineList';

const SKILLS: string[] = [
  "Neurologia",
  "Traumatologia",
  "Posturologia",
  "Idrokinesiterapia",
];

const Home = () => {
  return (
    <div className="home">
      <div className="home__top-part-container">
        <h1 className="home__full-name">Dario F. Catania</h1>
        <p className="home__job-name">Fisioterapista</p>
      </div>
      <ul className="home__skills-list">{ToInlineList({ skills: SKILLS })}</ul>
      <Footer />
    </div>
  );
};

export default Home;

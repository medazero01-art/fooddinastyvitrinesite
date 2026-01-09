import React from 'react';
import { FaUtensils } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-container">
        <div className="about-images">
          {/* Grid of 4 images */}
          <div className="img-grid">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" alt="About 1" />
            <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=1000&auto=format&fit=crop" alt="About 2" />
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" alt="About 3" />
            <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop" alt="About 4" />
          </div>
        </div>
        <div className="about-content">
          <h5 className="section-title">À Propos</h5>
          <h1 className="about-heading">
            Bienvenue chez <FaUtensils className="text-primary" /> Food-Dynasty
          </h1>
          <p className="about-text">
            Découvrez l'engagement de notre restaurant envers l'excellence, où chaque plat est un témoignage de notre passion pour la gastronomie.
          </p>
          <p className="about-text">
            Plongez dans une expérience culinaire qui respire le luxe et la sophistication, où chaque instant est imprégné d'une ambiance d'opulence et de raffinement.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Ans d'<br /> EXPÉRIENCE</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50</div>
              <div className="stat-label">Chefs <br /> RÉPUTÉS</div>
            </div>
          </div>

          <a href="#more" className="btn btn-primary">EN SAVOIR PLUS</a>
        </div>
      </div>
    </section>
  );
};

export default About;

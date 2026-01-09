import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Savourez des Centaines <br />
                        de Saveurs sous un <br />
                        Même Toit
                    </h1>
                    <p className="hero-text">
                        Bienvenue dans notre exquis restaurant, où l'art culinaire est à l'honneur.
                        Nos chefs talentueux créent des plats qui sont un véritable délice pour les sens.
                    </p>
                </div>
                <div className="hero-image">
                    <div className="hero-img-wrapper">
                        {/* Placeholder for hero image, using a nice interior shot */}
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" alt="Restaurant Interior" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

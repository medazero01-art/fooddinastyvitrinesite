import React from 'react';
import { FaUserTie, FaUtensils, FaCartPlus, FaHeadset } from 'react-icons/fa';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      icon: <FaUserTie />,
      title: "Chefs Étoilés",
      text: "Nos chefs de renommée mondiale préparent des plats d'exception pour vous."
    },
    {
      id: 2,
      icon: <FaUtensils />,
      title: "Qualité Supérieure",
      text: "Nous n'utilisons que des ingrédients frais et de la plus haute qualité."
    },
    {
      id: 3,
      icon: <FaCartPlus />,
      title: "Commande en Ligne",
      text: "Commandez vos plats préférés facilement depuis chez vous en quelques clics."
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "Service 24/7",
      text: "Notre équipe est à votre disposition à tout moment pour vous servir."
    }
  ];

  return (
    <section id="service" className="section-padding service-section">
      <div className="container">
        <div className="service-grid">
          {services.map((item) => (
            <div key={item.id} className="service-item">
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

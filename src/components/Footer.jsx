import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-col">
                    <h3 className="footer-brand text-primary">Food-Dynasty</h3>
                    <ul className="footer-links">
                        <li><a href="#">À Propos</a></li>
                        <li><a href="#">Contactez-nous</a></li>
                        <li><a href="#">Réservation</a></li>
                        <li><a href="#">Politique de Confidentialité</a></li>
                        <li><a href="#">Termes & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Contact</h4>
                    <p><FaMapMarkerAlt className="icon" /> 123 Rue Principale, Paris, FR</p>
                    <p><FaPhoneAlt className="icon" /> +012 345 67890</p>
                    <p><FaEnvelope className="icon" /> email@exemple.com</p>
                    <div className="social-links">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Horaires</h4>
                    <p>Lundi - Samedi</p>
                    <p>09h00 - 21h00</p>
                    <p>Dimanche</p>
                    <p>10h00 - 20h00</p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Newsletter</h4>
                    <p>Abonnez-vous à notre newsletter pour ne rien manquer.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Votre email" />
                        <button className="btn btn-primary">S'INSCRIRE</button>
                    </div>
                </div>

            </div>
            <div className="copyright text-center">
                <p>&copy; {new Date().getFullYear()} Food-Dynasty. Tous Droits Réservés.</p>
                <div className="footer-bottom-links">
                    <a href="#">Accueil</a>
                    <a href="#">Cookies</a>
                    <a href="#">Aide</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

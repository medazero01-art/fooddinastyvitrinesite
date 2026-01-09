import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="page-wrapper">
             <div className="page-header section-padding text-center" style={{marginTop: '80px', backgroundColor: 'var(--dark)'}}>
                <h5 className="section-title">Contactez-nous</h5>
                <h1 className="text-light" style={{color: 'white'}}>Restons en Contact</h1>
            </div>

            <section className="section-padding contact-page">
                <div className="container contact-container-page">
                    <div className="contact-info-col">
                        <h5 className="section-title" style={{fontSize: '1rem', marginBottom: '10px'}}>PRENDRE CONTACT</h5>
                        <h1 className="contact-heading" style={{fontSize: '3rem', marginBottom: '20px', color: 'var(--white)'}}>Contact Us</h1>
                        <p className="contact-text" style={{color: '#999', marginBottom: '40px'}}>
                            Si vous avez besoin d'une consultation ou souhaitez faire une réservation spéciale, n'hésitez pas à nous écrire ou nous appeler.
                        </p>

                        <div className="contact-details">
                            <div className="contact-row">
                                <div className="contact-icon"><FaEnvelope /></div>
                                <div className="contact-val">contact@food-dynasty.com</div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-icon"><FaPhoneAlt /></div>
                                <div className="contact-val">+213 1 23 45 67 89</div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-icon"><FaClock /></div>
                                <div className="contact-val">Tous les jours : 08h00 - 23h00</div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-icon"><FaMapMarkerAlt /></div>
                                <div className="contact-val">Adress du restaurant</div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="#" className="social-circle"><FaLinkedinIn /></a>
                            <a href="#" className="social-circle"><FaTwitter /></a>
                            <a href="#" className="social-circle"><FaFacebookF /></a>
                            <a href="#" className="social-circle"><FaInstagram /></a>
                        </div>
                    </div>

                    <div className="contact-map-col">
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156743895!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sen!2sfr!4v1647567890123!5m2!1sen!2sfr" 
                            width="100%" 
                            height="450" 
                            style={{border:0, borderRadius: '10px'}} 
                            allowFullScreen="" 
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

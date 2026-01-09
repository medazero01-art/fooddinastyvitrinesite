import React from 'react';
import { FaWineGlass, FaLeaf, FaConciergeBell, FaStar } from 'react-icons/fa';

const Menu = () => {
    const menus = [
        {
            id: 1,
            title: "Menu Découverte",
            price: "45€",
            icon: <FaConciergeBell />,
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
            description: "Une introduction parfaite à notre cuisine.",
            items: [
                { name: "Carpaccio de Bœuf", desc: "Parmesan, roquette, huile de truffe" },
                { name: "Risotto aux Champignons", desc: "Champignons sauvages, crème de truffe" },
                { name: "Tiramisu Classique", desc: "Café, mascarpone, cacao" }
            ]
        },
        {
            id: 2,
            title: "Menu Signature",
            price: "65€",
            icon: <FaStar />,
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
            description: "Nos créations les plus emblématiques.",
            items: [
                { name: "Foie Gras Poêlé", desc: "Chutney de figues, brioche toastée" },
                { name: "Filet de Bar", desc: "Purée de petits pois, émulsion citronnelle" },
                { name: "Sphère au Chocolat", desc: "Coeur fondant, glace vanille" }
            ]
        },
        {
            id: 3,
            title: "Menu Végétarien",
            price: "38€",
            icon: <FaLeaf />,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
            description: "Des saveurs fraîches et naturelles.",
            items: [
                { name: "Burrata des Pouilles", desc: "Tomates cerises, basilic frais" },
                { name: "Gnocchis Maison", desc: "Sauce tomate, mozzarella di bufala" },
                { name: "Panna Cotta", desc: "Coulis de fruits rouges" }
            ]
        },
        {
            id: 4,
            title: "Accords Mets & Gazouz",
            price: "+25€",
            icon: <FaWineGlass />,
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
            description: "Sélection de gazouz pour accompagner votre repas.",
            items: [
                { name: "Sélection du Sommelier", desc: "3 verres en accord avec vos plats" },
                { name: "Eaux & Café inclus", desc: "" }
            ]
        }
    ];

    return (
        <div className="page-wrapper">
            <div className="page-header section-padding text-center" style={{ marginTop: '80px', backgroundColor: 'var(--dark)' }}>
                <h5 className="section-title">Nos Menus</h5>
                <h1 className="text-light" style={{ color: 'white' }}>Une Expérience Culinaire</h1>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="menu-grid">
                        {menus.map((menu) => (
                            <div key={menu.id} className="menu-card">
                                <div className="menu-img-container">
                                    <img src={menu.image} alt={menu.title} className="menu-img" />
                                </div>
                                <div className="menu-content-wrapper">
                                    <div className="menu-header">
                                        <div className="menu-icon">{menu.icon}</div>
                                        <h3 className="menu-title">{menu.title}</h3>
                                        <div className="menu-price">{menu.price}</div>
                                    </div>
                                    <p className="menu-desc">{menu.description}</p>
                                    <div className="menu-items">
                                        {menu.items.map((item, index) => (
                                            <div key={index} className="menu-item">
                                                <h4 className="item-name">{item.name}</h4>
                                                <p className="item-desc">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Menu;

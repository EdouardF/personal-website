import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assurez-vous d'ajouter des styles pour la barre de navigation

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À Propos</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
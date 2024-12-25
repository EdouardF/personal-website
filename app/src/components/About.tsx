import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about">
            <h1>À propos de moi</h1>
            <p>Je suis un développeur passionné avec des compétences en React, JavaScript, et développement web.</p>
            <h2>Compétences</h2>
            <ul>
                <li>Développement Frontend avec React</li>
                <li>Création d'applications web responsives</li>
                <li>Intégration d'API et gestion des données</li>
                <li>Connaissance des outils de versionnage comme Git</li>
            </ul>
            <h2>Parcours</h2>
            <p>J'ai commencé ma carrière en tant que développeur junior et j'ai progressivement acquis de l'expérience dans le développement d'applications web modernes.</p>
        </div>
    );
};

export default About;
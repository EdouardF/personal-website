import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Bienvenue sur mon site personnel</h1>
            <p>Je suis [Votre Nom], un développeur passionné par la technologie et le design.</p>
            <p>Découvrez mes compétences et mon parcours dans la section <a href="#about">À propos</a>.</p>
            <p>Consultez mes derniers articles de blog dans la section <a href="#blog">Blog</a>.</p>
        </div>
    );
};

export default Home;
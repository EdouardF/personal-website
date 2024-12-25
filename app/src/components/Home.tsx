import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>{t('welcome')}</h1>
      <p>Je suis [Votre Nom], un développeur passionné par la technologie et le design.</p>
      <p>Découvrez mes compétences et mon parcours dans la section <a href="#about">À propos</a>.</p>
      <p>Consultez mes derniers articles de blog dans la section <a href="#blog">Blog</a>.</p>
    </div>
  );
};

export default Home;
import React from 'react';
import ParallaxLayerHeader from './ParallaxLayerHeader';
import ParallaxLayerContent from './ParallaxLayerContent';
import ParallaxLayerFooter from './ParallaxLayerFooter';

const ParallaxContainer = () => {
  return (
    <div className="parallax-container">
      <ParallaxLayerHeader />
      <ParallaxLayerContent />
      <ParallaxLayerFooter />
    </div>
  );
};

export default ParallaxContainer;

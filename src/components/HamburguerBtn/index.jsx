import P from 'prop-types';

import { useEffect, useState } from 'react';
import './styles.css';

export const HamburguerBtn = ({ animationTrigger, handleStartAnimation }) => {
  const [animated, setAnimated] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleAnimated = () => {
    setAnimated(() => animationTrigger);
    handleStartAnimation();
  };

  useEffect(() => {
    setAnimationClass(() => (animated ? 'closeAni' : ''));
  }, [animated]);

  return (
    <button type="button" className={`main-header__menu-button ${animationClass}`} onClick={handleAnimated}>
      <div className="menu-button__line" id="l1"></div>
      <div className="menu-button__line" id="l2"></div>
      <div className="menu-button__line" id="l3"></div>
    </button>
  );
};

HamburguerBtn.propTypes = {
  animationTrigger: P.bool.isRequired,
  handleStartAnimation: P.func.isRequired,
};

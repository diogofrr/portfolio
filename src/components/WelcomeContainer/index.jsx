// import { useState, useEffect } from 'react';
import { BlurredBackground } from '../BlurredBackground';
import { SlArrowDown } from 'react-icons/sl';

import './styles.css';

export const WelcomeContainer = () => {
  return (
    <>
      <section className="firstcontainer">
        <BlurredBackground />
      </section>
      <div className="firstcontainer__div">
        <SlArrowDown className="neonEffect" />
      </div>
    </>
  );
};

// import { useState, useEffect } from 'react';
import { BlurredBackground } from '../BlurredBackground';
import './styles.css';

export const WelcomeContainer = () => {
  return (
    <>
      <section className="firstcontainer">
        <BlurredBackground />
      </section>
      <div className="firstcontainer__div"></div>
    </>
  );
};

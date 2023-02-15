import { NavBar } from '../../components/NavBar';
import { Profile } from '../../components/Profile';
import { SideNavIcons } from '../../components/SideNavIcons';
import { SquareEffects } from '../../components/SquareEffects';

import './styles.css';

const About = () => {
  return (
    <>
      <SquareEffects />
      <NavBar className={'about-section__navbar'} hasScroll={true} />
      <SideNavIcons className={'about-section__navicons'} />
      <Profile />
    </>
  );
};

export default About;

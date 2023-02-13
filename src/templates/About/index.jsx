import { NavBar } from '../../components/NavBar';
import { Profile } from '../../components/Profile';
import { SideNavIcons } from '../../components/SideNavIcons';

import './styles.css';

const About = () => {
  return (
    <>
      <NavBar className={'about-section__navbar'} />
      <SideNavIcons />
      <Profile />
    </>
  );
};

export default About;

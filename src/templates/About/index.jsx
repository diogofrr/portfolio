import { NavBar } from '../../components/NavBar';
import { SideNavIcons } from '../../components/SideNavIcons';

import './styles.css';

const About = () => {
  return (
    <>
      <NavBar className={'about-section__navbar'} />
      <SideNavIcons />
    </>
  );
};

export default About;

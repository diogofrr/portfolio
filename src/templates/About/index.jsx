import { KnowledgeContainer } from '../../components/KnowledgeContainer';
import { NavBar } from '../../components/NavBar';
import { ProfileContainer } from '../../components/ProfileContainer';
import { SideNavIcons } from '../../components/SideNavIcons';
import { SquareEffects } from '../../components/SquareEffects';

import './styles.css';

const About = () => {
  return (
    <>
      <SquareEffects />
      <NavBar className={'about-section__navbar'} hasScroll={true} />
      <SideNavIcons className={'about-section__navicons'} />
      <ProfileContainer />
      <KnowledgeContainer />
    </>
  );
};

export default About;

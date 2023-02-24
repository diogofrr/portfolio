import { NavBar } from '../../components/NavBar';
import { ProjectsContainer } from '../../components/ProjectsContainer';
import { SideNavIcons } from '../../components/SideNavIcons';
import { SquareEffects } from '../../components/SquareEffects';

import './styles.css';

const Projects = () => {
  return (
    <>
      <SquareEffects />
      <NavBar className={'projects-section__navbar'} />
      <SideNavIcons />
      <ProjectsContainer />
    </>
  );
};

export default Projects;

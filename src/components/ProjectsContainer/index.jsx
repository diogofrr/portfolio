import { TitleH2 } from '../TitleH2';
// import { ProjectCard } from '../ProjectCard';

import './styles.css';

export const ProjectsContainer = () => {
  return (
    <section className="projects-section">
      <TitleH2 title="Projetos" textClassName="projects-section__title" cursorClassName="projects-section__cursor" />
    </section>
  );
};

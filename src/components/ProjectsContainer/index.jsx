import { TitleH2 } from '../TitleH2';
import { ProjectCard } from '../ProjectCard';

import crud from '../../_assets/img/projects/crud-com-api.png';
import feti from '../../_assets/img/projects/feti.png';
import jogoDaVelha from '../../_assets/img/projects/jogo-da-velha.png';
import portfolio from '../../_assets/img/projects/portfolio.png';
import area from '../../_assets/img/projects/area.png';
import persFundo from '../../_assets/img/projects/personalizador-de-fundos.png';

import './styles.css';

export const ProjectsContainer = () => {
  return (
    <section className="projects-section">
      <TitleH2 title="Projetos" textClassName="projects-section__title" cursorClassName="projects-section__cursor" />
      <section className="projects-section__projects-group">
        <ProjectCard
          cardTitle="diogofrr/portfolio"
          alt="Meu portfólio"
          src={portfolio}
          href="https://github.com/diogofrr/portfolio"
        />
        <ProjectCard
          cardTitle="diogofrr/crud-com-api"
          alt="Projeto crud-com-api"
          src={crud}
          href="https://github.com/diogofrr/crud-com-api"
        />
        <ProjectCard
          cardTitle="diogofrr/landing-page-feti"
          alt="Página FETI"
          src={feti}
          href="https://github.com/diogofrr/landing-page-feti"
        />
        <ProjectCard
          cardTitle="diogofrr/jogo-da-velha"
          alt="Jogo da velha"
          src={jogoDaVelha}
          href="https://github.com/diogofrr/jogo-da-velha"
        />
        <ProjectCard
          cardTitle="diogofrr/calcular-area"
          alt="Exercício de cálculo de área"
          src={area}
          href="https://github.com/diogofrr/calcular-area"
        />
        <ProjectCard
          cardTitle="diogofrr/personalizador-de-fundo"
          alt="Exercício de personalização do fundo"
          src={persFundo}
          href="https://github.com/diogofrr/personalizador-de-fundo"
        />
      </section>
    </section>
  );
};

import { TitleH2 } from '../TitleH2';
import { ProjectCard } from '../ProjectCard';

import apiViaCep from '../../assets/img/projects/api-viacep.png';
import feti from '../../assets/img/projects/feti.png';
import jogoDaVelha from '../../assets/img/projects/jogo-da-velha.png';
import portfolio from '../../assets/img/projects/portfolio.png';
import area from '../../assets/img/projects/area.png';
import persFundo from '../../assets/img/projects/personalizador-de-fundos.png';

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
          cardTitle="diogofrr/api-viacep"
          alt="Projeto api-viacep"
          src={apiViaCep}
          href="https://github.com/diogofrr/api-viacep-teste"
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

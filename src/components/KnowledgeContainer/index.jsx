import { TitleH2 } from '../TitleH2';
import { LangIcon } from '../LangIcon';
import { NeonBtn } from '../NeonBtn';

import './styles.css';

export const KnowledgeContainer = () => {
  return (
    <section className="knowledge-section">
      <TitleH2
        title="Conhecimentos"
        textClassName={`knowledge-section__title`}
        cursorClassName={'knowledge-section__title-cursor'}
      />
      <div className="lang-container">
        <LangIcon
          alt="Ícone da linguagem HTML"
          color="#E44D26"
          langName="HTML"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
        />
        <LangIcon
          alt="Ícone da linguagem CSS"
          color="#1572B6"
          langName="CSS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
        />
        <LangIcon
          alt="Ícone da linguagem Javascript"
          color="#F0DB4F"
          langName="Javascript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        />
        <LangIcon
          alt="Ícone da linguagem Typescript"
          color="#007ACC"
          langName="Typescript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
        />
        <LangIcon
          alt="Ícone da biblioteca React"
          color="#61DAFB"
          langName="React"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <LangIcon
          alt="Ícone do ambiente de execução Node.js"
          color="#83CD29"
          langName="Node.js"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
        <LangIcon
          alt="Ícone do SGBD MySQL "
          color="#00618A"
          langName="MySQL"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
        />
        <LangIcon
          alt="Ícone do Git"
          color="#F34F29"
          langName="Git"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
        />
      </div>
      <div className="kn-buttons">
        <NeonBtn
          color="var(--corfuncional)"
          text="PROJETOS"
          link={true}
          href="/projetos"
          className="buttons__btn-projects"
        />
      </div>
    </section>
  );
};

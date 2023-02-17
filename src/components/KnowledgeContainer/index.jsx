import { TitleH2 } from '../TitleH2';
import { LangIcon } from '../LangIcon';

import './styles.css';

export const KnowledgeContainer = () => {
  return (
    <section className="knowledge-section">
      <TitleH2
        title={'Conhecimentos...'}
        textClassName={`knowledge-section__title`}
        cursorClassName="knowledge-section__title-cursor"
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
          alt="Ícone da biblioteca React"
          color="#61DAFB"
          langName="React.js"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <LangIcon
          alt="Ícone do SGBD MySQL "
          color="#00618A"
          langName="MySQL"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
        />
        <LangIcon
          alt="Ícone da linguagem Python"
          color="#FFD845"
          langName="Python"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
        />
        <LangIcon
          alt="Ícone da linguagem PHP"
          color="#6181B6"
          langName="PHP"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
        />
        <LangIcon
          alt="Ícone da biblioteca Jquery"
          color="#0868AC"
          langName="Jquery"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg"
        />
        <LangIcon
          alt="Ícone do framework BootStrap"
          color="#7952B3"
          langName="BootStrap 5"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
        />
        <LangIcon
          alt="Ícone da linguagem Java"
          color="#EA2D2E"
          langName="Java"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"
        />
      </div>
    </section>
  );
};

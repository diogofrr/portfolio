import './styles.css';

import { Circle } from '../Circle';
import { NeonBtn } from '../NeonBtn';
import { PG } from '../PG';
import { TitleH2 } from '../TitleH2';

export const Profile = () => {
  return (
    <section className="profile-section">
      <main className="profile-section__main-profile">
        <div className="main-profile__img">
          <Circle width={'400px'} height={'400px'} backgroundColor={'gray'} position={'none'} />
          <p className="img__person-name">Diogo Henrique Ferreira</p>
          <p className="img__desc">- Desenvolvedor Jr -</p>
        </div>
        <div className="main-profile__desc">
          <div className="desc__text">
            <TitleH2 textClassName="desc__h2" cursorClassName="desc__h2__cursor" title="Sobre mim..." />
            <PG className="desc__p">
              Olá! Meu nome é Diogo, sou um jovem estudante de programação de 19 anos apaixonado por tecnologia e
              programação. Estou em busca de oportunidades para desenvolver minhas habilidades em programação e
              contribuir para projetos inovadores e desafiadores. Minha principal habilidade é o desenvolvimento web com
              HTML, CSS, JavaScript e React. Sou curioso, dedicado e sempre disposto a aprender novas tecnologias e
              conceitos de programação. Se você estiver procurando por um desenvolvedor entusiasmado e comprometido,
              entre em contato comigo!
            </PG>
          </div>
          <nav className="desc__buttons">
            <NeonBtn
              color="var(--corfuncional)"
              text="CONTATAR"
              link={true}
              href="https://www.linkedin.com/in/diogo-ferreira-0513ba223/"
              className="buttons__btn-contact"
            />
          </nav>
        </div>
      </main>
    </section>
  );
};

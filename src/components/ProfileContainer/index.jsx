import './styles.css';

import { NeonBtn } from '../NeonBtn';
import { PG } from '../PG';
import { TitleH2 } from '../TitleH2';

export const ProfileContainer = () => {
  return (
    <section className="profile-section">
      <main className="profile-section__main-profile">
        <div className="main-profile__img">
          <img
            className="main-profile__avatar"
            src="https://avatars.githubusercontent.com/u/104373811?v=4"
            alt="Foto de Diogo Henrique Ferreira"
          />
          <p className="img__person-name">Diogo Henrique Ferreira</p>
          <p className="img__desc">- Desenvolvedor Jr -</p>
        </div>
        <div className="main-profile__desc">
          <div className="desc__text">
            <TitleH2 textClassName="desc__h2" cursorClassName="desc__h2__cursor" title="Sobre mim..." />
            <PG className="desc__p">
              Olá! Meu nome é Diogo, sou um jovem estudante de programação de 19 anos apaixonado por tecnologia. Estou
              em busca de oportunidades para desenvolver minhas habilidades em programação e contribuir para projetos
              inovadores e desafiadores. Minha principal habilidade é o desenvolvimento web com HTML, CSS, JavaScript e
              React. Sou curioso, dedicado e sempre disposto a aprender novas tecnologias e conceitos de programação. Se
              você estiver procurando por um desenvolvedor entusiasmado e comprometido, entre em contato comigo!
            </PG>
          </div>
          <nav className="desc__buttons">
            <NeonBtn
              color="var(--corfuncional)"
              text="CONTATAR"
              link={true}
              href="https://api.whatsapp.com/send/?phone=5531917890386&text&type=phone_number&app_absent=0"
              className="buttons__btn-contact"
              target="_blank"
              rel="noreferrer"
            />
          </nav>
        </div>
      </main>
    </section>
  );
};

import Typewriter from 'typewriter-effect';

import './styles.css';

import { Circle } from '../Circle';
import { NeonBtn } from '../NeonBtn';

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
            <h2 className="desc__h2">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Sobre mim...').start();
                }}
                options={{
                  autoStart: true,
                  cursorClassName: 'Typewriter__cursor desc__h2__cursor',
                }}
              />
            </h2>
            <p className="desc__p">
              Olá! Meu nome é Diogo, sou um jovem estudante de programação de 19 anos apaixonado por tecnologia e
              programação. Estou em busca de oportunidades para desenvolver minhas habilidades em programação e
              contribuir para projetos inovadores e desafiadores. Minha principal habilidade é o desenvolvimento web com
              HTML, CSS, JavaScript e React. Sou curioso, dedicado e sempre disposto a aprender novas tecnologias e
              conceitos de programação. Se você estiver procurando por um desenvolvedor entusiasmado e comprometido,
              entre em contato comigo!
            </p>
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

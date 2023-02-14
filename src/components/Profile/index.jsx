import { Circle } from '../Circle';
import './styles.css';
import { NeonBtn } from '../NeonBtn';

export const Profile = () => {
  return (
    <section className="profile-section">
      <div className="profile-section__img">
        <Circle width={'400px'} height={'400px'} backgroundColor={'gray'} position={'none'} />
        <p className="img__person-name">Diogo Henrique Ferreira</p>
        <p className="img__desc">- Desenvolvedor Junior -</p>
      </div>
      <div className="profile-section__desc">
        <div className="desc__text">
          <h2 className="desc__h2">Sobre mim...</h2>
          <p className="desc__p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            remaining remaining remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets sheets Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker versions of Lorem Ipsum.
          </p>
        </div>
        <nav className="desc__buttons">
          <NeonBtn
            color="#51c2ff"
            text="LinkedIn"
            link={true}
            href="https://www.linkedin.com/in/diogo-ferreira-0513ba223/"
            className="social-btn"
          />
          <NeonBtn
            color="#EA4335"
            text="Email "
            link={true}
            href="mailto:ddiogof20@gmail.com"
            className="social-btn email-btn"
          />
        </nav>
      </div>
    </section>
  );
};

import { Circle } from '../Circle';
import './styles.css';

export const Profile = () => {
  return (
    <section className="profile-section">
      <div className="profile-section__img">
        <Circle width={'450px'} height={'450px'} backgroundColor={'gray'} position={'none'} />
      </div>
      <div className="profile-section__desc">
        <div className="desc__text">
          <h2>Sobre mim...</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            remaining remaining remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets sheets Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker versions of Lorem Ipsum.
          </p>
        </div>
        <nav className="desc__buttons">
          <ul>
            <li>
              <a href="#">LINKEDIN</a>
            </li>
            <li>
              <a href="#">E-MAIL</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

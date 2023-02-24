import P from 'prop-types';

import './styles.css';

export const ProjectCard = ({ src, alt, cardTitle, href }) => {
  return (
    <div className="card">
      <img src={src} alt={alt} className="card__img" />
      <div className="card__description">
        <h3 className="card__title">{cardTitle}</h3>
        <a href={href} target="_blank" className="card__a" rel="noreferrer">
          <button className="card__button">Visualizar</button>
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  src: P.string.isRequired,
  alt: P.string.isRequired,
  cardTitle: P.string.isRequired,
  href: P.string.isRequired,
};

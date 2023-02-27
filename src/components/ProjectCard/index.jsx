import P from 'prop-types';

import './styles.css';

export const ProjectCard = ({ src, alt, cardTitle, href }) => {
  return (
    <a href={href} target="_blank" className="card-a" rel="noreferrer">
      <div className="card">
        <div className="card-background"></div>
        <img src={src} alt={alt} className="card__img" />
        <div className="card__description">
          <h3 className="card__title">{cardTitle}</h3>
        </div>
      </div>
      <div className="card__shadow"></div>
    </a>
  );
};

ProjectCard.propTypes = {
  src: P.string.isRequired,
  alt: P.string.isRequired,
  cardTitle: P.string.isRequired,
  href: P.string.isRequired,
};

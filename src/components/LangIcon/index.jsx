import P from 'prop-types';
import './styles.css';

export const LangIcon = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

LangIcon.propTypes = {
  src: P.string.isRequired,
  alt: P.string.isRequired,
};

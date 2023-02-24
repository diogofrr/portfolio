import P from 'prop-types';
import './styles.css';

export const LangIcon = ({ src, alt, langName, color }) => {
  return (
    <div className="lang-box">
      <img
        className="lang-box__lang-icon"
        src={src}
        alt={alt}
        style={{ filter: `drop-shadow(0px 0px 2px ${color})` }}
      />
      <p className="lang-box__lang-name">{langName}</p>
    </div>
  );
};

LangIcon.propTypes = {
  src: P.string.isRequired,
  alt: P.string.isRequired,
  langName: P.string.isRequired,
  color: P.string.isRequired,
};

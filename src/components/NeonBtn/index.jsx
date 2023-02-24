import P from 'prop-types';

import { BtnStyle } from './styles.js';
import './styles.css';

export const NeonBtn = ({ color, text, className = '', link, href = '' }) => {
  return (
    <BtnStyle colorBtn={color} type="button" className={`neon-button ${className}`}>
      {link === false ? (
        <span className="button__text">{text}</span>
      ) : (
        <a className="button__text" href={href}>
          {text}
        </a>
      )}
    </BtnStyle>
  );
};

NeonBtn.propTypes = {
  color: P.string.isRequired,
  text: P.string.isRequired,
  className: P.string,
  href: P.string,
  link: P.bool.isRequired,
};

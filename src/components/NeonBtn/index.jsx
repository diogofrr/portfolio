import P from 'prop-types';

import { BtnStyle } from './styles.js';
import './styles.css';
import { Link } from 'react-router-dom';

export const NeonBtn = ({ color, text, className = '', link, href = '', type = 'button', target = '_self' }) => {
  return (
    <BtnStyle colorBtn={color} type={type} className={`neon-button ${className}`}>
      {link === false ? (
        <span className="button__text">{text}</span>
      ) : (
        <Link className="button__text" to={href} target={target}>
          {text}
        </Link>
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
  type: P.string,
  target: P.string,
};

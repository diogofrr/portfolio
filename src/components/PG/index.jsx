import P from 'prop-types';

import './styles.css';

export const PG = ({ children, className }) => {
  return <p className={`pg__p ${className}`}>{children}</p>;
};

PG.propTypes = {
  children: P.string.isRequired,
  className: P.string.isRequired,
};

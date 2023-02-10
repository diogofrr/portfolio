import P from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

export const NavItems = ({ menuAnimation }) => {
  return (
    <nav className={`main-header__nav ${menuAnimation}`}>
      <ul className="main-header__ul" role="menu">
        <li className="main-header__li">
          <Link to="/">Início</Link>
        </li>
        <li className="main-header__li">
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className="main-header__li">
          <Link to="/">Projetos</Link>
        </li>
        <li className="main-header__li">
          <Link to="/">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

NavItems.propTypes = {
  menuAnimation: P.string.isRequired,
};

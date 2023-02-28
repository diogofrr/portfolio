import P from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

export const NavItems = ({ menuAnimation, onClick }) => {
  return (
    <nav className={`main-header__nav ${menuAnimation}`} onClick={onClick}>
      <ul className="main-header__ul" role="menu">
        <li className="main-header__li">
          <Link to="/">Início</Link>
        </li>
        <li className="main-header__li">
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className="main-header__li">
          <Link to="/projetos">Projetos</Link>
        </li>
        <li className="main-header__li">
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

NavItems.propTypes = {
  menuAnimation: P.string.isRequired,
  onClick: P.func.isRequired,
};

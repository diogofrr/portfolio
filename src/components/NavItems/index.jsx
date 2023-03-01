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
          <a
            href="https://api.whatsapp.com/send/?phone=5531917890386&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            Contatar
          </a>
        </li>
      </ul>
    </nav>
  );
};

NavItems.propTypes = {
  menuAnimation: P.string.isRequired,
  onClick: P.func.isRequired,
};

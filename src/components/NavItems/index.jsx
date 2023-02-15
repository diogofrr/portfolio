import P from 'prop-types';

import './styles.css';

export const NavItems = ({ menuAnimation }) => {
  return (
    <nav className={`main-header__nav ${menuAnimation}`}>
      <ul className="main-header__ul" role="menu">
        <li className="main-header__li">
          <a href="/">Início</a>
        </li>
        <li className="main-header__li">
          <a href="/sobre">Sobre</a>
        </li>
        <li className="main-header__li">
          <a href="/">Projetos</a>
        </li>
        <li className="main-header__li">
          <a href="/">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

NavItems.propTypes = {
  menuAnimation: P.string.isRequired,
};

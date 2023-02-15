import { useEffect, useState } from 'react';
import P from 'prop-types';
import useScrollBlock from '../../utils/useScrollBlock';

import './styles.css';
import { HamburguerBtn } from '../HamburguerBtn';
import { Logo } from '../Logo';
import { NavItems } from '../NavItems';

export const NavBar = ({ className, hasScroll = false }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  function toggleMenu() {
    setActiveMenu(() => !menuAnimation);
  }

  useEffect(() => {
    if (activeMenu) {
      setMenuAnimation(() => 'nav-active');
      setButtonAnimation(() => false);
      hasScroll && blockScroll();
    } else {
      setMenuAnimation(() => '');
      setButtonAnimation(() => true);
      hasScroll && allowScroll();
    }
  }, [activeMenu, blockScroll, allowScroll, hasScroll]);

  return (
    <header className={`main-header ${className}`}>
      <Logo />
      <HamburguerBtn animationTrigger={buttonAnimation} handleStartAnimation={toggleMenu} />
      <NavItems menuAnimation={menuAnimation} />
    </header>
  );
};

NavBar.propTypes = {
  className: P.string.isRequired,
  hasScroll: P.bool,
};

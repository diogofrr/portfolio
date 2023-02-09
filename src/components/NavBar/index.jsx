import { useEffect, useState } from 'react';

import './styles.css';
import { HamburguerBtn } from '../HamburguerBtn';
import { Logo } from '../Logo';
import { NavItems } from '../NavItems';

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const [buttonAnimation, setButtonAnimation] = useState(false);

  function toggleMenu() {
    setActiveMenu(() => !menuAnimation);
  }

  useEffect(() => {
    if (activeMenu) {
      setMenuAnimation(() => 'nav-active');
      setButtonAnimation(() => false);
    } else {
      setMenuAnimation(() => '');
      setButtonAnimation(() => true);
    }
  }, [activeMenu]);

  return (
    <header className="main-header">
      <Logo />
      <HamburguerBtn animationTrigger={buttonAnimation} handleStartAnimation={toggleMenu} />
      <NavItems menuAnimation={menuAnimation} />
    </header>
  );
};

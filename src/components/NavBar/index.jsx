import { useCallback, useEffect, useState } from 'react';
import P from 'prop-types';
import useScrollBlock from '../../hooks/useScrollBlock';

import './styles.css';
import { HamburguerBtn } from '../HamburguerBtn';
import { Logo } from '../Logo';
import { NavItems } from '../NavItems';

export const NavBar = ({ className, hasScroll = false }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const toggleMenu = useCallback(() => {
    setActiveMenu((menuAnimation) => !menuAnimation);
  }, []);

  const handleMenuAnimation = useCallback(() => {
    if (activeMenu) {
      setMenuAnimation('nav-active');
      setButtonAnimation(false);
      hasScroll && blockScroll();
    } else {
      setMenuAnimation('');
      setButtonAnimation(true);
      hasScroll && allowScroll();
    }
  }, [activeMenu, allowScroll, blockScroll, hasScroll]);

  useEffect(() => {
    handleMenuAnimation();
  }, [activeMenu, blockScroll, allowScroll, hasScroll, handleMenuAnimation]);

  return (
    <header className={`main-header ${className}`}>
      <Logo />
      <HamburguerBtn animationTrigger={buttonAnimation} handleStartAnimation={toggleMenu} />
      <NavItems
        menuAnimation={menuAnimation}
        onClick={() => {
          setActiveMenu(() => false);
          allowScroll();
        }}
      />
    </header>
  );
};

NavBar.propTypes = {
  className: P.string.isRequired,
  hasScroll: P.bool,
};

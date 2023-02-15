import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { SlEnvolopeLetter } from 'react-icons/sl';
import P from 'prop-types';

import './styles.css';

export const SideNavIcons = ({ className }) => {
  return (
    <nav className={`side-icons ${className}`}>
      <a href="https://github.com/diogofrr" target="_blank" rel="noreferrer">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/diogo-ferreira-0513ba223/" target="_blank" rel="noreferrer">
        <FiLinkedin />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=5531917890386&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp />
      </a>
      <a href="mailto:ddiogof20@gmail.com" target="_blank" rel="noreferrer">
        <SlEnvolopeLetter />
      </a>
    </nav>
  );
};

SideNavIcons.defaultPropTypes = {
  className: '',
};

SideNavIcons.propTypes = {
  className: P.string,
};

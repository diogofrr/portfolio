import { NavBar } from '../../components/NavBar';
import { SideNavIcons } from '../../components/SideNavIcons';
import { ContactContainer } from '../../components/ContactContainer';

import './styles.css';

const Contact = () => {
  return (
    <>
      <NavBar className={'contact-section__navbar'} />
      <SideNavIcons />
      <ContactContainer />
    </>
  );
};

export default Contact;

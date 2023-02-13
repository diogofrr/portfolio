import { NavBar } from '../../components/NavBar';
import { SideNavIcons } from '../../components/SideNavIcons';
import { WelcomeContainer } from '../../components/WelcomeContainer';

import './styles.css';

const Home = () => {
  return (
    <>
      <NavBar className={'welcome-section__navbar'} />
      <WelcomeContainer />
      <SideNavIcons />
    </>
  );
};

export default Home;

import './styles.css';
import { BiBookOpen } from 'react-icons/bi';

export const Logo = () => {
  return (
    <div className="main-header__logo">
      <BiBookOpen className={'logo__icon'} />
    </div>
  );
};

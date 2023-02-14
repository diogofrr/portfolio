import { Link } from 'react-router-dom';

import { NeonBtn } from '../NeonBtn';
import { TypingText } from '../TypingText';
import './styles.css';

export const BlurredBackground = () => {
  return (
    <>
      <div className="welcome-section__div--blur"></div>
      <TypingText />
      <Link to="/sobre">
        <NeonBtn color={'#19FFDC'} text={'CONHECER'} className={'welcome-section__button'} link={false} />
      </Link>
    </>
  );
};

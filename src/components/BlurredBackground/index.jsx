import { NeonBtn } from '../NeonBtn';
import { TypingText } from '../TypingText';
import './styles.css';

export const BlurredBackground = () => {
  return (
    <>
      <div className="welcome-section__div--blur"></div>
      <TypingText />
      <NeonBtn color={'#19FFDC'} text={'CONHECER'} className={'welcome-section__button'} link={true} href="/sobre" />
    </>
  );
};

import Typewriter from 'typewriter-effect';
import './styles.css';

export const TypingText = () => {
  return (
    <span className="text-box">
      <h1 className="text-box__title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Seja Bem-Vindo!').start();
          }}
          options={{
            autoStart: true,
            cursorClassName: 'Typewriter__cursor text-box__cursor',
          }}
        />
      </h1>
    </span>
  );
};

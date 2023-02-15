import Typewriter from 'typewriter-effect';
import './styles.css';

export const TypingText = () => {
  return (
    <span className="text-box">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<h1 class="text-box__title">Seja Bem-Vindo!</h1>')
            .pauseFor(300)
            .callFunction(() => {
              document.querySelector('.text-box__cursor').style.fontSize = '2.6rem';
              document.querySelector('.text-box__cursor').style.color = 'var(--corsecundaria)';
              document.querySelector('.text-box__cursor').style.textShadow = '0 0 9px var(--corsecundaria)';
            })
            .typeString('<br/>')
            .typeString('<h2 class="text-box__subtitle">Conheça um pouco mais sobre mim e meus projetos.</h2>')
            .start();
        }}
        options={{
          autoStart: true,
          cursorClassName: 'Typewriter__cursor text-box__cursor',
        }}
      />
    </span>
  );
};

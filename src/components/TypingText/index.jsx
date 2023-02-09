// import P from 'prop-types';
import Typewriter from 'typewriter-effect';
import './styles.css';

export const TypingText = () => {
  return (
    <span className="text-box">
      <Typewriter
        wrapperClassName={'Typewriter__wrapper'}
        cursorClassName={'Typewriter__cursor'}
        onInit={(typewriter) => {
          typewriter
            .typeString('Lorem Ipsum Dolor')
            .pauseFor(2500)
            .deleteAll()
            .typeString('sir Amet! Lorem ipsum dolor')
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

// TypingText.propTypes = {
//   textArray: P.string.isRequired,
// };

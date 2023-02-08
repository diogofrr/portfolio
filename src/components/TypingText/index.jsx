/* eslint-disable no-unused-vars */
import P from 'prop-types';
import './styles.css';

export const TypingText = ({ Text }) => {
  const teste = ['ola pessoa', 'oii tudo bem', 'afhaugfah'];

  return (
    <span className="text-box">
      <h1 className="typed-text"></h1>
      <span className="cursor">&nbsp;</span>
    </span>
  );
};

TypingText.defaultProps = {
  Text: '',
};

TypingText.propTypes = {
  Text: P.array,
};

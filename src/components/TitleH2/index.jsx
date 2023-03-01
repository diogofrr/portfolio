import Typewriter from 'typewriter-effect';
import P from 'prop-types';

import { useRef } from 'react';
import { useObserver } from '../../hooks/useObserver';

import './styles.css';

export const TitleH2 = ({ title, textClassName = '', cursorClassName = '' }) => {
  const titleRef = useRef(null);
  const isVisible = useObserver(titleRef);

  return (
    <h2 className={`title__h2 ${textClassName}`} ref={titleRef}>
      {isVisible && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(`${title}`).start();
          }}
          options={{
            autoStart: isVisible,
            cursorClassName: `Typewriter__cursor ${cursorClassName}`,
          }}
        />
      )}
    </h2>
  );
};

TitleH2.propTypes = {
  title: P.string.isRequired,
  textClassName: P.string,
  cursorClassName: P.string,
};

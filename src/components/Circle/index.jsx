import P from 'prop-types';
import './styles.css';

export const Circle = ({ backgroundColor, top, left, right, bottom, width, height, position }) => {
  const circleStyle = {
    borderRadius: '100%',
    position: position,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    backgroundColor: backgroundColor,
    width: width,
    height: height,
  };

  return <div style={circleStyle}></div>;
};

Circle.defaultProptypes = {
  top: '',
  right: '',
  left: '',
  bottom: '',
  position: 'absolute',
};

Circle.propTypes = {
  backgroundColor: P.string.isRequired,
  position: P.string,
  top: P.string,
  right: P.string,
  left: P.string,
  bottom: P.string,
  width: P.string.isRequired,
  height: P.string.isRequired,
};

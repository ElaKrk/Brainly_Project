import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const SIZE = {
  SMALL: {className: 'small'},
  NORMAL: {className: 'normal'},
  LARGE: {className: 'large'},
  XLARGE: {className: 'xlarge'},
  XXLARGE: {className: 'xxlarge'},
};

const RoundImage = ({size = SIZE.NORMAL, imgSrc, className, title, ...props}) => {
  const roundImgClass = classNames({
    [`brn-round-image--${size.className}`]: size !== SIZE.normal,
  }, className);


  let roundImageContent;

  if (imgSrc) {
    roundImageContent = <img className="brn-round-image" src={imgSrc} alt={title} title={title} />;
  } else {
    roundImageContent =
      <div className="brn-round-image brn-round-image--icon"/>;
  }

  return (
    <div {...props} className={roundImgClass}>
      {roundImageContent}
    </div>
  );
};

RoundImage.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  imgSrc: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default RoundImage;
export {SIZE};

import React from 'react';
import classNames from 'classnames';

const SIZE = {
  SMALL: { className: 'small' },
  NORMAL: { className: 'normal' },
  LARGE: { className: 'large' },
};

const ImageSquare = ({
  size = SIZE.NORMAL, imgSrc, className, title, ...props
}) => {
  const squareImgClass = classNames({
    [`brn-square-image--${size.className}`]: size !== SIZE.normal,
  }, className);

  let imageSquareContent;

  if (imgSrc) {
    imageSquareContent = <img className="brn-square-image" src={imgSrc} alt={title} title={title} />;
  } else {
    imageSquareContent =
      <div className="brn-square-image brn-square-image--icon" />;
  }

  return (
    <div {...props} className={squareImgClass}>
      {imageSquareContent}
    </div>
  );
};

export default ImageSquare;
export { SIZE };

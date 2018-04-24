// @flow
import React from 'react';
import classNames from 'classnames';

const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

type ImageSquareType = {
  size?: string,
  className?: string,
  imgSrc?: string,
  title?: string
}
const ImageSquare = ({
  size, imgSrc, className, title, ...props
}:
ImageSquareType) => {
  const squareImgClass = classNames(
    ['brn-square-image--', size],
    className,
  );

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

ImageSquare.defaultProps = {
  size: 'normal',
  className: undefined,
  imgSrc: undefined,
  title: undefined,
};

export default ImageSquare;
export { SIZE };

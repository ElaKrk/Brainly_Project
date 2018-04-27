// @flow
import * as React from 'react';
import classNames from 'classnames';

const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

type ImageSquarePropsType = {
  size?: string,
  className?: string,
  imgSrc?: string,
  title?: string
}

const ImageSquare = ({
  size, imgSrc, className, title, ...props }:
ImageSquarePropsType) => {
  const squareImgClass = classNames(
    size ? `brn-square-image--${size}` : `brn-square-image--${ImageSquare.defaultProps.size}`,
    className,
  );

  let imageSquareContent;

  if (imgSrc) {
    imageSquareContent = <img className="brn-square-image" src={imgSrc} alt={title} title={title} />;
  } else {
    imageSquareContent = <div className="brn-square-image brn-square-image--icon" />;
  }

  return (
    <div {...props} className={squareImgClass}>
      {imageSquareContent}
    </div>
  );
};

ImageSquare.defaultProps = {
  size: SIZE.NORMAL,
  className: undefined,
  imgSrc: undefined,
  title: undefined,
};

export default ImageSquare;
export { SIZE };

// @flow
import React from 'react';
import classNames from 'classnames';

const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge',
};

type ImageRoundType = {
  size?: string,
  imgSrc?: string,
  className?: string,
  title?: string
}
const ImageRound = ({
  size, imgSrc, className, title, ...props }:
  ImageRoundType) => {
  const imageRoundClass = classNames(
    ['brn-round-image--', size],
    className,
  );


  let imageRoundContent;

  if (imgSrc) {
    imageRoundContent = <img className="brn-round-image" src={imgSrc} alt={title} title={title} />;
  } else {
    imageRoundContent =
      <div className="brn-round-image brn-round-image--icon" />;
  }

  return (
    <div {...props} className={imageRoundClass}>
      {imageRoundContent}
    </div>
  );
};

ImageRound.defaultProps = {
  size: SIZE.NORMAL,
  imgSrc: undefined,
  className: undefined,
  title: undefined,
};

export default ImageRound;
export { SIZE };

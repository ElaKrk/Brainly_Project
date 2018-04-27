// @flow
import * as React from 'react';
import classNames from 'classnames';

const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge',
};

type ImageRoundPropsType = {
  size?: string,
  imgSrc?: string,
  className?: string,
  title?: string
}

const ImageRound = ({
  size, imgSrc, className, title, ...props }:
  ImageRoundPropsType) => {
  const imageRoundClass = classNames(
    size ? `brn-round-image--${size}` : `brn-round-image--${ImageRound.defaultProps.size}`,
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

import React from 'react';
import classNames from 'classnames';

const SIZE = {
  SMALL: { className: 'small' },
  NORMAL: { className: 'normal' },
  LARGE: { className: 'large' },
  XLARGE: { className: 'xlarge' },
  XXLARGE: { className: 'xxlarge' },
};

const ImageRound = ({
  size = SIZE.NORMAL, imgSrc, className, title, ...props
}) => {
  const roundImgClass = classNames({
    [`brn-round-image--${size.className}`]: size !== SIZE.normal,
  }, className);


  let imageRoundContent;

  if (imgSrc) {
    imageRoundContent = <img className="brn-round-image" src={imgSrc} alt={title} title={title} />;
  } else {
    imageRoundContent =
      <div className="brn-round-image brn-round-image--icon" />;
  }

  return (
    <div {...props} className={roundImgClass}>
      {imageRoundContent}
    </div>
  );
};

export default ImageRound;
export { SIZE };

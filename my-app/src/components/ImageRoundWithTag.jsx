// @flow
import React from 'react';
import classNames from 'classnames';
import Box from 'style-guide/src/components/box/Box';
import ContentBoxContent from 'style-guide/src/components/content-box/ContentBoxContent';
import ImageRound, { SIZE as ROUND_IMAGE_SIZE } from './ImageRound';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large',
};

type ImageRoundWithTagType = {
  size?: string,
  className?: string,
  tagValue?: string,
  tagText?: string
}

const ImageRoundWithTag = ({
  size, className, tagValue, tagText,
}:
ImageRoundWithTagType) => {
  const tagClass = classNames(
    'brn-image-tag', 'brn-image-tag--position-right',
    ['brn-image-tag-size--', size],
    className,
  );


  return (
    <ContentBoxContent className="brn-image-with-tag">
      <ImageRound size={ROUND_IMAGE_SIZE.LARGE} />
      <Box noMinHeight padding="no-padding" className={tagClass}>
        {tagValue}
        <span>{tagText}</span>
      </Box>
    </ContentBoxContent>
  );
};
ImageRoundWithTag.defaultProps = {
  size: 'normal',
  className: undefined,
  tagValue: undefined,
  tagText: undefined,
};

export default ImageRoundWithTag;
export { SIZE };

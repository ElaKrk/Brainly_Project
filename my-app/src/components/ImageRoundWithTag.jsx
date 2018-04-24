/* eslint react/prop-types: 0 */
import React from 'react';
import classNames from 'classnames';
import Box from 'style-guide/src/components/box/Box';
import ContentBoxContent from 'style-guide/src/components/content-box/ContentBoxContent';
import ImageRound, { SIZE as ROUND_IMAGE_SIZE } from './ImageRound';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large',
};

const ImageRoundWithTag = ({
  size = SIZE.SMALL, className, tagValue, tagText,
}) => {
  const tagClass = classNames(
    'brn-image-tag', 'brn-image-tag--position-right',
    { [`brn-image-tag-size--${size}`]: size },
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

export default ImageRoundWithTag;
export { SIZE };

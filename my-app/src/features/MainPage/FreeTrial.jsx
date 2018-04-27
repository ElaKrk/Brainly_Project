// @flow
import * as React from 'react';
import ContentBox from 'style-guide/src/components/content-box/ContentBox';
import ContentBoxContent, { SIZE } from 'style-guide/src/components/content-box/ContentBoxContent';
import ContentBoxTitle from 'style-guide/src/components/content-box/ContentBoxTitle';
import TextBit, { SIZE as TEXT_BIT_SIZE, COLOR as TEXT_BIT_COLOR } from 'style-guide/src/components/text/TextBit';
import ImageRound, { SIZE as ROUND_IMAGE_SIZE } from '../../components/ImageRound';
import ButtonFreeTrial from '../../components/ButtonFreeTrial';

const FreeTrial = () => (
  <ContentBox>
    <ContentBoxContent className="brn-content-box__content brn-box--flex brn-box--flex-spread">
      <div className="brn-box--width-medium">
        <ContentBoxTitle>
          <TextBit size={TEXT_BIT_SIZE.SMALL} color={TEXT_BIT_COLOR.DARK}>
            Get answers to all your questions
          </TextBit>
        </ContentBoxTitle>
        <ContentBoxContent spacedTop={SIZE.XXLARGE}>
          <ButtonFreeTrial />
        </ContentBoxContent>
      </div>
      <div className="brn-box--width-small">
        <ImageRound imgSrc="https://source.unsplash.com/240x240/?cat" size={ROUND_IMAGE_SIZE.XLARGE} />
      </div>
    </ContentBoxContent>
  </ContentBox>
);

export default FreeTrial;

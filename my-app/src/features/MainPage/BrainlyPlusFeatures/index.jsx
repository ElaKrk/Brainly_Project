import React from 'react';
import ContentBox from 'style-guide/src/components/content-box/ContentBox';
import ContentBoxContent, {SIZE as CONTENT_BOX_CONT_SIZE} from 'style-guide/src/components/content-box/ContentBoxContent';
import RoundImage, {SIZE as ROUND_IMAGE_SIZE} from '../../../components/RoundImage.jsx';
import HeaderSecondary ,{HEADER_SIZE} from 'style-guide/src/components/text/HeaderPrimary';
import TabsContainer, {WIDTH as TABS_WIDTH} from '../../../components/TabsContainer';

const BrainlyPlusFeatures = () => {
  return (
    <ContentBox>
        <ContentBoxContent className="brn-content-box__content brn-box--flex brn-box-flex-center">
          <ContentBoxContent className="brn-box--width-small">
            <RoundImage imgSrc="https://source.unsplash.com/240x240/?cat" size={ROUND_IMAGE_SIZE.LARGE} />
          </ContentBoxContent>
          <ContentBoxContent className="brn-box--width-large">
            <ContentBoxContent>
              <HeaderSecondary size={HEADER_SIZE.SMALL}> Brainly Plus benefits for
              </HeaderSecondary>
              <TabsContainer width={TABS_WIDTH.SMALL}/>
            </ContentBoxContent>
          </ContentBoxContent>
        </ContentBoxContent>
    </ContentBox>
  );
};

export default BrainlyPlusFeatures;
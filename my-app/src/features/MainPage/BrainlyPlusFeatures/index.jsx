import React from 'react';
import ContentBox from 'style-guide/src/components/content-box/ContentBox';
import ContentBoxContent, { SIZE as CONTENT_BOX_CONT_SIZE } from 'style-guide/src/components/content-box/ContentBoxContent';
import TabsContainer from '../../../components/TabsContainer';

const BrainlyPlusFeatures = () => {
  return (
    <ContentBox>
      <ContentBoxContent className="brn-content-box__content brn-content-box__content--padding-small">
        <TabsContainer />
      </ContentBoxContent>
    </ContentBox>
  );
};

export default BrainlyPlusFeatures;
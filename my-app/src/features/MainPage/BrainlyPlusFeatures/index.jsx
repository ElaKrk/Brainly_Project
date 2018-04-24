import React from 'react';
import ContentBox from 'style-guide/src/components/content-box/ContentBox';
import ContentBoxContent from 'style-guide/src/components/content-box/ContentBoxContent';
import TabsBrnBenefits from './TabsBrnBenefits';
// import TabsBrnHelps from './TabsBrnHelps';

const BrainlyPlusFeatures = () => (
  <React.Fragment>
    <ContentBox>
      <ContentBoxContent className="brn-content-box__content brn-content-box__content--padding-small">
        <TabsBrnBenefits />
      </ContentBoxContent>
    </ContentBox>
    <ContentBox className="brn-content-box--light">
      <ContentBoxContent className="brn-content-box__content brn-content-box__content--padding-small">
        {/* <TabsBrnHelps /> */}
      </ContentBoxContent>
    </ContentBox>
  </React.Fragment>
);

export default BrainlyPlusFeatures;

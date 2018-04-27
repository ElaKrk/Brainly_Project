// @flow
import * as React from 'react';
import ContentBox from 'style-guide/src/components/content-box/ContentBox';
import ContentBoxContent, { SIZE as CONTENT_BOX_CONT_SIZE } from 'style-guide/src/components/content-box/ContentBoxContent';
import ContentBoxTitle from 'style-guide/src/components/content-box/ContentBoxTitle';
import HeaderSecondary, { HEADER_SIZE } from 'style-guide/src/components/text/HeaderPrimary';
import Text, { WEIGHT } from 'style-guide/src/components/text/Text';
import BoxWithPrice from '../../../components/BoxWithPrice';
import ListBrainlyBenefits from './ListBrainlyBenefits';
import ButtonGetBrnPlus from '../../../components/ButtonGetBrnPlus';

const price = '$14.95';
const methodsOfPayment = 'credit card, SMS';

const GetBrainlyPlus = () => (
  <ContentBox className="brn-content-box--light">
    <ContentBoxContent className="brn-content-box__content">
      <ContentBoxTitle>
        <HeaderSecondary className="sg-text--uppercase brn-text-bit--xxsmall brn-text--padding-bottom-small" size={HEADER_SIZE.NORMAL}>Get help with school work</HeaderSecondary>
      </ContentBoxTitle>
      <Text weight={WEIGHT.REGULAR}>
        Have you ever struggled with homework, or prepared for a test and haven`t got a clue what
        answer is correct? Brainly Plus will help with all troubles.
      </Text>
      <ContentBoxContent className="brn-box--flex brn-box--flex-spread">
        <div className="brn-box--width-small">
          <BoxWithPrice price={price} methodsOfPayment={methodsOfPayment} />
        </div>
        <div className="brn-box--width-large">
          <ListBrainlyBenefits />
          <ContentBoxContent spacedTop={CONTENT_BOX_CONT_SIZE.LARGE} className="brn-element--margin-left">
            <ButtonGetBrnPlus>Get Brainly Plus Now</ButtonGetBrnPlus>
          </ContentBoxContent>
        </div>
      </ContentBoxContent>
    </ContentBoxContent>
  </ContentBox>
);

export default GetBrainlyPlus;

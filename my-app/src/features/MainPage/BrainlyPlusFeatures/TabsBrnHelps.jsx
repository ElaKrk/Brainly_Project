import React from 'react';
import HeaderSecondary, { HEADER_SIZE } from 'style-guide/src/components/text/HeaderPrimary';
import ListVerifiedAnswers from './ListVerifiedAnswers';
import TabSwitch from '../../../components/TabSwitch';
import ImageRoundWithTag from '../../../components/ImageRoundWithTag';

const tabOne = 'Verified answers';
const tabTwo = 'Priority questions';
const tabThree = 'Ad-free';

const VerifiedContent = 'Verified Answers:';
const PriorityContent = 'Priority questions ...';
const AddFreeContent = 'Ad-free ...';

const numberOfVerifiedAnswers = '2 mln';


const tabElementOne = {
  name: tabOne,
  content: [<ImageRoundWithTag tagValue={numberOfVerifiedAnswers} tagText="Verified Answers" />,
    VerifiedContent,
    <ListVerifiedAnswers />],
};

const tabElementTwo = {
  name: tabTwo,
  content: [<ImageRoundWithTag tagValue={numberOfVerifiedAnswers} tagText="Verified Answers" />,
    PriorityContent],
};

const tabElementThree = {
  name: tabThree,
  content: [
    <ImageRoundWithTag tagValue={numberOfVerifiedAnswers} tagText="Verified Answers" />,
    AddFreeContent,
  ],
};

const tabElements = [tabElementOne, tabElementTwo, tabElementThree];

const TabsBrnHelps = () => (
  <React.Fragment>
    <div className="brn-box--width-medium brn-tabs-container__header
brn-text--padding-bottom-medium"
    >
      <HeaderSecondary size={HEADER_SIZE.SMALL}>
          How Brainly Plus helps you
      </HeaderSecondary>
    </div>
    <TabSwitch tabElements={tabElements} border />
  </React.Fragment>
);

export default TabsBrnHelps;

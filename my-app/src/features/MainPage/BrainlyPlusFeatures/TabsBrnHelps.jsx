import React from 'react';
import HeaderSecondary, { HEADER_SIZE } from 'style-guide/src/components/text/HeaderPrimary';
import ListVerifiedAnswers from './ListVerifiedAnswers.jsx';

import Tabs from '../../../components/Tabs';
import Tab from '../../../components/Tab';
import ImageRoundWithTag from '../../../components/ImageRoundWithTag';

const tabOne = "Verified answers";
const tabTwo = "Priority questions";
const tabThree = "Ad-free";

const VerifiedContent = 'Verified Answers:';
const PriorityContent = "Priority questions ...";
const AddFreeContent = "Ad-free ...";

const numberOfVerifiedAnswers = '2 mln';

const TabsBrnHelps = () => {

  return (
    <React.Fragment>
      <div className="brn-box--width-medium brn-tabs-container__header brn-text--padding-bottom-medium">
        <HeaderSecondary size={HEADER_SIZE.SMALL}>
          How Brainly Plus helps you
        </HeaderSecondary>
      </div>
      <Tabs border>

        <Tab name={tabOne}>
          <ImageRoundWithTag tagValue={numberOfVerifiedAnswers} tagText="Verified Answers" />
          {VerifiedContent}
          <ListVerifiedAnswers />
        </Tab>

        <Tab name={tabTwo} className="brn-box--flex">
          <ImageRoundWithTag tagValue={numberOfVerifiedAnswers} tagText="Verified Answers" />
          
          {PriorityContent}
        </Tab>

        <Tab name={tabThree} className="brn-box--flex">
          <ImageRoundWithTag tagValue={numberOfVerifiedAnswers} tagText="Verified Answers" />

          {AddFreeContent}
        </Tab>
      </Tabs>
    </React.Fragment>
  )
}

export default TabsBrnHelps;
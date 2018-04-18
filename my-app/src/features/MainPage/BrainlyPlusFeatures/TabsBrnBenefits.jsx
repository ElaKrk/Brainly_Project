import React from 'react';
import ButtonGetBrnPlus from '../../../components/ButtonGetBrnPlus.jsx';
import HeaderSecondary, { HEADER_SIZE } from 'style-guide/src/components/text/HeaderPrimary';
import ImageRound, { SIZE as ROUND_IMAGE_SIZE } from '../../../components/ImageRound.jsx';
import Text, { WEIGHT as TEXT_WEIGHT } from 'style-guide/src/components/text/Text';

import Tabs from '../../../components/Tabs';
import Tab from '../../../components/Tab';

const tabOne = "Students";
const tabTwo = "Parents";
const tabThree = "Homeschoolers";

const StudentsTabContent = "I used Brainly Plus so I can graduate at the same time as my friend. It is so wonderful and helpful in different ways. Seriously it is like a group study with all the people in world. And most important thing is that, when you have any difficulties in any subject, you are 100% guaranteed to get answer with in a minutes. Thank you so much!";
const ParentsTabContent = "I used ...";
const HomeschoolersTabContent = "I used Brainly Plus ...";

const tabOneAuthor = "Riya Shukla";
const tabTwoAuthor = "John Lenon";
const tabThreeAuthor = "Tom Lewis";

const tabOneImgSrc = "https://source.unsplash.com/240x240/?cat";
const tabTwoImgSrc = "https://source.unsplash.com/240x240/?dog";
const tabThreeImgSrc = "https://source.unsplash.com/240x240/?monkey";

const TabsBrnBenefits = () => {

  return (
    <React.Fragment>
      <div className="brn-box--width-medium brn-tabs-container__header brn-text--padding-bottom-medium">
        <HeaderSecondary size={HEADER_SIZE.SMALL}>
          Brainly Plus benefits for
        </HeaderSecondary>
      </div>
      <Tabs button={<ButtonGetBrnPlus>Start now</ButtonGetBrnPlus>}>

        <Tab name={tabOne}>
          <ImageRound imgSrc={tabOneImgSrc} size={ROUND_IMAGE_SIZE.LARGE} className="brn-element--float-right" />
          {StudentsTabContent} 
          <Text className="brn-text--padding-top-bottom-medium" weight={TEXT_WEIGHT.BOLD}>
          {tabOneAuthor}
          </Text>
        </Tab>

        <Tab name={tabTwo} className="brn-box--flex">
          <ImageRound imgSrc={tabTwoImgSrc} size={ROUND_IMAGE_SIZE.LARGE} className="brn-element--float-right" />
          {ParentsTabContent}
          <Text className="brn-text--padding-top-bottom-medium" weight={TEXT_WEIGHT.BOLD}>
          {tabTwoAuthor}
          </Text>
        </Tab>

        <Tab name={tabThree} className="brn-box--flex">
          <ImageRound imgSrc={tabThreeImgSrc} size={ROUND_IMAGE_SIZE.LARGE} className="brn-element--float-right" />
          {HomeschoolersTabContent}
          <Text className="brn-text--padding-top-bottom-medium" weight={TEXT_WEIGHT.BOLD}>
          {tabThreeAuthor}
          </Text>
        </Tab>
        
      </Tabs>
    </React.Fragment>
  )
}

export default TabsBrnBenefits;

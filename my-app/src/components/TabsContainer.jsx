import React from 'react';
import RoundImage, { SIZE as ROUND_IMAGE_SIZE } from './RoundImage.jsx';
import HeaderSecondary, { HEADER_SIZE } from 'style-guide/src/components/text/HeaderPrimary';
import Text, { WEIGHT as TEXT_WEIGHT } from 'style-guide/src/components/text/Text';
import ButtonFreeTrial from './ButtonFreeTrial.jsx';

import classNames from 'classnames';

import Tabs from './Tabs';
import Tab from './Tab';


const tabOne = "Students";
const tabTwo = "Parents";
const tabThree = "Homeschoolers";

const StudentsTabContent = "I used Brainly Plus so I can graduate at the same time as my friend. It is so wonderful and helpful in different ways. Seriously it is like a group study with all the people in world. And most important thing is that, when you have any difficulties in any subject, you are 100% guaranteed to get answer with in a minutes. Thank you so much!";
const ParentsTabContent = "I used ...";
const HomeschoolersTabContent = "I used Brainly Plus ...";

const tabOneAuthor = "Riya Shukla";
const tabTwoAuthor = "John Lenon";
const tabThreeAuthor = "Tom Lewis";

const WIDTH = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large'
};

const TabsContainer = (props) => {

  function TabsContainer(props) {
    const width = props.width;
    const border = props.border;
    console.log(width);
    return (
      <React.Fragment>
        <div className="brn-box--width-medium brn-tabs-container__header brn-text--padding-bottom-medium">
          <HeaderSecondary size={HEADER_SIZE.SMALL}>
            Brainly Plus benefits for
        </HeaderSecondary>
        </div>
        <Tabs width={width ? width : WIDTH.NORMAL} border={border}>
          <Tab name={tabOne}>
            <div className="brn-box--flex brn-box--flex-center">
              <div className="brn-box--width-small">
                <RoundImage imgSrc="https://source.unsplash.com/240x240/?cat" size={ROUND_IMAGE_SIZE.LARGE} />
              </div>
              <div className="brn-box--width-large">
                <p> {StudentsTabContent}
                  <Text weight={TEXT_WEIGHT.BOLD}>{tabOneAuthor}</Text>
                </p>
              </div>
            </div>

          </Tab>
          <Tab name={tabTwo} className="brn-box--flex">

            <RoundImage imgSrc="https://source.unsplash.com/240x240/?cat" size={ROUND_IMAGE_SIZE.LARGE} />
            <p> {ParentsTabContent}
              <Text weight={TEXT_WEIGHT.BOLD}>{tabTwoAuthor}</Text>

            </p>

          </Tab>
          <Tab name={tabThree} className="brn-box--flex">

            <RoundImage imgSrc="https://source.unsplash.com/240x240/?cat" size={ROUND_IMAGE_SIZE.LARGE} />
            <p> {HomeschoolersTabContent}
              <Text weight={TEXT_WEIGHT.BOLD}>{tabThreeAuthor}</Text>

            </p>

          </Tab>
        </Tabs>
        {/* <ButtonFreeTrial /> */}
      </React.Fragment>
    )
  }

  return (
    <TabsContainer {...props} />
  );
}

export default TabsContainer;
export { WIDTH };

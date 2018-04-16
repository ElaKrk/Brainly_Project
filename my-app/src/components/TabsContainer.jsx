import React from 'react';
import classNames from 'classnames';

import Tabs, { WIDTH as TABS_WIDTH } from './Tabs';
import Tab from './Tab';


const tabOne = "Students";
const tabTwo = "Parents";
const tabThree = "Homeschoolers";

const StudentsTabContent = "I used Brainly Plus so I can graduate at the same time as my friend. It is so wonderful and helpful in different ways. Seriously it is like a group study with all the people in world. And most important thing is that, when you have any difficulties in any subject, you are 100% guaranteed to get answer with in a minutes. Thank you so much!";
const ParentsTabContent = "I used ...";
const HomeschoolersTabContent = "I used Brainly Plus ...";



const TabsContainer = () => {
  return (
    <Tabs width={TABS_WIDTH.LARGE}>
      <Tab name={tabOne}>
        <p> {StudentsTabContent}
        </p>
      </Tab>
      <Tab name={tabTwo}>
        <p> {ParentsTabContent}
        </p>
      </Tab>
      <Tab name={tabThree}>
        <p> {HomeschoolersTabContent}
        </p>
      </Tab>
    </Tabs>
  );
}

export default TabsContainer;

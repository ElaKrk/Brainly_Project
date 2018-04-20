import React from 'react';
import HeaderBrainly from './HeaderBrainly';
import FreeTrial from './FreeTrial';
import GetBrainlyPlus from './GetBrainlyPlus';
import BrainlyPlusFeatures from './BrainlyPlusFeatures';
import BrainlyPlusFeaturedIn from './BrainlyPlusFeaturedIn';
import FooterBrainly from './FooterBrainly';

const MainPage = () => (
  <div className="App">
    <HeaderBrainly />
    <FreeTrial />
    <GetBrainlyPlus />
    <BrainlyPlusFeatures />
    <BrainlyPlusFeaturedIn />
    <FooterBrainly />
  </div>
);

export default MainPage;

import React, { Component } from 'react';
import HeaderBrainly from './HeaderBrainly';
import FreeTrial from './FreeTrial';
import GetBrainlyPlus from './GetBrainlyPlus';
import BrainlyPlusFeatures from './BrainlyPlusFeatures';
import BrainlyPlusFeaturedIn from './BrainlyPlusFeaturedIn';
import FooterBrainly from './FooterBrainly';

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBrainly />
        <FreeTrial />
        <GetBrainlyPlus />
        <BrainlyPlusFeatures />
        <BrainlyPlusFeaturedIn />
        <FooterBrainly />
      </div>
    );
  }
}

export default MainPage;
import React, { Component } from 'react';
import Header from './Header.jsx';
import FreeTrial from './FreeTrial.jsx';
import GetBrainlyPlus from './GetBrainlyPlus';
import BrainlyPlusFeatures from './BrainlyPlusFeatures';

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FreeTrial />
        <GetBrainlyPlus />
        <BrainlyPlusFeatures />
      </div>
    );
  }
}

export default MainPage;
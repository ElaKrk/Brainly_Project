import React, { Component } from 'react';
import Header from './Header.jsx';
import FreeTrial from './FreeTrial.jsx';
import BrainlyPlus from './BrainlyPlus';

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FreeTrial />
        <BrainlyPlus />
      </div>
    );
  }
}

export default MainPage;
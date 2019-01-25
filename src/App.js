import React, { Component } from 'react';
import './App.css';

import Screen  from '../src/screens/burger'

class App extends Component {
  render() {
    return (
      <div>
       <Screen history={this.props.history}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
 import Auth from '../src/screens/login';


class App extends Component {
  render() {
    return (
      <div>
       <Auth history={this.props.history}/>
      </div>
    );
  }
}

export default App;

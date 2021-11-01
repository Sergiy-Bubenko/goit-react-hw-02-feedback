import { Component } from 'react';

import './App.css';

import CountTotalFeedback from './components/countTotalFeedback/countTotalFeedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountTotalFeedback />
      </div>
    );
  }
}

export default App;

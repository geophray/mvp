import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>My app is rendering!</h1>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));

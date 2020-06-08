import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      qresults: [],
      myrecipes: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleQuery(e) {
    e.preventDefault();
    console.log(this.state.q);
  }


  render() {
    return (
      <form onSubmit={this.handleQuery}>
        <label>
          Find new recipes:
          <input type="text" name="q" value={this.state.q} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import MyRecipes from './components/MyRecipes.jsx';
import SearchNewRecipes from './components/SearchNewRecipes.jsx';
import Household from './components/Household.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myrecipes: [],
    };
  }



  render() {
    this.state
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">My Recipes</Link>
              </li>
              <li>
                <Link to='/search'>Explore</Link>
              </li>
              <li>
                <Link to='/household'>Household</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/household'>
              <Household />
            </Route>
            <Route path='/search'>
              <SearchNewRecipes />
            </Route>
            <Route path='/'>
              <MyRecipes />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));

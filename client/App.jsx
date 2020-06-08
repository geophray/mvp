import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import MyRecipes from './components/MyRecipes.jsx';
import SearchNewRecipes from './components/SearchNewRecipes.jsx';
import Household from './components/Household.jsx';

import styles from './css/app.css';

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
          <header className={styles['app-header']}>
            <h1 className={styles['site-title']}>Meal Planning Made Easy</h1>
            <nav className={styles['nav-menu']}>
              <ul>
                <li>
                  <Link to="/">My Recipes</Link>
                </li>
                <li>
                  <Link to='/explore'>Explore</Link>
                </li>
                <li>
                  <Link to='/household'>Household</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className={styles['main-content-wrapper']}>
            <Switch>
              <Route path='/household'>
                <Household />
              </Route>
              <Route path='/explore'>
                <SearchNewRecipes />
              </Route>
              <Route path='/'>
                <MyRecipes />
              </Route>
            </Switch>
          </main>
          <footer>

          </footer>
        </div>
      </Router>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));

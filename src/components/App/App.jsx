import React, { useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className={styles.App}>
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/register" exact={true}>

          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

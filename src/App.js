import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage} from './pages'

function App() {
  return (
    <div>
      {/* <h1>Gitstar Ranking</h1> */}
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;

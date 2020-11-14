import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateRoomPage from './CreateRoomPage';

import HomePage from './HomePage';
import JoinRoomPage from './JoinRoomPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/join-room' component={JoinRoomPage} />
        <Route path='/create-room' component={CreateRoomPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

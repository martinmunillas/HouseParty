import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JoinRoomPage from './pages/JoinRoomPage';
import CreateRoomPage from './pages/CreateRoomPage';

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

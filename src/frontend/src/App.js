import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';
import CreateRoomPage from './pages/CreateRoomPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/room/:roomCode' component={RoomPage} />
        <Route path='/create' component={CreateRoomPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

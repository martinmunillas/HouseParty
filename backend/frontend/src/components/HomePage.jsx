import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
        <Link to="/create-room">Create Room!</Link>
        <Link to="/join-room">Join Room!</Link>
    </>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import NeonText from '../components/NeonText';

const HomePage = () => {
  return (
    <>
      <NeonText>Online Party</NeonText>
      <div className='home__buttons'>
        <Link to='/create-room' className="lineButton">Create Room!</Link>
        <Link to='/join-room' className="lineButton">Join Room!</Link>
      </div>
    </>
  );
};

export default HomePage;

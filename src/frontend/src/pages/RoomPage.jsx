import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

const JoinRoomPage = (props) => {
  const [room, setRoom] = useState({});

  useEffect(async () => {
    setRoom(await getRoomDetails());
  }, []);

  const getRoomDetails = async () => {
    const request = await axios({
      method: 'get',
      url: `/api/get-room?code=${props.match.params.roomCode}`,
    });
    return {
      votesToSkip: request.data.votes_to_skip,
      isHost: request.data.is_host,
      guestCanPause: request.data.guest_can_pause,
      code: request.data.code,
    };
  };

  const handleExitRoom = (e) => {
    e.preventDefault();
    axios({ method: 'post', url: '/api/leave-room' }).then(props.history.push('/'));
  };

  return (
    <>
      <Header title='Spotify Party' />
      <div className='home__buttons'>
        <p>Votes to skip: {room.votesToSkip}</p>
        <p>Guest can pause?: {JSON.stringify(room.guestCanPause)}</p>
        <h2>Code: {room.code}</h2>
        <button className='mainButton' onClick={handleExitRoom}>
          Exit Room
        </button>
      </div>
    </>
  );
};

export default JoinRoomPage;

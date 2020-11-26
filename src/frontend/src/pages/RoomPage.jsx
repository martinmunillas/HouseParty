import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NeonText from '../components/NeonText';

const JoinRoomPage = (props) => {
  const [room, setRoom] = useState({});

  useEffect(async () => {
    setRoom(await getRoomDetails());
  }, []);
  console.log(room);

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

  return (
    <>
      <NeonText>{room.code || ''}</NeonText>
      <p>Votes to skip: {room.votesToSkip}</p>
      <p>Guest can pause?: {JSON.stringify(room.guestCanPause)}</p>
    </>
  );
};

export default JoinRoomPage;

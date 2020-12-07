import React, { useState } from 'react';
import axios from 'axios';

import CreateRoomForm from '../components/CreateRoomForm';
import Header from '../components/Header';

const CreateRoomPage = (props) => {
  const [form, setForm] = useState({ guest_can_pause: false, votes_to_skip: 1 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: 'POST',
      url: '/api/create-room',
      data: form,
    });
    props.history.push(`/room/${res.data.code}`);
  };
  return (
    <>
      <Header title='Create Room' />
      <CreateRoomForm
        onCheckboxChange={handleCheckboxChange}
        onChange={handleChange}
        onSubmit={handleSubmit}
        formValues={form}
      />
    </>
  );
};

export default CreateRoomPage;

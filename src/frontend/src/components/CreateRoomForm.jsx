import { Link } from 'react-router-dom';
import React from 'react';

const CreateRoomForm = ({ onChange, onSubmit, onCheckboxChange, formValues }) => {
  return (
    <form className='createRoomForm' onSubmit={onSubmit}>
      <label>Guest Can Pause?</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type='checkbox'
          name='guest_can_pause'
          className='createRoomForm__guestCanPause'
          onChange={onCheckboxChange}
          checked={formValues.guest_can_pause}
        />
        <p>{formValues.guest_can_pause ? 'Yes' : 'No'}</p>
      </div>
      <label>Votes to Skip</label>
      <input
        type='number'
        name='votes_to_skip'
        className='createRoomForm__votesToSkip'
        onChange={onChange}
        value={formValues.votes_to_skip}
      ></input>
      <button type='submit' className='mainButton'>
        Create Room
      </button>
      <Link to='/' className='tertiaryButton'>
        ⬅ Go Back
      </Link>
    </form>
  );
};

export default CreateRoomForm;

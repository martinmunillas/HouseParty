import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = (props) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const codeIsValid = code.length == 6;
  const handleCodeChange = (e) => {
    setCode(e.target.value.toUpperCase());
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (codeIsValid) {
      axios({ method: 'post', url: `/api/join-room`, data: { code } })
        .then(() => {
          props.history.push(`/room/${code}`);
        })
        .catch(() => setError('Invalid Code'));
    } else {
      setError('Invalid Code');
    }
  };

  useEffect(() => {
    axios({
      url: '/api/user-in-room',
    }).then((data) => {
      if (data.data.code) {
        setCode(data.data.code);
        props.history.push(`/room/${data.data.code}`);
      }
    });
  }, []);

  return (
    <>
      <Header title='Spotify Party' />
      <div className='home__buttons'>
        {error && <p className='danger'>{error}</p>}
        <form onSubmit={handleCodeSubmit} className='joinForm'>
          <input type='text' onChange={handleCodeChange} value={code} />
          <button className='mainButton' type='submit'>
            Join Room!
          </button>
        </form>
        <Link to='/create' className='tertiaryButton'>
          Create Room!
        </Link>
      </div>
    </>
  );
};

export default HomePage;

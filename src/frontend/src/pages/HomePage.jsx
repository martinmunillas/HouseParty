import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeonText from '../components/NeonText';

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
      props.history.push(`/room/${code}`);
    } else {
      setError('Invalid Code');
    }
  };
  return (
    <>
      <NeonText>Online Party</NeonText>
      <div className='home__buttons'>
        <p className='danger'>{error}</p>
        <form onSubmit={handleCodeSubmit} className='joinForm'>
          <input type='text' onChange={handleCodeChange} value={code} />
          <Link
            to={codeIsValid ? `/room/${code}` : '/'}
            className='lineButton'
            style={{ backgroundColor: `hsla(${Math.random() * 360}, 100%, 80%, 1)` }}
            onClick={codeIsValid ? () => {} : () => setError('Invalid Code')}
          >
            Join Room!
          </Link>
        </form>
        <Link to='/create'>Create Room!</Link>
      </div>
    </>
  );
};

export default HomePage;

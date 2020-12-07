import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='homeHeader'>
      <img
        src='https://images.vexels.com/media/users/3/137413/isolated/preview/4acb8e52632aa9b7c874b878eaf02bc4-icono-de-spotify-logo-by-vexels.png'
        alt='Spotify'
      />
      <h1>{title}</h1>
    </div>
  );
};

export default Header;

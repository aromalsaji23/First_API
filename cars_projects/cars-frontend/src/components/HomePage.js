// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Car Application</h1>
      <button onClick={() => window.location.href = '/cars'}>Cars</button>
      <button onClick={() => window.location.href = '/car-details'}>Car Details</button>
    </div>
  );
}

export default HomePage;

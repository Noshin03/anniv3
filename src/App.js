import React, { useState } from 'react';
import './App.css';
import Popup from './Popup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <Popup isOpen={isPopupOpen} onRequestClose={handlePopupClose} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import './Popup.css';
import Slideshow from './Slideshow';

Modal.setAppElement('#root');

const Popup = ({ isOpen, onRequestClose }) => {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showKissingEmoji, setShowKissingEmoji] = useState(false);
  
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.5)',
    boxShadow: isOpen ? '0 0 20px yellow' : 'none',
    margin: isOpen ? '0px' : '0',
  });

  const handleButtonClick = () => {
    setShowKissingEmoji(true);
    setTimeout(() => {
      setShowKissingEmoji(false);
      onRequestClose();
      setShowSlideshow(true);
    }, 2000); // Show emoji animation for 2 seconds before closing popup
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="balloon balloon1"></div>
        <div className="balloon balloon2"></div>
        <div className="balloon balloon3"></div>
        <div className="balloon balloon4"></div>
        
        <div className="heart-container">
          <div className="heart heart1"></div>
          <div className="heart heart2"></div>
          <div className="heart heart3"></div>
          <div className="heart heart4"></div>
          <div className="heart heart5"></div>
          <div className="heart heart6"></div>
        </div>
        <div className="firework firework1"></div>
        <div className="firework firework2"></div>
        <div className="firework firework3"></div>
        <div className="firework firework4"></div>
        <div className="firework firework5"></div>
        <div className="firework firework6"></div>
        <div className="firework firework7"></div>
        <div className="firework firework8"></div>
        <div className="firework firework9"></div>
        <animated.div style={animation} className="popup-content">
          <h2 className="anniversary-text">Happy Anniversary Baby!</h2>
          <button onClick={handleButtonClick} className="close-button">😘❤️</button>
        </animated.div>
      </Modal>
      {showSlideshow && <Slideshow />}
      {showKissingEmoji && (
        <div className="kissing-emoji-animation">😘</div>
      )}
    </>
  );
};

export default Popup;

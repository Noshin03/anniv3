import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Slideshow.css';
import Card from './Card';

const photos = [
  { image: process.env.PUBLIC_URL + '/photo1.jpeg', text: 'Message 1' },
  { image: process.env.PUBLIC_URL + '/photo2.jpg', text: 'Message 2' },
  { image: process.env.PUBLIC_URL + '/photo3.jpg', text: 'Message 3' },
  // Add more photos and messages as needed
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < photos.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="outer-container">
      <div className="fairy-lights-bg">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="fairy-light"></div>
        ))}
      </div>
      <div className="storybook-container">
        {index > 0 && (
          <button className="nav-button left" onClick={handlePrev}>❮</button>
        )}
        <div className="pages">
          {photos.map((photo, i) => (
            <animated.div key={i} className={`storybook-page ${i === index ? 'active' : ''}`}>
              <Card
                image={photo.image}
                text={photo.text}
              />
            </animated.div>
          ))}
        </div>
        {index < photos.length - 1 && (
          <button className="nav-button right" onClick={handleNext}>❯</button>
        )}
        <div className="fairy-lights">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="inner-fairy-light"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

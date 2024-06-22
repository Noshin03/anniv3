import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Slideshow.css';
import Card from './Card';

const photos = [
  {
    image: process.env.PUBLIC_URL + '/photo1.jpeg',
    text: 'Even though we were on opposite faces of the earth our hearts connected as one with no distance in between.',
    title: 'We started as babies...'
  },
  {
    image: process.env.PUBLIC_URL + '/photo2.jpg',
    text: 'There was no separating us. <span class="red-text">You lit up my world, baby. Forever... </span>',
    title: 'When we met...'
  },
  {
    image: process.env.PUBLIC_URL + '/photo3.JPG',
    text: 'You were there for me every step of the way. You have been my protector, my mentor, my cheerleader, my best friend, my lover and everything I could ever dream of from a life partner. <span class="red-text">You are my home, baby. You are my safe place.</span>',
    title: 'We grew together...'
  },
  {
    image: process.env.PUBLIC_URL + '/photo4.jpeg',
    text: 'We fought so many battles together, ran some sprints, some marathons, sailed through rain and storms, sometimes flowers, sometimes thorns. <span class="red-text">But every time we came through strong.</span>',
    title: 'We\'ve come so far...'
  },
  {
    image: process.env.PUBLIC_URL + '/photo5.jpeg',
    text: 'But in no universe would I choose to go through it without you. In every life, I would choose you as my partner through the journey of life. Happy 3rd Anniversary, baby. Can\'t wait go get to a 100. <span class="red-text">I LOVE YOU, BABY ❤️.</span>',
    title: 'Still a long way to go...'
  },
  // Add more photos and messages as needed
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [showKissingEmoji, setShowKissingEmoji] = useState(false);

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

  const handleKissingEmojiClick = () => {
    setShowKissingEmoji(true);
    setTimeout(() => {
      setShowKissingEmoji(false);
    }, 2000); // Hide after 2 seconds
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
              <div className="card-wrapper">
                <div className="card-container">
                  <h2 className="card-title">{photo.title}</h2>
                  <Card
                    image={photo.image}
                    text={photo.text}
                  />
                  {i === photos.length - 1 && (
                    <button className="kissing-button" onClick={handleKissingEmojiClick}>😘</button>
                  )}
                </div>
              </div>
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
      {showKissingEmoji && (
        <div className="kissing-emoji-animation">😘</div>
      )}
    </div>
  );
};

export default Slideshow;

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Card.css';

const Card = ({ image, text }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card" onClick={handleClick}>
      <animated.div
        className="c front"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <img src={image} alt="card front" />
      </animated.div>
      <animated.div
        className="c back"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      >
        <div className="message">{text}</div>
      </animated.div>
    </div>
  );
};

export default Card;

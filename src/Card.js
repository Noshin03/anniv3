import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Card.css';

const Card = ({ image, text }) => {
  const [flipped, setFlipped] = useState(false);
  const [dimensions, setDimensions] = useState({ width: '80%', height: 'auto' });
  const imgRef = useRef(null);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleClick = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current) {
        const { naturalWidth, naturalHeight } = imgRef.current;
        const aspectRatio = naturalWidth / naturalHeight;
        const height = Math.min(window.innerHeight * 0.6, 400); // Adjust height based on viewport
        const width = window.innerWidth <= 480 ? window.innerWidth * 0.9 : height * aspectRatio; // Adjust width for mobile
        setDimensions({ width: `${width}px`, height: `${height}px` });
      }
    };
    handleResize(); // Initial size
    window.addEventListener('resize', handleResize); // Resize on window resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="card" onClick={handleClick} style={{ width: dimensions.width, height: dimensions.height }}>
      <animated.div
        className="c front"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <img ref={imgRef} src={image} alt="card front" onLoad={() => {
          if (imgRef.current) {
            const { naturalWidth, naturalHeight } = imgRef.current;
            const aspectRatio = naturalWidth / naturalHeight;
            const height = Math.min(window.innerHeight * 0.6, 400); // Adjust height based on viewport
            const width = window.innerWidth <= 480 ? window.innerWidth * 0.9 : height * aspectRatio; // Adjust width for mobile
            setDimensions({ width: `${width}px`, height: `${height}px` });
          }
        }} />
      </animated.div>
      <animated.div
        className="c back"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      >
        <div className="message" dangerouslySetInnerHTML={{ __html: text }}></div>
      </animated.div>
    </div>
  );
};

export default Card;

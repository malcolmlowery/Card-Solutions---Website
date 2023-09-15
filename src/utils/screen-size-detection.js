import { useState, useEffect } from 'react';

export const screenSize = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    addEventListener('resize', (s) => {
      setScreenWidth(window.innerWidth);
    });

    // return () => removeEventListener('resize', window.innerWidth)
  }, [window.innerWidth]);

  return { screenWidth };
};

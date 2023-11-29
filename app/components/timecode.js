"use client"
import React, { useState, useEffect } from 'react';

const LiveTimeCounter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every 1 second

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component unmounts
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  );
};

export default LiveTimeCounter;

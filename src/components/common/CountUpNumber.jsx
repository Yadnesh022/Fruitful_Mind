import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CountUpNumber({ end, duration = 1.5, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // If end is not purely numeric (e.g., "Master's" or "100%"), handle gracefully
  const numericEnd = parseInt(end, 10);
  const isNumeric = !isNaN(numericEnd);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * numericEnd));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(numericEnd);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, numericEnd, duration, isNumeric]);

  if (!isNumeric) {
    return <span ref={ref}>{end}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

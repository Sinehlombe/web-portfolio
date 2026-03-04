// Animated counter component for displaying statistics with a counting animation
import React, { useState, useEffect } from 'react';

// Props interface for the AnimatedCounter component
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

// Component that animates a number from 0 to the target value
export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  
  // Set up the animation when component mounts
  useEffect(() => {
    let start = 0;
    // Calculate how much to increment each frame
    const increment = end / (duration / 16);
    
    // Set up interval for animation (16ms ~ 60fps)
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    // Clean up interval when component unmounts
    return () => clearInterval(timer);
  }, [end, duration]);
  
  // Render the animated count with prefix and suffix
  return (
    <div className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}
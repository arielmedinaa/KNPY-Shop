import React from 'react';
import StarField from './StarField';

const AnimatedBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <StarField />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;

import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  const [error, setError] = React.useState(false);

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      {!error ? (
        <img 
          src="/logo.png" 
          alt="RATEC Logo" 
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]"
          onError={() => setError(true)}
        />
      ) : (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8bbd" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            <mask id="rMask">
              <rect width="100" height="100" fill="white" />
              <path 
                d="M25 20 H55 C72 20 75 42 58 45 C75 48 72 75 55 75 H42 L42 50 H55 C62 50 62 40 55 40 H42 L42 20 Z M42 50 V75 H25 V20 H42 Z" 
                fill="black" 
              />
            </mask>
          </defs>
          <rect width="100" height="100" rx="28" fill="url(#logoGrad)" mask="url(#rMask)" />
        </svg>
      )}
    </div>
  );
};

export default Logo;

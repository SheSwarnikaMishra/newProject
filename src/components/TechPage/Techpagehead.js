import React, { useEffect, useState } from 'react';
import './Techpagehead.css';

const Techpagehead = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStartAnimation(true);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='techHead'>
<div>
We are re-inventing AI

  </div>    
<div>
We are creating embodied intelligence

  </div>    
    
    </div>
  );
};

export default Techpagehead;
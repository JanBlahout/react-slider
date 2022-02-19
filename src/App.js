import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import images from './components/images';

import './App.css';

function App() {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    console.log(slider);
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <div className="App">
      <motion.div
        ref={slider}
        className="slider"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-slider"
        >
          {images.map(image => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;

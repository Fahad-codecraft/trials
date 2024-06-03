'use client'
import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion11.0";
import { useState } from 'react';  

const MaskEffect = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  return (
    <main className="main">
      {x !== null && y !== null && (
        <motion.div 
          className="mask absolute"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`
          }}
          transition={{ type: "tween", ease: "backOut", duration:0.5}}
        >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            A visual developer - with skills that haven't been replaced by AI (yet) - making a good shit only if paycheck is equally good
          </p>
        </motion.div>
      )}

      <div className="mbody">
        <p>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience .</p>
      </div>
    </main>
  );
}

export default MaskEffect
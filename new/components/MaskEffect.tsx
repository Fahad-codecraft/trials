'use client'
import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion11.0";
import { useState } from 'react';

const MaskEffect = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 500 : 40;

  return (
    <div>

      <div className="divm">
        {x !== null && y !== null && (

          <motion.div
            className="mask absolute"
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <p className="param" onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
              A visual developer - with skills that haven't been replaced by AI (yet) - making a good shit since 2021 to till date
            </p>
          </motion.div>
        )}

        <div className="mbody">
          <p className="param">I'm a <span className="spanm">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience .</p>
        </div>
      </div>
    </div>
  );
}

export default MaskEffect
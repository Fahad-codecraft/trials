import React, { useRef, useState } from 'react';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

interface TextClipFooterProps {
  title: string;
  description: string;
}

const TextClipFooter: React.FC<TextClipFooterProps> = ({ title, description }) => {
  const container = useRef(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const crop = (string: string, maxLength: number) => string.substring(0, maxLength);

  return (
    <div ref={container} className="titleFooter ">
      <div className={`wrapperFooter ${selectedProject === 0 ? "hidden" : ""}`}
      onMouseOver={() => { setSelectedProject(0) }}
      onMouseLeave={() => { setSelectedProject(null) }}

      >
        <motion.p>
          {title}
        </motion.p>

        <div className='descriptionsFooter'>
        <div
            className="descriptionFooter"
            style={{
              clipPath: selectedProject === 0 ? 'inset(0 0 0)' : 'inset(50% 0 50%)',
            }}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextClipFooter;

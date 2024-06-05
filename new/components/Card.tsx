'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: any;
  range: number[];
  targetScale: number;

}

const Card = ({ i, title, description, src, url, color, progress, range, targetScale }: CardProps) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <Link href={url} target='_blank'>
      <div ref={container} className="cardContainer">
        <motion.div
          style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
          className="card"
        >
          <h2 className='h2Conatiner'>{title}</h2>
          <div className="bodyContainer">
            <div className="descriptionContainer">
              <p>{description}</p>
              <span>
                {/* <a href={url} target="_blank">See more</a> */}
              </span>
            </div>

            <div className="imageContainer">
              <motion.div
                className="inner"
                style={{ scale: imageScale }}
              >
                <Image
                  fill
                  src={`/images/${src}`}
                  alt="image"
                />
              </motion.div>
              
            </div>

          </div>

        </motion.div>
      </div>
    </Link>
  )
}

export default Card
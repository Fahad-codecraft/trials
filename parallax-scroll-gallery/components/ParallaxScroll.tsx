'use client';
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { MotionValue } from "framer-motion";

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
]

const ParallaxScroll = () => {
  const [dimension, setDimension] = useState({width:0, height:0});
  const gallery = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.5])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className="mainContainer">
      <div className="spacer"></div>
      <div className="gallery">
        <div className="galleryWrapper" ref={gallery}>
          <Column images={[images[0], images[1], images[2]]} y={y}/>
          <Column images={[images[3], images[4], images[5]]} y={y2}/>
          <Column images={[images[6], images[7], images[8]]} y={y3}/>
          <Column images={[images[9], images[10], images[11]]} y={y4} className="hidden md:block"/>
        </div>
      </div>
      <div className="spacer"></div>
    </main>
  );
}

const Column = ({ images, y, className = "" }: { images: string[], y: MotionValue<number>, className?: string }) => {
  return (
    <motion.div style={{y}} className={`column ${className}`}>
      {images.map((src, i) => {
        return (
          <div key={i} className={`imageContainer flex`}>
            <Image
              src={`/${src}`}
              alt={`image-${i}`}
              fill
            />
          </div>
        )
      })}
    </motion.div>
  )
}

export default ParallaxScroll;

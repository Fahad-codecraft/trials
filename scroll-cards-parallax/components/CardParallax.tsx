'use client'
import Image from "next/image";
import { projects } from "@/constants/data";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/Card";

import React from 'react'

const CardParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  return (
    <main ref={container} className="projectsContainer">
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}

export default CardParallax
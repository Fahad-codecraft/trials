'use client'
import Image from "next/image";
import { projects } from "@/constants/data";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/Card";

import React from 'react'
import { GeminiEffect } from "./GeminiEffect";

const CardParallax = ({otherClasses} : {otherClasses?: string}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  return (
    <main ref={container} className={`projectsContainer text-center ${otherClasses}`}>
      {/* <div>
        <h1 className="text-[#CBACF9] text-[5rem] font-extrabold">
          My Projects
        </h1>
      </div> */}
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} url={project.link}/>
          
        })
      }
    </main>
  )
}

export default CardParallax
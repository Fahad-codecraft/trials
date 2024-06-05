'use client';
import { useState } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDes from './ProjectDes';

const data = [
    {
        title: "LINKEDIN",
        description: "Connect with me on LinkedIn to see my professional journey.",
        speed: 0.9,
        i: 0,
        url: "https://www.linkedin.com/"

    },
    {
        title: "GITHUB",
        description: "My GitHub profile is a glimpse into my coding adventures ",
        speed: 1.1,
        i: 0,
        url: "https://github.com/Fahad-codecraft"
    },
    {
        title: "PORTFOLIO",
        description: "Bored? Thinking of watching other portfolio?.",
        speed: 1.5,
        i: 0,
        url: "https://fahadportfolio.vercel.app/"
    },
    {
        title: "Resume",
        description: "Wanna See My resume Click On Resume",
        speed: 2.7,
        i: 0,
        url: "https://www.github.com/"
    },
    // {
    //     title: "Sleepiq",
    //     description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
    //     speed: 0.8,
    //     i: 0
    // },
    // {
    //     title: "NFL",
    //     description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
    //     speed: 0.8,
    //     i: 0
    // }
]

export default function TextClip() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    return (
        <div>
            <div className="container">
                <ProjectTitle data={data} setSelectedProject={setSelectedProject} />
                <ProjectDes data={data} selectedProject={selectedProject} />
            </div>
        </div>
    )
}

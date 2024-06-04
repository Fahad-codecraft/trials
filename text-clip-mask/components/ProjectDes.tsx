import React from 'react';

interface Project {
  title: string;
  description: string;
}

interface ProjectDesProps {
  data: Project[];
  selectedProject: number | null;
}

const crop = (string: string, maxLength: number) => string.substring(0, maxLength);

export default function ProjectDes({ data, selectedProject }: ProjectDesProps) {
  return (
    <div className="descriptions">
      {data.map((project, i) => {
        const { title, description } = project;
        return (
          <div
            key={i}
            className="description"
            style={{
              clipPath: selectedProject === i ? 'inset(0 0 0)' : 'inset(50% 0 50%',
            }}
          >
            <p>{crop(title, 9)}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}

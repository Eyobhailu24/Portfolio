"use client"
import React from 'react';
import { projects } from './../datas/files';
import { HoverEffect } from './CardHoverEffect';

function ProjectsGrid() {
  const titleRef = React.useRef(null);
  const [titleVisible, setTitleVisible] = React.useState(false);
  React.useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTitleVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section id="projects" className="py-12 md:py-16">
      <h2 ref={titleRef} className={"text-4xl md:text-5xl leading-tight font-normal mb-16 text-center bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent transform-gpu transition-all duration-700 ease-out " + (titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: titleVisible ? "120ms" : "0ms" }}>Projects</h2>
      <HoverEffect
        items={projects.map(({ title, des, link, img }) => ({
          title,
          description: des,
          link,
          img,
        }))}
      />
    </section>
  );
}

export default ProjectsGrid;

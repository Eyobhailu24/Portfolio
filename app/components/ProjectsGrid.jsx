import { projects } from './../datas/files';
import { BentoGrid, BentoGridItem } from './BentoGrid';

function ProjectsGrid() {
  return (
    <section id="projects" className="py-10">
      <BentoGrid>
        {projects.map(({ id, title, des, img }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={des}
            className="md:col-span-1"
            img={img}
            imgClassName="md:w-52 w-36"
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default ProjectsGrid;

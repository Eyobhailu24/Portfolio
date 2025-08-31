import { gridItems } from './../datas/files';
import { BentoGrid, BentoGridItem } from './BentoGrid';

function AboutGrid() {
  return (
    <section id="about" className="py-10">
      <BentoGrid>
        {gridItems.map(({
          id,
          title,
          description,
          className,
          img,
          imgClassName,
          titleClassName,
          spareImg,
        }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default AboutGrid;

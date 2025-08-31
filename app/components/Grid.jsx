import { gridItems } from './../datas/files';
import { dataItems } from './../datas/data';
import { BentoGrid, BentoGridItem } from './BentoGrid';

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {dataItems.map(
          ({
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
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}

            />
          )
        )}
      </BentoGrid>
    </section>
  );
}

export default Grid;

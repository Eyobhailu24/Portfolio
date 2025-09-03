import { gridItems } from './../datas/files';
import { BentoGrid, BentoGridItem } from './BentoGrid';

function AboutGrid() {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 md:py-28">
      <BentoGrid className="w-full max-w-none px-4 sm:px-8 lg:px-12 gap-8 md:gap-10 md:auto-rows-[18rem]">
        {gridItems.map((item) => (
          <BentoGridItem key={item.id} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}

export default AboutGrid;

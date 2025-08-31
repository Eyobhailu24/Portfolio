import { BentoGrid, BentoGridItem } from './BentoGrid';

const contactItems = [
  {
    id: 1,
    title: 'Email',
    description: 'eyob@example.com',
    className: 'md:col-span-2',
  },
  {
    id: 2,
    title: 'Phone',
    description: '+251-900-000000',
    className: 'md:col-span-1',
  },
  {
    id: 3,
    title: 'LinkedIn',
    description: 'linkedin.com/in/eyob',
    className: 'md:col-span-1',
  },
  {
    id: 4,
    title: 'GitHub',
    description: 'github.com/eyob',
    className: 'md:col-span-1',
  },
  {
    id: 5,
    title: 'Let\'s work together',
    description: 'Open to collaborations and new opportunities — drop a message.',
    className: 'md:col-span-3',
  },
];

function ContactGrid() {
  return (
    <section id="contact" className="py-10">
      <BentoGrid>
        {contactItems.map(({ id, title, description, className }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default ContactGrid;

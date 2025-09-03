"use client"
import { AnimatePresence, motion } from 'motion/react';

import { useEffect, useRef, useState } from 'react';
import { cn } from '../util/utils';

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <ItemCard
          key={item?.link || idx}
          item={item}
          idx={idx}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />)
      )}
    </div>
  );
};

const ItemCard = ({ item, idx, hoveredIndex, setHoveredIndex }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delay = (idx % 6) * 80;

  return (
    <a
      ref={ref}
      href={item?.link}
      className={cn(
        'relative group block p-2 h-full w-full transform-gpu transition-all duration-700 ease-out',
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-purple-500/20 block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>
      <Card>
        {item?.img && (
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src={item.img}
              alt={item.title || 'project image'}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
          </div>
        )}
        <CardTitle>{item.title}</CardTitle>
        <CardDescription className="text-base md:text-lg">
          {item.description}
        </CardDescription>
      </Card>
    </a>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        'text-zinc-100 font-bold tracking-wide mt-4 text-xl md:text-2xl bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};

"use client";
import { cn } from '../util/utils';
import { useEffect, useRef, useState } from 'react';

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[14rem] md:grid-cols-3 px-2 sm:px-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  appearDelay,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delay =
    typeof appearDelay === 'number' ? appearDelay : id ? (id % 6) * 80 : 0;

  return (
    <div
      ref={ref}
      className={cn(
        'relative rounded-2xl overflow-hidden transform-gpu',
        'transition-all duration-700 ease-out',
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-[0.98]',
        'hover:-translate-y-0.5 hover:shadow-lg',
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {/* Clean, neutral card body (no lighting/gradient borders) */}
      <div className="relative z-10 h-full w-full rounded-2xl bg-white dark:bg-black-100 border border-neutral-200/70 dark:border-white/10 shadow-sm overflow-hidden">
        {/* Optional subtle watermark image (kept very low opacity, not a light effect) */}
        {spareImg && (
          <img
            src={spareImg}
            alt=""
            className={cn(
              'pointer-events-none absolute opacity-5 -top-4 -left-4 select-none max-w-[45%]',
              imgClassName
            )}
          />
        )}

        <div className="relative flex h-full flex-col justify-between p-5">
          <div
            className={cn(
              'text-neutral-800 dark:text-neutral-200 font-semibold tracking-tight',
              titleClassName
            )}
          >
            {title}
          </div>
          {description && (
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              {description}
            </p>
          )}

          {/* Feature image if provided */}
          {img && (
            <img
              src={img}
              alt=""
              className={cn(
                'pointer-events-none absolute bottom-0 right-0 max-w-[55%] md:max-w-[60%] object-contain select-none drop-shadow',
                imgClassName
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

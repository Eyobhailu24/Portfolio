'use client';
import { cn } from '../util/utils';
import MagicButton from './MagicButton';
import { SparklesCore } from './Sparkles';
import { FaLocationArrow } from 'react-icons/fa';

import { Spotlight, SpotlightPreview } from './Spotlight';
import { TextGenerateEffect } from './TextGenerateEffect';

function handleClick() {}

function Home() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="blue"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="white"
        />
      </div>
      <div className="transparent-1 absolute left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:20px_20px]',
            '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
            'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest test-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text0[40px] md:text-5xl lg:text-6xl"
            words="Building My First Portfolio"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I'm Eyob, A MERN Developer based in Addis
            Ababa
          </p>
          <a>
            <a href="#about">
              <MagicButton
                title="View CV"
                icon={<FaLocationArrow />}
                position="right"
                handleClick={handleClick}
              />
            </a>
            <a>
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow />}
                position="right"
                handleClick={handleClick}
              />
            </a>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

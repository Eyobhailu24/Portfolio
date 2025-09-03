"use client"

import React from 'react';

const TO_EMAIL = 'EyobHailu246@gmail.com'; // update to your real email
const PHONE = '+251 968 475 774';
const LOCATION = 'Addis Ababa, Ethiopia';

export default function Footer() {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
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

  return (
    <footer
      ref={ref}
      className={
        'mt-16 border-t border-white/10 py-10 text-zinc-300 transform-gpu transition-all duration-700 ease-out ' +
        (visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6')
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 mt-2 grid grid-cols-1 md:grid-cols-3 gap-8 justify-content">
        {/* Left: About blurb */}
        <div>
          <h4 className="font-semibold text-xl md:text-2xl mb-3 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            About
          </h4>
          <p className="text-base md:text-lg leading-relaxed text-zinc-300">
            I’m a FullStack developer focused on crafting
            clean and user-friendly interfaces. I enjoy
            building responsive, accessible experiences with
            modern web tech.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="font-semibold text-xl md:text-2xl mb-3 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            Quick Links
          </h4>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact info */}
        <div>
          <h4 className="font-semibold text-xl md:text-2xl mb-3 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h4>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <span className="text-zinc-400 block">
                Email
              </span>
              <a
                href={`mailto:${TO_EMAIL}`}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out break-all"
              >
                {TO_EMAIL}
              </a>
            </li>
            <li>
              <span className="text-zinc-400 block">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/eyob-hailu-58b240202/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out break-all"
              >
                Eyob Hailu
              </a>
            </li>
            <li>
              <span className="text-zinc-400 block">
                GitHub
              </span>
              <a
                href="https://github.com/Eyobhailu24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out break-all"
              >
                Eyobhailu24
              </a>
            </li>
            <li>
              <span className="text-zinc-400 block">
                Phone
              </span>
              <a
                href={`tel:${PHONE.replace(/[^+\d]/g, '')}`}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out"
              >
                {PHONE}
              </a>
            </li>
            <li>
              <span className="text-zinc-400 block">
                Location
              </span>
              <span>{LOCATION}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 mt-8 text-xs text-zinc-500">
        <span className="inline-flex items-center gap-2">
          <span>
            © {new Date().getFullYear()} Eyob Hailu.
          </span>
          <span>All rights reserved.</span>
        </span>
      </div>
    </footer>
  );
}

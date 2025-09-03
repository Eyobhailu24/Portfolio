"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const TO_EMAIL = 'EyobHailu246@gmail.com'

function ContactGrid() {
  const form = useRef();
  const [visible, setVisible] = React.useState(false);
  const sectionRef = React.useRef(null);
  React.useEffect(() => {
    const el = sectionRef.current;
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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xexervp',
        'template_w0ucykm',
        form.current,
        {
          publicKey: 'tShksvNA2Ip4pEgPp',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          form.current.reset(); // Optional: Reset form after success
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert(
            'Failed to send message. Please try again.'
          );
        }
      );
   
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={
        'py-12 md:py-16 transform-gpu transition-all duration-700 ease-out ' +
        (visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6')
      }
    >
      <h2 className="text-4xl md:text-5xl leading-tight font-normal mb-16 text-center bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
        Let's work together
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact details */}
        <div className="rounded-2xl border border-white/20 bg-black p-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h3>

          <div className="space-y-4">
            <div>
              <div className="text-sm md:text-base text-zinc-400">
                Email
              </div>
              <a
                href={`mailto:${TO_EMAIL}`}
                className="text-zinc-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out break-all text-base md:text-lg"
              >
                {TO_EMAIL}
              </a>
            </div>
            <div>
              <div className="text-sm md:text-base text-zinc-400">
                Phone
              </div>
              <a
                href="tel:+251900000000"
                className="text-zinc-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out text-base md:text-lg"
              >
                +251 968 475 774
              </a>
            </div>
            <div>
              <div className="text-sm md:text-base text-zinc-400">
                GitHub
              </div>
              <a
                href="https://github.com/Eyobhailu24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out text-base md:text-lg"
              >
                Eyobhailu24
              </a>
            </div>
            <div>
              <div className="text-sm md:text-base text-zinc-400">
                LinkedIn
              </div>
              <a
                href="https://www.linkedin.com/in/eyob-hailu-58b240202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out text-base md:text-lg"
              >
                Eyob Hailu
              </a>
            </div>
            <div>
              <div className="text-sm md:text-base text-zinc-400">
                Location
              </div>
              <div className="text-zinc-100 text-base md:text-lg">
                Addis Ababa, Ethiopia
              </div>
            </div>
            <div>
              <div className="text-sm md:text-base text-zinc-400">
                Response time
              </div>
              <div className="text-zinc-100 text-base md:text-lg">
                Usually within 24 hours
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="rounded-2xl border border-white/20 bg-black p-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            Send Message
          </h3>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm md:text-base mb-1 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
              >
                Full Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-slate-700 text-base md:text-lg"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base mb-1 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
              >
                Email Address
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-slate-700 text-base md:text-lg"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base mb-1 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project, goals, and timeline..."
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-slate-700 text-base md:text-lg"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium text-white bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 hover:opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactGrid;

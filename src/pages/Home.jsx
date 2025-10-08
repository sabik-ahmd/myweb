export default function Home() {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="glass-card max-w-3xl p-12 flex flex-col items-center gap-6 shadow-2xl hover:scale-105 transition-transform duration-300">
        <p className="kicker text-sm text-indigo-300 uppercase tracking-widest">
          Frontend | Web & MERN Stack Developer
        </p>
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Developing{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Dynamic Web Experiences
          </span>
        </h1>
        <p className="mt-4 text-gray-200 text-lg leading-relaxed">
          I build modern web applications with React and the MERN stack, focusing on clean, responsive interfaces, seamless user interactions, and top-notch performance.
        </p>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <a
            className="px-6 py-3 rounded-lg bg-pink-500/90 text-black font-semibold hover:scale-105 transition-transform"
            href="/Projects"
          >
            View Projects
          </a>
          <a
            className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-gray-100 font-semibold hover:scale-105 transition-transform"
            href="/Contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="mt-12 w-full grid md:grid-cols-3 gap-6">
        <article className="glass-card p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Project Portfolio
          </h3>
          <p className="text-gray-200 mt-2 leading-relaxed">
            Showcasing interactive web applications built with React and the MERN stack, featuring modern design and responsive layouts.
          </p>
        </article>

        <article className="glass-card p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
            Skills & Technologies
          </h3>
          <p className="text-gray-200 mt-2 leading-relaxed">
            React, MongoDB, Express, Node.js, Tailwind CSS, REST APIs, JWT Authentication, and responsive UI design.
          </p>
        </article>

        <article className="glass-card p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Resume & Contact
          </h3>
          <p className="text-gray-200 mt-2 leading-relaxed">
            Download my resume or get in touch for freelance or full-time frontend opportunities.
          </p>
        </article>
      </div>
    </section>
  );
}

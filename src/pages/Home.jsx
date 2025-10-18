export default function Home() {
  return (
    <section className="relative flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen overflow-hidden">

      {/* 🌟 Floating Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl animate-[blob_8s_infinite] mix-blend-overlay"></div>
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-400 to-cyan-400 opacity-20 rounded-full blur-3xl animate-[blob_10s_infinite] mix-blend-overlay"></div>

      {/* 🌌 Animated Particle Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-white/30 rounded-full absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Hero Card */}
      <div className="glass-card max-w-3xl p-12 flex flex-col items-center gap-6 shadow-2xl hover:scale-105 transition-transform duration-300 relative z-10 backdrop-blur-xl bg-white/10 border border-white/20">
        <p className="text-sm text-indigo-300 uppercase tracking-widest">
          Frontend | Web & MERN Stack Developer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Developing{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Stunning Web Experiences
          </span>
        </h1>
        <p className="mt-4 text-gray-200 text-lg leading-relaxed">
          I build modern web applications with React and the MERN stack, focusing on <strong>clean, responsive interfaces</strong>, <strong>smooth interactions</strong>, and <strong>top-notch performance</strong>.
        </p>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <a
            href="/Projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
          >
            View Projects
          </a>
          <a
            href="/Contact"
            className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-gray-100 font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Info Cards */}
      <div className="mt-12 w-full grid md:grid-cols-3 gap-6 relative z-10">
        {[
          {
            title: "Project Portfolio",
            gradient: "from-purple-400 to-pink-400",
            desc: "Interactive React & MERN apps with modern, responsive designs."
          },
          {
            title: "Skills & Technologies",
            gradient: "from-yellow-400 to-orange-400",
            desc: "React, Node.js, Express, MongoDB, Tailwind, REST APIs, JWT, UI/UX design."
          },
          {
            title: "Resume & Contact",
            gradient: "from-blue-400 to-green-400",
            desc: "Download my resume or contact me for freelance/full-time opportunities."
          }
        ].map((card) => (
          <article
            key={card.title}
            className="glass-card p-6 shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 backdrop-blur-xl bg-white/10 border border-white/20"
          >
            <h3 className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${card.gradient}`}>
              {card.title}
            </h3>
            <p className="text-gray-200 mt-2 leading-relaxed">{card.desc}</p>
          </article>
        ))}
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-[blob_8s_infinite] { animation: blob 8s infinite; }
          .animate-[blob_10s_infinite] { animation: blob 10s infinite; }

          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.5); }
          }
          .animate-pulse { animation: pulse 4s infinite ease-in-out; }
        `}
      </style>
    </section>
  );
}

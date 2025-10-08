export default function Contact() {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="glass-card max-w-3xl p-12 flex flex-col gap-6 shadow-2xl hover:scale-105 transition-transform duration-300">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Get in Touch
        </h1>

        <p className="text-gray-200">
          I am always open to exciting frontend and MERN stack projects.  
          Feel free to reach out for collaboration, freelance work, or any queries — or just to say hi!
        </p>

        {/* Contact Info Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          {/* Location */}
          <div className="glass-card p-6 flex flex-col gap-2 text-left shadow-lg hover:shadow-pink-500/30 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-indigo-300">📍 Location</h3>
            <p className="text-gray-200">Mangalore (Puttur), India</p>
          </div>

          {/* Mobile */}
          <div className="glass-card p-6 flex flex-col gap-2 text-left shadow-lg hover:shadow-purple-500/30 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-indigo-300">📞 Mobile</h3>
            <p className="text-gray-200">+91 9686893983</p>
          </div>

          {/* Email */}
          <div className="glass-card p-6 flex flex-col gap-2 text-left shadow-lg hover:shadow-indigo-500/30 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-indigo-300">✉️ Email</h3>
            <p className="text-gray-200">
              <a
                href="mailto:sabik.mh@gmail.com"
                className="underline text-indigo-300 hover:text-pink-400 transition-colors duration-300"
              >
                sabik.mh@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-10 grid gap-4">
          <input
            type="text"
            placeholder="Your Good Name"
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="email"
            placeholder="Your Web Address"
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="#" className="text-indigo-300 hover:text-pink-400 transition">LinkedIn</a>
          <a href="#" className="text-indigo-300 hover:text-pink-400 transition">GitHub</a>
          <a href="#" className="text-indigo-300 hover:text-pink-400 transition">Twitter</a>
        </div>
      </div>
    </section>
  );
}

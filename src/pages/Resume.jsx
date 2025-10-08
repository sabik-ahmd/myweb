import { useState } from "react";
import { Download, Eye } from "lucide-react";

export default function Resume() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="glass-card max-w-3xl p-12 flex flex-col gap-6 shadow-2xl hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          My Resume
        </h1>
        <p className="text-gray-200 text-lg">
          Here’s a quick look at my professional background and education.  
          You can download my resume or view it right below.
        </p>

        {/* Education & Skills Section */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="glass-card p-6 text-left shadow-lg">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">Education</h3>
            <ul className="text-gray-200 space-y-2">
              <li>
                🎓 <strong>BSc (Maths, Computer Science)</strong><br />
                <span className="text-sm text-gray-400">St. Philomena College, Mangalore University — 2021–2024</span>
              </li>
              <li>
                📘 <strong>PUC (PCMB)</strong><br />
                <span className="text-sm text-gray-400">Govt. PU College, Puttur — 2019–2021</span>
              </li>
              <li>
                🏫 <strong>SSLC</strong><br />
                <span className="text-sm text-gray-400">Sri Ramakrishna High School — 2017–2019</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 text-left shadow-lg">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">Skills</h3>
            <ul className="text-gray-200 space-y-2">
              <li>⚡ Frontend: React, Tailwind CSS, JavaScript, HTML5, CSS3</li>
              <li>🧩 MERN Stack: MongoDB, Express, React, Node.js</li>
              <li>🎨 UI/UX: Responsive Design, Animations, Glassmorphism</li>
              <li>🛠 Tools: Git, Vite, VS Code, Figma</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/assets/sabik.cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>

          <button
            onClick={() => setShowResume(!showResume)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-gray-100 font-semibold hover:scale-105 transition-transform"
          >
            <Eye className="w-5 h-5" /> {showResume ? "Hide Resume" : "View Resume"}
          </button>
        </div>

        {/* Embedded Resume Preview */}
        {showResume && (
          <div className="mt-8 w-full h-[600px] rounded-lg overflow-hidden border border-white/20">
            <iframe
              src="/assets/sabik.cv.pdf"
              className="w-full h-full"
              title="Ahammad Sabik Resume"
            ></iframe>
          </div>
        )}

        <p className="text-gray-400 mt-6 text-sm italic">
          “Strive to build things that make a difference.”
        </p>
      </div>
    </section>
  );
}

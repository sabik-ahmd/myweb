import { useState } from "react";
import { Download, Eye } from "lucide-react";

export default function Resume() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="glass-card w-full max-w-4xl p-6 sm:p-12 flex flex-col gap-6 shadow-2xl hover:scale-105 transition-transform duration-300">
        
        <h1 className="text-2xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          My Resume
        </h1>

        <p className="text-gray-200 text-base sm:text-lg">
          Here’s a quick look at my professional background and education.  
          You can download my resume or view it right below.
        </p>

        {/* Education & Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 w-full">
          <div className="glass-card p-4 sm:p-6 text-left shadow-lg w-full">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">Education</h3>
            <ul className="text-gray-200 space-y-2 text-sm sm:text-base">
              <li>
                🎓 <strong>BSc (Maths, Computer Science)</strong><br />
                <span className="text-gray-400">St. Philomena College, Mangalore University — 2021–2024</span>
              </li>
              <li>
                📘 <strong>PUC (PCMB)</strong><br />
                <span className="text-gray-400">Govt. PU College, Puttur — 2019–2021</span>
              </li>
              <li>
                🏫 <strong>SSLC</strong><br />
                <span className="text-gray-400">Sri Ramakrishna High School — 2017–2019</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-4 sm:p-6 text-left shadow-lg w-full">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">Skills</h3>
            <ul className="text-gray-200 space-y-2 text-sm sm:text-base">
              <li>⚡ Frontend: React, Tailwind CSS, JavaScript, HTML5, CSS3</li>
              <li>🧩 MERN Stack: MongoDB, Express, React, Node.js</li>
              <li>🎨 UI/UX: Responsive Design, Animations, Glassmorphism</li>
              <li>🛠 Tools: Git, Vite, VS Code, Figma</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full">
          <a
            href="/assets/sabik.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" /> Open Resume
          </a>

          <button
            onClick={() => setShowResume(!showResume)}
            className="flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-gray-100 font-semibold hover:scale-105 transition-transform"
          >
            <Eye className="w-5 h-5" /> {showResume ? "Hide Preview" : "View Preview"}
          </button>
        </div>

        {/* Resume Preview */}
        {showResume && (
          <a
            href="/assets/sabik.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-8 w-full sm:max-w-2xl mx-auto block rounded-lg overflow-hidden shadow-lg border border-white/20"
          >
            <img
              src="/assets/sabik-preview.png"
              alt="Resume Preview"
              className="w-full h-auto"
            />
            <p className="text-gray-400 text-sm mt-2 text-center">Tap image to view full resume</p>
          </a>
        )}

        <p className="text-gray-400 mt-6 text-sm italic">
          “Strive to build things that make a difference.”
        </p>
      </div>
    </section>
  );
}

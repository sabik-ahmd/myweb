export default function About() {
  return (
    <section className="flex flex-col items-center py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-12">
        About Me
      </h1>

      <div className="glass-card max-w-4xl p-10 flex flex-col gap-8 shadow-2xl hover:scale-105 transition-transform duration-300">
        {/* Intro */}
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Introduction
          </h2>
          <p className="text-gray-200 mt-2 text-lg leading-relaxed">
            Hi! I’m <span className="font-semibold text-indigo-300">Ahammad Sabik</span>, a 
            <span className="font-semibold text-pink-300"> Frontend & MERN Stack Developer</span>. 
            I have completed my <span className="font-semibold text-yellow-300">BSc in Computer Science & Mathematics</span> from St. Philomena College, Mangalore University. 
            I specialize in building responsive, modern, and accessible web applications using 
            <span className="font-semibold text-yellow-300"> React</span> and modern CSS frameworks.
          </p>
        </div>

        {/* Hobbies */}
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
            Hobbies & Interests
          </h2>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Playing Games</li>
            <li>Travelling</li>
            <li>Exploring new technologies and frameworks</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Education
          </h2>
          <div className="mt-2 flex flex-col gap-2 text-gray-200">
            <p className="font-semibold">BSc (Computer Science & Maths) - St. Philomena College | 8.4 CGPA | 2021-2024</p>
            <p className="font-semibold">PUC (PCMB) - GPUC Puttur | 82% | 2019-2021</p>
            <p className="font-semibold">SSLC - Sri RamaKrishna High School | 92% | 2017-2019</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-300 mt-4 italic text-center">
          “Strive to build things that make a difference!”
        </p>
      </div>
    </section>
  );
}

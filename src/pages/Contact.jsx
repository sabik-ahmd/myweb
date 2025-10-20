// src/pages/Contact.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import SocialIcons from "../components/SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_rxub9kl",
        "template_0lhi388",
        formData,
        "pwHspfsaItxnBOYh7"
      )
      .then(() => setStatus("✅ Message sent successfully! I’ll get back to you soon."))
      .catch(() => setStatus("❌ Failed to send message. Please try again later."));
  };

  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="glass-card max-w-3xl p-12 flex flex-col gap-6 shadow-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Let’s Connect
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
          I’m actively seeking opportunities as a{" "}
          <span className="text-purple-400 font-semibold">Frontend Developer</span> (React.js)
          where I can contribute to building clean, user-focused web experiences.{" "}
          I’m also open to{" "}
          <span className="text-pink-400 font-semibold">freelance projects</span> and collaborations — 
          if you have an idea or opportunity, I’d love to connect and discuss how we can bring it to life.
        </p>

        {/* Contact Info with Glass + Blink Style */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer shadow-lg">
            <h3 className="text-indigo-300 font-semibold mb-1">Location</h3>
            <p className="text-gray-200">Puttur, Mangalore</p>
          </div>
          <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer shadow-lg">
            <h3 className="text-indigo-300 font-semibold mb-1">Phone</h3>
            <p className="text-gray-200">+91 96868 93983</p>
          </div>
          <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer shadow-lg">
            <h3 className="text-indigo-300 font-semibold mb-1">Email</h3>
            <p className="text-gray-200">sabik.mh@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-gray-200">{status}</p>}

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <SocialIcons />
        </div>

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Ahammad Sabik — Frontend Developer
        </p>
      </div>
    </section>
  );
}

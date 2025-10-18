import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.send(
      "service_rxub9kl", // get this from EmailJS
      "template_0lhi388",
      formData,
      "pwHspfsaItxnBOYh7"
    )
    .then(() => setStatus("Message sent successfully!"))
    .catch(() => setStatus("Failed to send message. Please try again."));
  };

  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="glass-card max-w-3xl p-12 flex flex-col gap-6 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Get in Touch
        </h1>
        <p className="text-gray-200">I am open to exciting projects. Feel free to reach out!</p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Good Name"
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

        <div className="mt-8 flex justify-center gap-6">
          <a href="https://linkedin.com" className="text-indigo-300 hover:text-pink-400 transition">LinkedIn</a>
          <a href="https://github.com" className="text-indigo-300 hover:text-pink-400 transition">GitHub</a>
          <a href="https://twitter.com" className="text-indigo-300 hover:text-pink-400 transition">Twitter</a>
        </div>
      </div>
    </section>
  );
}

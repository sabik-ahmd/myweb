// src/pages/blogPosts/ModernCSS.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ModernCSS() {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-slate-100">
      <div className="max-w-3xl mx-auto glass-card p-10">
        <Link to="/blog" className="text-sm text-indigo-300 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Modern CSS & Glassmorphism
        </h1>

        <p className="text-gray-300 mb-6">
          Modern CSS allows developers to create stunning interfaces using gradients, shadows, and transparency effects.
          Glassmorphism is a popular trend that gives UI elements a frosted-glass look.
        </p>

        <nav className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-300 mb-2">On this page</h2>
          <ul className="list-inside list-disc text-gray-200 space-y-1">
            <li><a href="#glass" className="hover:underline">Glassmorphism Basics</a></li>
            <li><a href="#css" className="hover:underline">CSS Techniques</a></li>
            <li><a href="#examples" className="hover:underline">Example Use Cases</a></li>
          </ul>
        </nav>

        <section id="glass" className="mb-6">
          <h2 className="text-2xl font-bold text-indigo-300 mb-2">Glassmorphism Basics</h2>
          <p className="text-gray-200">
            Glassmorphism typically uses a combination of <strong>blurred backgrounds</strong>, <strong>translucent surfaces</strong>, 
            and subtle borders to create a floating glass effect.
          </p>
        </section>

        <section id="css" className="mb-6">
          <h2 className="text-2xl font-bold text-indigo-300 mb-2">CSS Techniques</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Use <code>backdrop-filter: blur(10px);</code> for the frosted effect.</li>
            <li>Add semi-transparent backgrounds like <code>rgba(255, 255, 255, 0.2)</code>.</li>
            <li>Apply soft shadows: <code>box-shadow: 0 4px 30px rgba(0,0,0,0.1);</code>.</li>
            <li>Combine gradients to add depth and color transitions.</li>
            <li>Ensure responsiveness using <code>flex</code> and <code>grid</code> layouts.</li>
          </ul>
        </section>

        <section id="examples" className="mb-6">
          <h2 className="text-2xl font-bold text-indigo-300 mb-2">Example Use Cases</h2>
          <p className="text-gray-200 mb-3">
            Glassmorphism works well for cards, modals, navigation bars, and hero sections. It creates a sleek, modern feel that is visually appealing and enhances user focus.
          </p>
        </section>

        <footer className="mt-6 border-t border-white/5 pt-6">
          <p className="text-gray-300 mb-3">
            Enjoyed this? Explore other posts or try these CSS techniques in your own projects.
          </p>
          <Link
            to="/blog"
            className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:opacity-90"
          >
            Back to Blog
          </Link>
        </footer>
      </div>
    </section>
  );
}

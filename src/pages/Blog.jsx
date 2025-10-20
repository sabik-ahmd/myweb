// src/pages/Blog.jsx
import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      title: "React Tips & Tricks",
      description:
        "Learn practical React tips for building faster, cleaner, and maintainable frontend apps.",
      slug: "react-tips",
    },
    {
      title: "Accessibility in Web Design",
      description:
        "How to make your web applications accessible to everyone, improving usability and compliance.",
      slug: "accessibility-web-design",
    },
    {
      title: "Modern CSS & Glassmorphism",
      description:
        "Explore modern CSS techniques including glassmorphism, gradients, and responsive layouts.",
      slug: "modern-css-glassmorphism",
    },
  ];

  const trendingTopics = [
    "React 18 Features",
    "Tailwind CSS Tricks",
    "Frontend Performance Optimization",
    "JWT Authentication",
    "Responsive UI Design",
  ];

  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
        My Blog & Insights
      </h1>
      <p className="text-gray-300 max-w-2xl mb-12">
        Sharing tips, tutorials, and insights about frontend development, React, accessibility (a11y), and modern web design.
        Explore trending topics and learn something new today!
      </p>

      {/* Blog posts grid */}
      <div className="w-full grid md:grid-cols-3 gap-6 mb-12">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="glass-card p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">{post.title}</h3>
            <p className="text-gray-200 mb-4">{post.description}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="mt-auto inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition-transform"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Trending topics card */}
      <div className="w-full max-w-2xl p-6 glass-card">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Trending Topics</h2>
        <ul className="text-gray-200 list-disc list-inside space-y-2">
          {trendingTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

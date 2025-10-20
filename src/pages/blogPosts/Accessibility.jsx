import { Link } from "react-router-dom";

export default function Accessibility() {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-slate-100">
      <div className="max-w-3xl mx-auto glass-card p-10">
        <Link to="/blog" className="text-sm text-indigo-300 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Accessibility in Web Design — Inclusive & Practical Tips
        </h1>

        <p className="text-gray-300 mb-6">
          Designing for accessibility ensures everyone can use your website effectively, including people with disabilities. This guide highlights practical steps, common pitfalls, and modern tools for testing accessibility.
        </p>

        <nav className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-300 mb-2">On this page</h2>
          <ul className="list-inside list-disc text-gray-200 space-y-1">
            <li><a href="#semantic" className="hover:underline">Semantic HTML</a></li>
            <li><a href="#aria" className="hover:underline">ARIA roles & attributes</a></li>
            <li><a href="#keyboard" className="hover:underline">Keyboard accessibility</a></li>
            <li><a href="#contrast" className="hover:underline">Color contrast & visuals</a></li>
            <li><a href="#forms" className="hover:underline">Accessible forms</a></li>
            <li><a href="#testing" className="hover:underline">Testing & tools</a></li>
          </ul>
        </nav>

        <section id="semantic" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Semantic HTML</h3>
          <p className="text-gray-200 mb-3">
            Using semantic HTML elements ensures that assistive technologies (like screen readers) can correctly interpret content.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li><code>{'<header>'}</code>, <code>{'<nav>'}</code>, <code>{'<main>'}</code>, <code>{'<footer>'}</code></li>
            <li>Use <code>{'<button>'}</code> instead of clickable <code>{'<div>'}</code> for actions</li>
            <li>Headings should follow a logical hierarchy (<code>h1 → h2 → h3</code>)</li>
          </ul>
        </section>

        <section id="aria" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">ARIA roles & attributes</h3>
          <p className="text-gray-200 mb-3">
            Use ARIA only when semantic HTML is not enough. Example:
          </p>
          <pre className="bg-gray-900 p-4 rounded-md overflow-auto text-sm mb-3">
{`<div role="alert" aria-live="assertive">
  Form submitted successfully!
</div>`}
          </pre>
          <p className="text-gray-200">
            Avoid redundant ARIA roles on native elements (e.g., don’t add <code>role="button"</code> to <code>{'<button>'}</code>).
          </p>
        </section>

        <section id="keyboard" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Keyboard accessibility</h3>
          <p className="text-gray-200 mb-3">
            Users must be able to navigate your site with only a keyboard:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>All interactive elements should be focusable</li>
            <li>Use <code>tabindex</code> carefully; natural tab order is preferred</li>
            <li>Provide visible focus indicators (e.g., <code>outline</code>)</li>
          </ul>
        </section>

        <section id="contrast" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Color contrast & visuals</h3>
          <p className="text-gray-200 mb-3">
            Ensure sufficient contrast between text and background. WCAG recommends a minimum of 4.5:1 for normal text.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Use tools like <a href="https://contrast-ratio.com/" className="text-indigo-300 hover:underline">contrast-ratio.com</a></li>
            <li>Avoid conveying meaning by color alone (use icons or text labels)</li>
          </ul>
        </section>

        <section id="forms" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Accessible forms</h3>
          <p className="text-gray-200 mb-3">
            Forms are often problematic for accessibility. Best practices:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Label every input with <code>{'<label>'}</code> or <code>aria-label</code></li>
            <li>Provide clear error messages and instructions</li>
            <li>Group related fields using <code>{'<fieldset>'}</code> and <code>{'<legend>'}</code></li>
          </ul>
        </section>

        <section id="testing" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Testing & tools</h3>
          <p className="text-gray-200 mb-3">
            Regularly test accessibility to catch issues early:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Keyboard-only navigation</li>
            <li>Screen reader testing (NVDA, VoiceOver)</li>
            <li>Lighthouse accessibility audit</li>
            <li>Automated tools: axe DevTools, WAVE</li>
          </ul>
        </section>

        <footer className="mt-6 border-t border-white/5 pt-6">
          <p className="text-gray-300 mb-3">
            Accessibility benefits all users — making your site usable, inclusive, and future-proof.
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

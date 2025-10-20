import { Link } from "react-router-dom";

export default function ReactTips() {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-slate-100">
      <div className="max-w-3xl mx-auto glass-card p-10">
        <Link to="/blog" className="text-sm text-indigo-300 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          React Tips & Tricks — Practical Patterns for 2024+
        </h1>

        <p className="text-gray-300 mb-6">
          A compact, pragmatic guide with modern patterns (concurrency, memoization, component composition,
          accessibility, bundle size tips, and testing pointers). Each tip is short, actionable and follows
          best practices.
        </p>

        <nav className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-300 mb-2">On this page</h2>
          <ul className="list-inside list-disc text-gray-200 space-y-1">
            <li><a href="#perf" className="hover:underline">Performance — rendering & memo</a></li>
            <li><a href="#state" className="hover:underline">State patterns — local vs global</a></li>
            <li><a href="#concurrency" className="hover:underline">Concurrency & Suspense</a></li>
            <li><a href="#composition" className="hover:underline">Component composition</a></li>
            <li><a href="#a11y" className="hover:underline">Accessibility quick wins</a></li>
            <li><a href="#testing" className="hover:underline">Testing tips</a></li>
            <li><a href="#bundle" className="hover:underline">Bundle size & imports</a></li>
          </ul>
        </nav>

        <section id="perf" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Performance — rendering & memo</h3>
          <p className="text-gray-200 mb-3">
            Avoid unnecessary re-renders by memoizing components and functions. Use <code>React.memo</code> for pure components,
            and <code>useCallback</code> / <code>useMemo</code> for stable function/value references passed down as props.
          </p>

          <pre className="bg-gray-900 p-4 rounded-md overflow-auto text-sm mb-3">
{`const ExpensiveList = React.memo(function ExpensiveList({ items, onSelect }) {
  // only re-renders when items or onSelect changes
  return items.map(it => <div key={it.id} onClick={() => onSelect(it)}>{it.name}</div>);
});`}
          </pre>

          <p className="text-gray-200">
            Tip: don’t overuse <code>useMemo</code> — measure first. Prefer structural changes (split components) over excessive memoization.
          </p>
        </section>

        <section id="state" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">State patterns — local vs global</h3>
          <p className="text-gray-200 mb-3">
            Keep state as close to the UI that uses it. Lift state up only when multiple siblings need it.
            For app-wide data, opt for a lightweight store (Zustand / Redux Toolkit Query) instead of prop-drilling.
          </p>

          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Local UI state → component state</li>
            <li>Cross-cutting shared state → context or store</li>
            <li>Server data → use server-state libraries (React Query / RTK Query)</li>
          </ul>
        </section>

        <section id="concurrency" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Concurrency & Suspense</h3>
          <p className="text-gray-200 mb-3">
            Use Suspense to handle async loading UI and React 18 concurrent features. Keep transitions smooth using
            <code> startTransition </code> for non-urgent updates (search, filters).
          </p>

          <pre className="bg-gray-900 p-4 rounded-md overflow-auto text-sm mb-3">
{`import { startTransition } from "react";

function onFilterChange(value) {
  startTransition(() => {
    setFilter(value); // low priority update
  });
}`}
          </pre>

          <p className="text-gray-200">
            Wrap network-latent UI with <code>{`<Suspense fallback={<Loader/>}>`}</code> when using data-fetching libraries that support Suspense.
          </p>
        </section>

        <section id="composition" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Component composition</h3>
          <p className="text-gray-200 mb-3">
            Prefer composition over inheritance: pass render props, children, or small responsibility-focused components.
          </p>

          <pre className="bg-gray-900 p-4 rounded-md overflow-auto text-sm mb-3">
{`function Card({ header, children, footer }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}`}
          </pre>
        </section>

        <section id="a11y" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Accessibility quick wins</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-1 mb-3">
            <li>Always use semantic HTML (buttons, forms, nav).</li>
            <li>Keyboard focus: ensure interactive elements are reachable and visible.</li>
            <li>Use <code>aria-*</code> only where semantic HTML can’t express meaning.</li>
            <li>Test with a screen reader and Lighthouse accessibility audit.</li>
          </ul>
        </section>

        <section id="testing" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Testing tips</h3>
          <p className="text-gray-200 mb-3">
            Prefer integration tests with React Testing Library that assert behaviour, not implementation details.
            Mock network requests in a predictable way (Mock Service Worker).
          </p>
        </section>

        <section id="bundle" className="mb-6">
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Bundle size & imports</h3>
          <p className="text-gray-200 mb-3">
            Tree-shakeable imports: prefer direct named imports and avoid importing entire libraries when you only need utilities.
            Example: <code>import {'{ debounce }'} from 'lodash-es'</code> (or better: use tiny focused libraries).
          </p>

          <p className="text-gray-200">
            Also: split big routes with <code>React.lazy</code> and dynamic imports to reduce initial bundle size.
          </p>
        </section>

        <footer className="mt-6 border-t border-white/5 pt-6">
          <p className="text-gray-300 mb-3">
            Enjoyed this? Share or star the repo — small wins compound into big improvements.
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

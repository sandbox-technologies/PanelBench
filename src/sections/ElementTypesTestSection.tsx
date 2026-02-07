/**
 * Element Types Test Section
 * Tests: text elements, container elements, images, interactive elements, replaced elements
 * These test the element analyzer and semantic type detection
 */
import { TestItem } from '../TestItem'

export function ElementTypesTestSection() {
  return (
    <section id="element-types" className="test-section">
      <h2>Element Types Tests</h2>
      <p className="text-sm text-gray-600 mb-4">
        These elements test the semantic type detection. The DesignPanel shows different sections based on element type.
      </p>

      {/* Text Elements */}
      <h3 id="element-types-text">Text Elements (semanticType: 'text') <span className="subsection-id">element-types-text</span></h3>
      <p className="text-xs text-gray-500 mb-3">
        Typography section should be visible for these elements.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="element-h1" label="<h1> - Heading level 1">
          <h1 data-testid="element-h1" className="text-2xl font-bold text-gray-900 mb-2">H1 Heading</h1>
        </TestItem>

        <TestItem testId="element-h2" label="<h2> - Heading level 2">
          <h2 data-testid="element-h2" className="text-xl font-semibold text-gray-800 mb-2">H2 Heading</h2>
        </TestItem>

        <TestItem testId="element-h3" label="<h3> - Heading level 3">
          <h3 data-testid="element-h3" className="text-lg font-medium text-gray-700 mb-2">H3 Heading</h3>
        </TestItem>

        <TestItem testId="element-h4" label="<h4> - Heading level 4">
          <h4 data-testid="element-h4" className="text-base font-medium text-gray-600 mb-2">H4 Heading</h4>
        </TestItem>

        <TestItem testId="element-p" label="<p> - Paragraph">
          <p data-testid="element-p" className="text-gray-700 mb-2">
            This is a paragraph element with some text content. Paragraphs are block-level text elements.
          </p>
        </TestItem>

        <TestItem testId="element-span" label="<span> - Inline text">
          <span data-testid="element-span" className="text-gray-700 bg-yellow-100 px-2 py-1 rounded">
            This is a span element
          </span>
        </TestItem>

        <TestItem testId="element-label" label="<label> - Label element">
          <label className="text-gray-700 font-medium">Form Label</label>
        </TestItem>

        <TestItem testId="element-strong-em" label="<strong> and <em>">
          <div>
            <strong className="text-gray-900">Strong/Bold text</strong>
            <span className="mx-2">and</span>
            <em className="text-gray-700">Emphasized/Italic text</em>
          </div>
        </TestItem>
      </div>

      {/* Container Elements */}
      <h3 id="element-types-container">Container Elements (semanticType: 'container') <span className="subsection-id">element-types-container</span></h3>
      <p className="text-xs text-gray-500 mb-3">
        Auto Layout section should be visible. Layout containers show additional options.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="element-div" label="<div> - Generic container">
          <div data-testid="element-div" className="bg-blue-100 p-4 rounded min-h-[80px]">
            <div className="w-8 h-8 bg-blue-500 rounded" />
            <div className="w-8 h-8 bg-blue-400 rounded mt-2" />
          </div>
        </TestItem>

        <TestItem testId="element-section" label="<section> - Section element">
          <section data-testid="element-section" className="bg-green-100 p-4 rounded min-h-[80px]">
            <p className="text-sm text-green-800">Section content</p>
          </section>
        </TestItem>

        <TestItem testId="element-article" label="<article> - Article element">
          <article data-testid="element-article" className="bg-purple-100 p-4 rounded min-h-[80px]">
            <p className="text-sm text-purple-800">Article content</p>
          </article>
        </TestItem>

        <TestItem testId="element-nav" label="<nav> - Navigation element">
          <nav className="bg-orange-100 p-4 rounded min-h-[80px]">
            <ul className="flex gap-4 text-sm text-orange-800">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </TestItem>

        <TestItem testId="element-header" label="<header> - Header element">
          <header className="bg-teal-100 p-4 rounded min-h-[80px]">
            <p className="text-sm text-teal-800 font-semibold">Header content</p>
          </header>
        </TestItem>

        <TestItem testId="element-footer" label="<footer> - Footer element">
          <footer className="bg-gray-200 p-4 rounded min-h-[80px]">
            <p className="text-sm text-gray-600">Footer content</p>
          </footer>
        </TestItem>

        <TestItem testId="element-main" label="<main> - Main element">
          <main className="bg-indigo-100 p-4 rounded min-h-[80px]">
            <p className="text-sm text-indigo-800">Main content area</p>
          </main>
        </TestItem>

        <TestItem testId="element-aside" label="<aside> - Aside/sidebar element">
          <aside className="bg-pink-100 p-4 rounded min-h-[80px]">
            <p className="text-sm text-pink-800">Sidebar content</p>
          </aside>
        </TestItem>
      </div>

      {/* Layout Containers (Flex/Grid) */}
      <h3 id="element-types-layout">Layout Containers (isLayoutContainer: true) <span className="subsection-id">element-types-layout</span></h3>
      <p className="text-xs text-gray-500 mb-3">
        These should show the grid/alignment options in Auto Layout section.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="layout-flex" label="Flex container (display: flex)">
          <div data-testid="layout-flex" className="flex gap-2 bg-cyan-100 p-4 rounded">
            <div className="w-12 h-12 bg-cyan-500 rounded" />
            <div className="w-12 h-12 bg-cyan-400 rounded" />
            <div className="w-12 h-12 bg-cyan-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="layout-grid" label="Grid container (display: grid)">
          <div data-testid="layout-grid" className="grid grid-cols-3 gap-2 bg-amber-100 p-4 rounded">
            <div className="h-10 bg-amber-500 rounded" />
            <div className="h-10 bg-amber-400 rounded" />
            <div className="h-10 bg-amber-300 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Image Elements */}
      <h3 id="element-types-image">Image Elements (semanticType: 'image') <span className="subsection-id">element-types-image</span></h3>
      <p className="text-xs text-gray-500 mb-3">
        These should show aspect ratio controls and no typography section.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="element-img" label="<img> - Image element">
          <img
            data-testid="element-img"
            src="https://picsum.photos/200/150"
            alt="Sample image"
            className="rounded w-full h-auto"
          />
        </TestItem>

        <TestItem testId="element-svg" label="<svg> - SVG element">
          <svg
            data-testid="element-svg"
            viewBox="0 0 100 100"
            className="w-24 h-24 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" fill="#8B5CF6" />
            <rect x="30" y="30" width="40" height="40" fill="#A78BFA" />
          </svg>
        </TestItem>

        <TestItem testId="element-picture" label="<picture> - Picture element">
          <picture>
            <source srcSet="https://picsum.photos/200/150?1" media="(min-width: 600px)" />
            <img
              src="https://picsum.photos/150/100"
              alt="Picture element"
              className="rounded w-full h-auto"
            />
          </picture>
        </TestItem>
      </div>

      {/* Interactive Elements */}
      <h3 id="element-types-interactive">Interactive Elements (semanticType: 'interactive') <span className="subsection-id">element-types-interactive</span></h3>
      <p className="text-xs text-gray-500 mb-3">
        Buttons, links, and form controls should be detected as interactive.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TestItem testId="element-button" label="<button> - Button element">
          <button
            data-testid="element-button"
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Button
          </button>
        </TestItem>

        <TestItem testId="element-a" label="<a> - Anchor/link element">
          <a
            data-testid="element-a"
            href="#"
            className="text-blue-600 hover:text-blue-800 underline"
            onClick={(e) => e.preventDefault()}
          >
            Link Element
          </a>
        </TestItem>

        <TestItem testId="element-input-text" label='<input type="text">'>
          <input
            data-testid="element-input-text"
            type="text"
            placeholder="Text input"
            className="px-3 py-2 border border-gray-300 rounded w-full"
          />
        </TestItem>

        <TestItem testId="element-checkbox" label='<input type="checkbox">'>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="checkbox1"
              className="w-5 h-5"
            />
            <label htmlFor="checkbox1" className="ml-2">Checkbox</label>
          </div>
        </TestItem>

        <TestItem testId="element-radio" label='<input type="radio">'>
          <div className="flex items-center">
            <input
              type="radio"
              id="radio1"
              name="radio-group"
              className="w-5 h-5"
            />
            <label htmlFor="radio1" className="ml-2">Radio button</label>
          </div>
        </TestItem>

        <TestItem testId="element-select" label="<select> - Dropdown">
          <select className="px-3 py-2 border border-gray-300 rounded w-full">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </TestItem>

        <TestItem testId="element-textarea" label="<textarea>">
          <textarea
            placeholder="Textarea"
            className="px-3 py-2 border border-gray-300 rounded w-full h-20 resize-none"
          />
        </TestItem>

        <TestItem testId="element-submit" label='<button type="submit">'>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit Button
          </button>
        </TestItem>

        <TestItem testId="element-range" label='<input type="range"> - Slider'>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />
        </TestItem>
      </div>

      {/* Replaced Elements */}
      <h3 id="element-types-replaced">Replaced Elements (semanticType: 'replaced') <span className="subsection-id">element-types-replaced</span></h3>
      <p className="text-xs text-gray-500 mb-3">
        iframes, videos, and embedded content are replaced elements.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="element-iframe" label="<iframe> - Inline frame">
          <iframe
            data-testid="element-iframe"
            src="about:blank"
            title="Empty iframe"
            className="w-full h-32 border border-gray-300 rounded bg-gray-50"
          />
        </TestItem>

        <TestItem testId="element-video" label="<video> - Video element">
          <video
            data-testid="element-video"
            className="w-full h-32 bg-gray-900 rounded"
            controls
            poster="https://picsum.photos/320/180"
          >
            <source src="" type="video/mp4" />
            Your browser does not support video.
          </video>
        </TestItem>
      </div>

      {/* List Elements */}
      <h3 id="element-types-list">List Elements <span className="subsection-id">element-types-list</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="element-ul" label="<ul> - Unordered list">
          <ul data-testid="element-ul" className="list-disc list-inside text-gray-700">
            <li>Unordered list item 1</li>
            <li>Unordered list item 2</li>
            <li>Unordered list item 3</li>
          </ul>
        </TestItem>

        <TestItem testId="element-ol" label="<ol> - Ordered list">
          <ol data-testid="element-ol" className="list-decimal list-inside text-gray-700">
            <li>Ordered list item 1</li>
            <li>Ordered list item 2</li>
            <li>Ordered list item 3</li>
          </ol>
        </TestItem>
      </div>

      {/* Table Elements */}
      <h3 id="element-types-table">Table Elements <span className="subsection-id">element-types-table</span></h3>
      <TestItem testId="element-table" label="<table> with thead, tbody, tr, th, td">
        <table data-testid="element-table" className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Header 1</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Header 2</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Cell 1</td>
              <td className="border border-gray-300 px-4 py-2">Cell 2</td>
              <td className="border border-gray-300 px-4 py-2">Cell 3</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Cell 4</td>
              <td className="border border-gray-300 px-4 py-2">Cell 5</td>
              <td className="border border-gray-300 px-4 py-2">Cell 6</td>
            </tr>
          </tbody>
        </table>
      </TestItem>

      {/* Form Element */}
      <h3 id="element-types-form">Form Element <span className="subsection-id">element-types-form</span></h3>
      <TestItem testId="element-form" label="<form> - Form container">
        <form data-testid="element-form" className="bg-gray-50 p-4 rounded border border-gray-200" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      </TestItem>

      {/* Semantic Elements */}
      <h3 id="element-types-semantic">Other Semantic Elements <span className="subsection-id">element-types-semantic</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="element-figure" label="<figure> with <figcaption>">
          <figure className="bg-gray-50 p-4 rounded">
            <img
              src="https://picsum.photos/200/120"
              alt="Figure image"
              className="rounded mb-2"
            />
            <figcaption className="text-sm text-gray-600 italic">
              This is a figure caption
            </figcaption>
          </figure>
        </TestItem>

        <TestItem testId="element-blockquote" label="<blockquote> - Block quote">
          <blockquote data-testid="element-blockquote" className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            "This is a blockquote element with some quoted text content."
          </blockquote>
        </TestItem>

        <TestItem testId="element-code" label="<code> - Inline code">
          <code data-testid="element-code" className="bg-gray-100 px-2 py-1 rounded font-mono text-sm text-pink-600">
            const code = 'inline';
          </code>
        </TestItem>

        <TestItem testId="element-pre" label="<pre> - Preformatted text">
          <pre data-testid="element-pre" className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-auto">
{`function example() {
  return 'preformatted';
}`}
          </pre>
        </TestItem>
      </div>
    </section>
  )
}

/**
 * Text Layout Section Test Cases
 * Tests: text element sizing, resizing modes, padding/margin on text
 */
import { TestItem } from '../TestItem'

export function TextLayoutTestSection() {
  return (
    <section id="textlayout" className="test-section">
      <h2>Text Layout Section Tests</h2>

      {/* Text Resizing Modes */}
      <h3 id="textlayout-resizing">Text Resizing Modes <span className="subsection-id">textlayout-resizing</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="text-auto-width" label="display: inline (auto width)">
          <p className="text-xs text-gray-500 mb-2">Auto Width (inline):</p>
          <div className="bg-blue-100 p-2 rounded">
            <span
              data-testid="text-auto-width"
              className="bg-blue-300 px-2 py-1 rounded"
              style={{ display: 'inline' }}
            >
              This text flows naturally and wraps when needed. The width adjusts to content.
            </span>
          </div>
        </TestItem>

        <TestItem testId="text-auto-height" label="width: 100% (auto height)">
          <p className="text-xs text-gray-500 mb-2">Auto Height (block):</p>
          <div className="bg-green-100 p-2 rounded">
            <p
              data-testid="text-auto-height"
              className="bg-green-300 p-2 rounded"
              style={{ width: '100%' }}
            >
              This paragraph has a fixed width but the height automatically adjusts based on the content length.
            </p>
          </div>
        </TestItem>

        <TestItem testId="text-fixed-size" label="width: 150px; height: 60px">
          <p className="text-xs text-gray-500 mb-2">Fixed Size:</p>
          <div className="bg-purple-100 p-2 rounded">
            <p
              className="bg-purple-300 p-2 rounded overflow-hidden"
              style={{ width: '150px', height: '60px' }}
            >
              Fixed dimensions. Extra text will be clipped or overflow depending on settings.
            </p>
          </div>
        </TestItem>
      </div>

      {/* Block vs Inline Text */}
      <h3 id="textlayout-block-inline">Block vs Inline Text Elements <span className="subsection-id">textlayout-block-inline</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="text-block-elements" label="p, h4, div - display: block">
          <p className="text-xs text-gray-500 mb-2">Block text elements:</p>
          <div className="bg-gray-100 p-4 rounded space-y-2">
            <p className="bg-red-200 p-2 rounded">Paragraph (block)</p>
            <h4 className="bg-orange-200 p-2 rounded font-semibold">H4 Heading (block)</h4>
            <div className="bg-yellow-200 p-2 rounded">Div with text (block)</div>
          </div>
        </TestItem>

        <TestItem testId="text-inline-elements" label="span, strong, em - display: inline">
          <p className="text-xs text-gray-500 mb-2">Inline text elements:</p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700">
              Here is some text with <span className="bg-teal-200 px-1 rounded">span (inline)</span> and{' '}
              <strong className="bg-cyan-200 px-1 rounded">strong (inline)</strong> and{' '}
              <em className="bg-sky-200 px-1 rounded">em (inline)</em> elements mixed in.
            </p>
          </div>
        </TestItem>
      </div>

      {/* Text with Padding */}
      <h3 id="textlayout-padding">Text with Padding <span className="subsection-id">textlayout-padding</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="text-padding-0" label="padding: 0px">
          <p
            className="bg-indigo-200 rounded"
            style={{ padding: '0px' }}
          >
            No padding
          </p>
        </TestItem>

        <TestItem testId="text-padding-8" label="padding: 8px">
          <p
            className="bg-indigo-200 rounded"
            style={{ padding: '8px' }}
          >
            Small padding
          </p>
        </TestItem>

        <TestItem testId="text-padding-16" label="padding: 16px">
          <p
            className="bg-indigo-200 rounded"
            style={{ padding: '16px' }}
          >
            Medium padding
          </p>
        </TestItem>

        <TestItem testId="text-padding-32" label="padding: 32px">
          <p
            className="bg-indigo-200 rounded"
            style={{ padding: '32px' }}
          >
            Large padding
          </p>
        </TestItem>
      </div>

      {/* Text with Asymmetric Padding */}
      <h3 id="textlayout-asymmetric-padding">Asymmetric Padding <span className="subsection-id">textlayout-asymmetric-padding</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="text-padding-top-heavy" label="padding: 24px 16px 8px 16px">
          <p
            className="bg-violet-200 rounded"
            style={{ paddingTop: '24px', paddingBottom: '8px', paddingLeft: '16px', paddingRight: '16px' }}
          >
            Top heavy padding
          </p>
        </TestItem>

        <TestItem testId="text-padding-wide-h" label="padding: 8px 32px">
          <p
            className="bg-violet-200 rounded"
            style={{ paddingTop: '8px', paddingBottom: '8px', paddingLeft: '32px', paddingRight: '32px' }}
          >
            Wide horizontal padding
          </p>
        </TestItem>

        <TestItem testId="text-padding-asymmetric" label="padding: 4px 48px 24px 8px">
          <p
            className="bg-violet-200 rounded"
            style={{ paddingTop: '4px', paddingBottom: '24px', paddingLeft: '8px', paddingRight: '48px' }}
          >
            Asymmetric
          </p>
        </TestItem>
      </div>

      {/* Text with Margin */}
      <h3 id="textlayout-margin">Text with Margin <span className="subsection-id">textlayout-margin</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="text-margin-0" label="margin: 0px" className="bg-gray-200 p-1">
          <p
            className="bg-pink-300 p-2 rounded"
            style={{ margin: '0px' }}
          >
            No margin
          </p>
        </TestItem>

        <TestItem testId="text-margin-8" label="margin: 8px" className="bg-gray-200 p-1">
          <p
            className="bg-pink-300 p-2 rounded"
            style={{ margin: '8px' }}
          >
            8px margin
          </p>
        </TestItem>

        <TestItem testId="text-margin-16" label="margin: 16px" className="bg-gray-200 p-1">
          <p
            className="bg-pink-300 p-2 rounded"
            style={{ margin: '16px' }}
          >
            16px margin
          </p>
        </TestItem>

        <TestItem testId="text-margin-auto" label="margin: 0 auto" className="bg-gray-200 p-1">
          <p
            className="bg-pink-300 p-2 rounded"
            style={{ marginTop: '0', marginBottom: '16px', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}
          >
            Centered
          </p>
        </TestItem>
      </div>

      {/* Negative Margins */}
      <h3 id="textlayout-negative-margin">Negative Margins <span className="subsection-id">textlayout-negative-margin</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="text-margin-neg-top" label="margin-top: -16px">
          <div className="bg-emerald-100 p-8 rounded relative">
            <p
              className="bg-emerald-400 p-2 rounded text-white"
              style={{ marginTop: '-16px' }}
            >
              Negative top margin (-16px)
            </p>
          </div>
        </TestItem>

        <TestItem testId="text-margin-neg-h" label="margin-left/right: -24px">
          <div className="bg-teal-100 p-8 rounded relative">
            <p
              className="bg-teal-400 p-2 rounded text-white"
              style={{ marginLeft: '-24px', marginRight: '-24px' }}
            >
              Negative horizontal margins
            </p>
          </div>
        </TestItem>
      </div>

      {/* Text with Width Constraints */}
      <h3 id="textlayout-width-constraints">Text Width Constraints <span className="subsection-id">textlayout-width-constraints</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="text-max-width" label="max-width: 300px">
          <p
            className="bg-amber-200 p-3 rounded"
            style={{ maxWidth: '300px' }}
          >
            This paragraph has a max-width of 300px. It won't exceed this width but can be narrower on small screens.
          </p>
        </TestItem>

        <TestItem testId="text-min-width" label="min-width: 250px; width: fit-content">
          <p
            className="bg-orange-200 p-3 rounded"
            style={{ minWidth: '250px', width: 'fit-content' }}
          >
            Min 250px
          </p>
        </TestItem>
      </div>

      {/* Multi-line Text Blocks */}
      <h3 id="textlayout-multiline">Multi-line Text Blocks <span className="subsection-id">textlayout-multiline</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="text-fixed-width-wrap" label="Fixed width: 200px with long text">
          <p
            data-testid="text-fixed-width-wrap"
            className="bg-rose-200 p-4 rounded"
            style={{ width: '200px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </TestItem>

        <TestItem testId="text-fixed-size-clipped" label="Fixed size: 200x80px (clipped)">
          <p
            className="bg-red-200 p-4 rounded"
            style={{ width: '200px', height: '80px', overflow: 'hidden' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </TestItem>
      </div>

      {/* Text in Flex Context */}
      <h3 id="textlayout-flex">Text in Flex Context <span className="subsection-id">textlayout-flex</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="text-flex-grow" label="Text with flex: 1 (grows)">
          <div
            className="bg-gray-100 p-4 rounded"
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div className="w-10 h-10 bg-blue-500 rounded shrink-0" />
            <p className="bg-blue-200 p-2 rounded flex-1">
              Flex child text that grows to fill space
            </p>
          </div>
        </TestItem>

        <TestItem testId="text-flex-row" label="Multiple text elements in flex row">
          <div
            className="bg-gray-100 p-4 rounded"
            style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
          >
            <p className="bg-green-200 p-2 rounded">Short</p>
            <p className="bg-green-300 p-2 rounded">Medium length text</p>
            <p className="bg-green-400 p-2 rounded">Long text content here</p>
          </div>
        </TestItem>
      </div>
    </section>
  )
}

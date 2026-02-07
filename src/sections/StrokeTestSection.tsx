/**
 * Stroke Section Test Cases
 * Tests: border colors, widths, styles, positions, individual sides
 */
import { TestItem } from '../TestItem'

export function StrokeTestSection() {
  return (
    <section id="stroke" className="test-section">
      <h2>Stroke Section Tests</h2>

      {/* Border Colors */}
      <h3 id="stroke-colors">Border Colors <span className="subsection-id">stroke-colors</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <TestItem testId="stroke-color-red" label="#EF4444 (red)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-color-red"
              className="w-16 h-16 rounded bg-white"
              style={{ border: '2px solid #EF4444' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-color-green" label="#22C55E (green)">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded bg-white"
              style={{ border: '2px solid #22C55E' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-color-blue" label="#3B82F6 (blue)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-color-blue"
              className="w-16 h-16 rounded bg-white"
              style={{ border: '2px solid #3B82F6' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-color-black" label="#000000 (black)">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded bg-white"
              style={{ border: '2px solid #000000' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-color-gray" label="#9CA3AF (gray)">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded bg-white"
              style={{ border: '2px solid #9CA3AF' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-color-white" label="#FFFFFF (white)">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded bg-gray-100"
              style={{ border: '2px solid #FFFFFF' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Border Widths */}
      <h3 id="stroke-widths">Border Widths <span className="subsection-id">stroke-widths</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-5">
        <TestItem testId="stroke-1px" label="1px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-1px"
              className="w-16 h-16 rounded bg-white"
              style={{ border: '1px solid #6366F1' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-2px" label="2px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-2px"
              className="w-16 h-16 rounded bg-white"
              style={{ border: '2px solid #6366F1' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-4px" label="4px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-4px"
              className="w-16 h-16 rounded bg-white"
              style={{ border: '4px solid #6366F1' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-8px" label="8px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-8px"
              className="w-16 h-16 rounded bg-white"
              style={{ border: '8px solid #6366F1' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-12px" label="12px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-12px"
              className="w-16 h-16 rounded bg-white"
              style={{ border: '12px solid #6366F1' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Border Styles */}
      <h3 id="stroke-styles">Border Styles <span className="subsection-id">stroke-styles</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="stroke-solid" label="solid">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-solid"
              className="w-24 h-16 rounded bg-white"
              style={{ border: '3px solid #F59E0B' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-dashed" label="dashed">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-dashed"
              className="w-24 h-16 rounded bg-white"
              style={{ border: '3px dashed #F59E0B' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-dotted" label="dotted">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-dotted"
              className="w-24 h-16 rounded bg-white"
              style={{ border: '3px dotted #F59E0B' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Border with Opacity */}
      <h3 id="stroke-opacity">Border with Opacity <span className="subsection-id">stroke-opacity</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="stroke-opacity-100" label="100% opacity">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded bg-white"
              style={{ border: '3px solid rgba(239, 68, 68, 1)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-opacity-75" label="75% opacity">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded bg-white"
              style={{ border: '3px solid rgba(239, 68, 68, 0.75)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-opacity-50" label="50% opacity">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-24">
            <div
              data-testid="stroke-opacity-50"
              className="w-16 h-16 rounded bg-white"
              style={{ border: '3px solid rgba(239, 68, 68, 0.5)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-opacity-25" label="25% opacity">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded bg-white"
              style={{ border: '3px solid rgba(239, 68, 68, 0.25)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Individual Sides */}
      <h3 id="stroke-individual">Individual Border Sides <span className="subsection-id">stroke-individual</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="stroke-border-top-only" label="border-top only">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-border-top-only"
              className="w-16 h-16 bg-gray-100"
              style={{ borderTop: '4px solid #10B981' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-border-right-only" label="border-right only">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-border-right-only"
              className="w-16 h-16 bg-gray-100"
              style={{ borderRight: '4px solid #10B981' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-border-bottom-only" label="border-bottom only">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-border-bottom-only"
              className="w-16 h-16 bg-gray-100"
              style={{ borderBottom: '4px solid #10B981' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-border-left-only" label="border-left only">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-border-left-only"
              className="w-16 h-16 bg-gray-100"
              style={{ borderLeft: '4px solid #10B981' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Mixed Side Widths */}
      <h3 id="stroke-mixed">Mixed Border Widths <span className="subsection-id">stroke-mixed</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="stroke-mixed-2-4-6-8" label="2px 4px 6px 8px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-mixed-2-4-6-8"
              className="w-20 h-16 bg-white"
              style={{
                borderTop: '2px solid #8B5CF6',
                borderRight: '4px solid #8B5CF6',
                borderBottom: '6px solid #8B5CF6',
                borderLeft: '8px solid #8B5CF6',
              }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-top-bottom-only" label="top/bottom only">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-top-bottom-only"
              className="w-20 h-16 bg-white"
              style={{
                borderTop: '4px solid #EC4899',
                borderBottom: '4px solid #EC4899',
                borderLeft: '0',
                borderRight: '0',
              }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-left-right-only" label="left/right only">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-left-right-only"
              className="w-20 h-16 bg-white"
              style={{
                borderTop: '0',
                borderBottom: '0',
                borderLeft: '4px solid #06B6D4',
                borderRight: '4px solid #06B6D4',
              }}
            />
          </div>
        </TestItem>
      </div>

      {/* Border Position Simulation */}
      <h3 id="stroke-position">Border Position (Inside/Center/Outside) <span className="subsection-id">stroke-position</span></h3>
      <p className="text-sm text-gray-500 mb-3">
        CSS border is always "inside" by default. Center/outside can be simulated with box-shadow or outline.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="stroke-inside" label="Inside (border)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-20 h-16 bg-blue-200 rounded"
              style={{ border: '4px solid #2563EB', boxSizing: 'border-box' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-center" label="Center (box-shadow)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-20 h-16 bg-green-200 rounded"
              style={{ boxShadow: 'inset 0 0 0 2px #16A34A, 0 0 0 2px #16A34A' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-outside" label="Outside (outline)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-20 h-16 bg-purple-200 rounded"
              style={{ outline: '4px solid #9333EA', outlineOffset: '0' }}
            />
          </div>
        </TestItem>
      </div>

      {/* No Border (for testing "Add Stroke" flow) */}
      <h3 id="stroke-none">No Border (Add Stroke Test) <span className="subsection-id">stroke-none</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="stroke-none-implicit" label="No border set">
          <div className="flex items-center justify-center h-24">
            <div data-testid="stroke-none-implicit" className="w-20 h-16 bg-amber-200 rounded" />
          </div>
        </TestItem>

        <TestItem testId="stroke-none-explicit" label="border: none">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-none-explicit"
              className="w-20 h-16 bg-rose-200 rounded"
              style={{ border: 'none' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Border with Border Radius */}
      <h3 id="stroke-with-radius">Border with Border Radius <span className="subsection-id">stroke-with-radius</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="stroke-radius-0" label="radius: 0">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-white"
              style={{ border: '3px solid #F97316', borderRadius: '0' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-radius-8" label="radius: 8px">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-white"
              style={{ border: '3px solid #F97316', borderRadius: '8px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-radius-16" label="radius: 16px">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-white"
              style={{ border: '3px solid #F97316', borderRadius: '16px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-radius-full" label="radius: full">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-white"
              style={{ border: '3px solid #F97316', borderRadius: '9999px' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Tailwind Border Classes */}
      <h3 id="stroke-tailwind">Tailwind Border Classes <span className="subsection-id">stroke-tailwind</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="stroke-tw-1" label="border (1px)">
          <div className="flex items-center justify-center h-24">
            <div className="w-16 h-16 bg-white border border-gray-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="stroke-tw-2" label="border-2">
          <div className="flex items-center justify-center h-24">
            <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="stroke-tw-4" label="border-4">
          <div className="flex items-center justify-center h-24">
            <div className="w-16 h-16 bg-white border-4 border-gray-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="stroke-tw-8" label="border-8">
          <div className="flex items-center justify-center h-24">
            <div className="w-16 h-16 bg-white border-8 border-gray-300 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Stroke Visibility */}
      <h3 id="stroke-visibility">Stroke Visibility <span className="subsection-id">stroke-visibility</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="stroke-visible" label="visibility: visible">
          <p className="text-xs text-gray-500 mb-2">Visible stroke:</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center">
            <div
              data-testid="stroke-visible"
              className="w-20 h-16 bg-white rounded"
              style={{ border: '3px solid #DC2626', visibility: 'visible' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-hidden" label="visibility: hidden">
          <p className="text-xs text-gray-500 mb-2">Hidden stroke (element hidden):</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-400 rounded" />
            <div
              data-testid="stroke-hidden"
              className="w-20 h-16 bg-white rounded"
              style={{ border: '3px solid #DC2626', visibility: 'hidden' }}
            />
            <div className="w-12 h-12 bg-gray-400 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Mutation Test Cases */}
      <h3 id="stroke-mutation">Mutation Test Cases <span className="subsection-id">stroke-mutation</span></h3>
      <p className="text-sm text-gray-500 mb-3">
        Test elements for verifying stroke mutations via the design panel.
      </p>

      {/* Partial Border Elements (for testing adding sides) */}
      <h4 className="text-sm font-medium text-gray-700 mb-2">Partial Borders (for adding sides)</h4>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="stroke-mutation-top-only-green" label="Top only (green)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-mutation-top-only-green"
              className="w-16 h-16 bg-gray-100"
              style={{ borderTop: '4px solid #10B981' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-mutation-left-only-blue" label="Left only (blue)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-mutation-left-only-blue"
              className="w-16 h-16 bg-gray-100"
              style={{ borderLeft: '4px solid #3B82F6' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-mutation-bottom-only-purple" label="Bottom only (purple)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-mutation-bottom-only-purple"
              className="w-16 h-16 bg-gray-100"
              style={{ borderBottom: '4px solid #8B5CF6' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-mutation-right-only-orange" label="Right only (orange)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-mutation-right-only-orange"
              className="w-16 h-16 bg-gray-100"
              style={{ borderRight: '4px solid #F97316' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Uniform Border Elements (for testing weight/color/style changes) */}
      <h4 className="text-sm font-medium text-gray-700 mb-2 mt-4">Uniform Borders (for weight/color/style changes)</h4>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="stroke-mutation-uniform-red" label="Uniform red (2px solid)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-mutation-uniform-red"
              className="w-20 h-16 bg-white"
              style={{ border: '2px solid #EF4444' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-mutation-uniform-blue-4px" label="Uniform blue (4px solid)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-mutation-uniform-blue-4px"
              className="w-20 h-16 bg-white"
              style={{ border: '4px solid #3B82F6' }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-mutation-dashed-green" label="Dashed green (3px)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="stroke-mutation-dashed-green"
              className="w-20 h-16 bg-white"
              style={{ border: '3px dashed #22C55E' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Complete Element for Cross-Section Testing */}
      <h4 className="text-sm font-medium text-gray-700 mb-2 mt-4">Complete Element (cross-section stability)</h4>
      <div className="test-grid grid-cols-1">
        <TestItem testId="stroke-mutation-complete" label="Complete element with multiple properties">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="stroke-mutation-complete"
              className="w-20 h-16"
              style={{
                // Stroke: top-only green border
                borderTop: '4px solid #10B981',
                // Appearance
                opacity: 0.9,
                borderRadius: '8px',
                // Fill
                backgroundColor: '#FEF3C7',
                // Effects
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                // Layout
                display: 'flex',
                padding: '8px',
              }}
            />
          </div>
        </TestItem>
      </div>

      {/* Stroke Position Test Elements */}
      <h4 className="text-sm font-medium text-gray-700 mb-2 mt-4">Stroke Positions (for position preservation tests)</h4>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="stroke-mutation-inside-position" label="Inside stroke (border)">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="stroke-mutation-inside-position"
              className="w-16 h-16 bg-gray-100"
              style={{
                border: '4px solid #10B981',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-mutation-outside-position" label="Outside stroke (outline)">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="stroke-mutation-outside-position"
              className="w-16 h-16 bg-gray-100"
              style={{
                outline: '4px solid #3B82F6',
                outlineOffset: '0px',
              }}
            />
          </div>
        </TestItem>

        <TestItem testId="stroke-mutation-center-position" label="Center stroke (box-shadow)">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="stroke-mutation-center-position"
              className="w-16 h-16 bg-gray-100"
              style={{
                boxShadow: 'inset 0 0 0 2px #EF4444, 0 0 0 2px #EF4444',
              }}
            />
          </div>
        </TestItem>
      </div>
    </section>
  )
}

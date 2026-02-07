/**
 * Effects Section Test Cases
 * Tests: drop shadows, inner shadows, blur effects, Tailwind presets, stacked effects
 */
import { TestItem } from '../TestItem'

export function EffectsTestSection() {
  return (
    <section id="effects" className="test-section">
      <h2>Effects Section Tests</h2>

      {/* Tailwind Shadow Presets */}
      <h3 id="effects-tailwind">Tailwind Shadow Presets <span className="subsection-id">effects-tailwind</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        <TestItem testId="shadow-sm" label="shadow-sm">
          <div className="flex items-center justify-center h-28">
            <div data-testid="shadow-sm" className="w-16 h-16 bg-white rounded shadow-sm" />
          </div>
        </TestItem>

        <TestItem testId="shadow-base" label="shadow">
          <div className="flex items-center justify-center h-28">
            <div data-testid="shadow-base" className="w-16 h-16 bg-white rounded shadow" />
          </div>
        </TestItem>

        <TestItem testId="shadow-md" label="shadow-md">
          <div className="flex items-center justify-center h-28">
            <div data-testid="shadow-md" className="w-16 h-16 bg-white rounded shadow-md" />
          </div>
        </TestItem>

        <TestItem testId="shadow-lg" label="shadow-lg">
          <div className="flex items-center justify-center h-28">
            <div data-testid="shadow-lg" className="w-16 h-16 bg-white rounded shadow-lg" />
          </div>
        </TestItem>

        <TestItem testId="shadow-xl" label="shadow-xl">
          <div className="flex items-center justify-center h-28">
            <div data-testid="shadow-xl" className="w-16 h-16 bg-white rounded shadow-xl" />
          </div>
        </TestItem>

        <TestItem testId="shadow-2xl" label="shadow-2xl">
          <div className="flex items-center justify-center h-28">
            <div data-testid="shadow-2xl" className="w-16 h-16 bg-white rounded shadow-2xl" />
          </div>
        </TestItem>

        <TestItem testId="shadow-none" label="shadow-none">
          <div className="flex items-center justify-center h-28">
            <div data-testid="shadow-none" className="w-16 h-16 bg-white rounded shadow-none border border-gray-200" />
          </div>
        </TestItem>
      </div>

      {/* Drop Shadows - Custom */}
      <h3 id="effects-drop-shadow">Drop Shadows (Custom box-shadow) <span className="subsection-id">effects-drop-shadow</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TestItem testId="shadow-subtle" label="0 4px 6px (subtle)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-20 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-medium" label="0 10px 15px (medium)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-20 h-16 bg-white rounded"
              style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-heavy" label="0 25px 50px (heavy)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-20 h-16 bg-white rounded"
              style={{ boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Shadow Offset Directions */}
      <h3 id="effects-shadow-offset">Shadow Offset Directions <span className="subsection-id">effects-shadow-offset</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="shadow-offset-down" label="Y: 8px (down)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-offset-up" label="Y: -8px (up)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 -8px 16px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-offset-right" label="X: 8px (right)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '8px 0 16px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-offset-left" label="X: -8px (left)">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '-8px 0 16px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Shadow Blur Values */}
      <h3 id="effects-shadow-blur">Shadow Blur Values <span className="subsection-id">effects-shadow-blur</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-5">
        <TestItem testId="shadow-blur-0" label="blur: 0">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="shadow-blur-0"
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 0 rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-blur-4" label="blur: 4px">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="shadow-blur-4"
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-blur-8" label="blur: 8px">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-blur-16" label="blur: 16px">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="shadow-blur-16"
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-blur-32" label="blur: 32px">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 32px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Shadow Spread Values */}
      <h3 id="effects-shadow-spread">Shadow Spread Values <span className="subsection-id">effects-shadow-spread</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="shadow-spread-neg4" label="spread: -4px">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="shadow-spread-neg4"
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 8px -4px rgba(0, 0, 0, 0.5)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-spread-0" label="spread: 0">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 8px 0px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-spread-4" label="spread: 4px">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="shadow-spread-4"
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 8px 4px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-spread-8" label="spread: 8px">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 4px 8px 8px rgba(0, 0, 0, 0.15)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Colored Shadows */}
      <h3 id="effects-colored-shadow">Colored Shadows <span className="subsection-id">effects-colored-shadow</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="shadow-color-red" label="Red shadow">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="shadow-color-red"
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 8px 24px rgba(239, 68, 68, 0.4)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-color-blue" label="Blue shadow">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="shadow-color-blue"
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-color-green" label="Green shadow">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="shadow-color-purple" label="Purple shadow">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-white rounded"
              style={{ boxShadow: '0 8px 24px rgba(168, 85, 247, 0.4)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Inner Shadows */}
      <h3 id="effects-inner-shadow">Inner Shadows (inset) <span className="subsection-id">effects-inner-shadow</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="inner-shadow-subtle" label="inset subtle">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="inner-shadow-subtle"
              className="w-20 h-16 bg-gray-100 rounded"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="inner-shadow-medium" label="inset medium">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="inner-shadow-medium"
              className="w-20 h-16 bg-gray-100 rounded"
              style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="inner-shadow-heavy" label="inset heavy">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="inner-shadow-heavy"
              className="w-20 h-16 bg-gray-100 rounded"
              style={{ boxShadow: 'inset 0 8px 16px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Layer Blur (filter: blur) */}
      <h3 id="effects-layer-blur">Layer Blur (filter: blur) <span className="subsection-id">effects-layer-blur</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-5">
        <TestItem testId="blur-0" label="blur(0)">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="blur-0"
              className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded"
              style={{ filter: 'blur(0px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="blur-2" label="blur(2px)">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="blur-2"
              className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded"
              style={{ filter: 'blur(2px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="blur-4" label="blur(4px)">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="blur-4"
              className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded"
              style={{ filter: 'blur(4px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="blur-8" label="blur(8px)">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="blur-8"
              className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded"
              style={{ filter: 'blur(8px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="blur-16" label="blur(16px)">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="blur-16"
              className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded"
              style={{ filter: 'blur(16px)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Background Blur (backdrop-filter) */}
      <h3 id="effects-backdrop-blur">Background Blur (backdrop-filter) <span className="subsection-id">effects-backdrop-blur</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="backdrop-blur-4" label="backdrop-blur-4: blur(4px)">
          <div className="h-32 relative overflow-hidden rounded">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                data-testid="backdrop-blur-4"
                className="w-24 h-20 bg-white/30 rounded-lg border border-white/50"
                style={{ backdropFilter: 'blur(4px)' }}
              />
            </div>
          </div>
        </TestItem>

        <TestItem testId="backdrop-blur-8" label="backdrop-blur-8: blur(8px)">
          <div className="h-32 relative overflow-hidden rounded">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                data-testid="backdrop-blur-8"
                className="w-24 h-20 bg-white/30 rounded-lg border border-white/50"
                style={{ backdropFilter: 'blur(8px)' }}
              />
            </div>
          </div>
        </TestItem>

        <TestItem testId="backdrop-blur-16" label="backdrop-blur-16: blur(16px)">
          <div className="h-32 relative overflow-hidden rounded">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                data-testid="backdrop-blur-16"
                className="w-24 h-20 bg-white/30 rounded-lg border border-white/50"
                style={{ backdropFilter: 'blur(16px)' }}
              />
            </div>
          </div>
        </TestItem>
      </div>

      {/* Multiple/Stacked Effects */}
      <h3 id="effects-stacked">Multiple/Stacked Effects <span className="subsection-id">effects-stacked</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="stacked-two-shadows" label="Two drop shadows">
          <div className="flex items-center justify-center h-32">
            <div
              data-testid="stacked-two-shadows"
              className="w-24 h-20 bg-white rounded-lg"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.15)',
              }}
            />
          </div>
        </TestItem>

        <TestItem testId="stacked-drop-inner" label="Drop + inner shadow">
          <div className="flex items-center justify-center h-32">
            <div
              data-testid="stacked-drop-inner"
              className="w-24 h-20 bg-white rounded-lg"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </TestItem>

        <TestItem testId="stacked-shadow-blur" label="Shadow + layer blur">
          <div className="flex items-center justify-center h-32">
            <div
              className="w-24 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"
              style={{
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.5)',
                filter: 'blur(1px)',
              }}
            />
          </div>
        </TestItem>

        <TestItem testId="stacked-4-layers" label="4 layered shadows">
          <div className="flex items-center justify-center h-32">
            <div
              className="w-24 h-20 bg-white rounded-lg"
              style={{
                boxShadow: `
                  0 2px 4px rgba(0,0,0,0.05),
                  0 4px 8px rgba(0,0,0,0.1),
                  0 8px 16px rgba(0,0,0,0.1),
                  0 16px 32px rgba(0,0,0,0.1)
                `,
              }}
            />
          </div>
        </TestItem>
      </div>

      {/* No Effects (for testing "Add Effect" flow) */}
      <h3 id="effects-none">No Effects (Add Effect Test) <span className="subsection-id">effects-none</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="effects-none-implicit" label="No shadow/blur set">
          <div className="flex items-center justify-center h-28">
            <div className="w-20 h-16 bg-gray-200 rounded" />
          </div>
        </TestItem>

        <TestItem testId="effects-none-explicit" label="box-shadow: none">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="effects-none-explicit"
              className="w-20 h-16 bg-gray-200 rounded"
              style={{ boxShadow: 'none', filter: 'none' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Effect Visibility Toggle */}
      <h3 id="effects-visibility">Effect Visibility <span className="subsection-id">effects-visibility</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="effects-visible" label="visibility: visible">
          <p className="text-xs text-gray-500 mb-2">Visible effect:</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center">
            <div
              data-testid="effects-visible"
              className="w-20 h-16 bg-white rounded"
              style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', visibility: 'visible' }}
            />
          </div>
        </TestItem>

        <TestItem testId="effects-hidden" label="visibility: hidden">
          <p className="text-xs text-gray-500 mb-2">Hidden effect (element hidden):</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-400 rounded" />
            <div
              data-testid="effects-hidden"
              className="w-20 h-16 bg-white rounded"
              style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', visibility: 'hidden' }}
            />
            <div className="w-12 h-12 bg-gray-400 rounded" />
          </div>
        </TestItem>
      </div>
    </section>
  )
}

/**
 * Appearance Section Test Cases
 * Tests: opacity, border-radius (uniform and individual corners), visibility
 */
import { TestItem } from '../TestItem'

export function AppearanceTestSection() {
  return (
    <section id="appearance" className="test-section">
      <h2>Appearance Section Tests</h2>

      {/* Opacity Levels */}
      <h3 id="appearance-opacity">Opacity Levels <span className="subsection-id">appearance-opacity</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-5">
        <TestItem testId="opacity-100" label="opacity: 100%">
          <div className="bg-gray-200 flex items-center justify-center h-24">
            <div
              data-testid="opacity-100"
              className="w-16 h-16 bg-blue-500 rounded"
              style={{ opacity: 1 }}
            />
          </div>
        </TestItem>

        <TestItem testId="opacity-75" label="opacity: 75%">
          <div className="bg-gray-200 flex items-center justify-center h-24">
            <div
              data-testid="opacity-75"
              className="w-16 h-16 bg-blue-500 rounded"
              style={{ opacity: 0.75 }}
            />
          </div>
        </TestItem>

        <TestItem testId="opacity-50" label="opacity: 50%">
          <div className="bg-gray-200 flex items-center justify-center h-24">
            <div
              data-testid="opacity-50"
              className="w-16 h-16 bg-blue-500 rounded"
              style={{ opacity: 0.5 }}
            />
          </div>
        </TestItem>

        <TestItem testId="opacity-25" label="opacity: 25%">
          <div className="bg-gray-200 flex items-center justify-center h-24">
            <div
              data-testid="opacity-25"
              className="w-16 h-16 bg-blue-500 rounded"
              style={{ opacity: 0.25 }}
            />
          </div>
        </TestItem>

        <TestItem testId="opacity-0" label="opacity: 0%">
          <div className="bg-gray-200 flex items-center justify-center h-24">
            <div
              data-testid="opacity-0"
              className="w-16 h-16 bg-blue-500 rounded"
              style={{ opacity: 0 }}
            />
          </div>
        </TestItem>
      </div>

      {/* Fine-grained Opacity */}
      <h3 id="appearance-opacity-fine">Fine-grained Opacity Values <span className="subsection-id">appearance-opacity-fine</span></h3>
      <div className="test-grid grid-cols-3 md:grid-cols-6">
        {[0.1, 0.2, 0.3, 0.4, 0.6, 0.8].map((op) => (
          <TestItem key={op} testId={`opacity-${Math.round(op * 100)}`} label={`${Math.round(op * 100)}%`}>
            <div className="bg-gray-200 flex items-center justify-center h-20">
              <div
                className="w-12 h-12 bg-purple-500 rounded"
                style={{ opacity: op }}
              />
            </div>
          </TestItem>
        ))}
      </div>

      {/* Uniform Border Radius */}
      <h3 id="appearance-radius-uniform">Uniform Border Radius <span className="subsection-id">appearance-radius-uniform</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-5">
        <TestItem testId="radius-0" label="radius: 0px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-0"
              className="w-16 h-16 bg-green-500"
              style={{ borderRadius: '0px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-4" label="radius: 4px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-4"
              className="w-16 h-16 bg-green-500"
              style={{ borderRadius: '4px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-8" label="radius: 8px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-8"
              className="w-16 h-16 bg-green-500"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-16" label="radius: 16px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-16"
              className="w-16 h-16 bg-green-500"
              style={{ borderRadius: '16px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-full" label="radius: full (circle)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-full"
              className="w-16 h-16 bg-green-500"
              style={{ borderRadius: '9999px' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Individual Corner Radius */}
      <h3 id="appearance-radius-individual">Individual Corner Radius <span className="subsection-id">appearance-radius-individual</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="radius-tl-16" label="top-left: 16px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-tl-16"
              className="w-16 h-16 bg-yellow-500"
              style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '0', borderBottomRightRadius: '0', borderBottomLeftRadius: '0' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-tr-16" label="top-right: 16px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-tr-16"
              className="w-16 h-16 bg-yellow-500"
              style={{ borderTopLeftRadius: '0', borderTopRightRadius: '16px', borderBottomRightRadius: '0', borderBottomLeftRadius: '0' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-br-16" label="bottom-right: 16px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-br-16"
              className="w-16 h-16 bg-yellow-500"
              style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomRightRadius: '16px', borderBottomLeftRadius: '0' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-bl-16" label="bottom-left: 16px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-bl-16"
              className="w-16 h-16 bg-yellow-500"
              style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomRightRadius: '0', borderBottomLeftRadius: '16px' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Mixed Corner Radius */}
      <h3 id="appearance-radius-mixed">Mixed Corner Radius Values <span className="subsection-id">appearance-radius-mixed</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="radius-diagonal" label="16px 0 16px 0 (diagonal)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-diagonal"
              className="w-20 h-16 bg-orange-500"
              style={{ borderRadius: '16px 0 16px 0' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-top-rounded" label="24px 24px 0 0 (top rounded)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-top-rounded"
              className="w-20 h-16 bg-orange-500"
              style={{ borderRadius: '24px 24px 0 0' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-all-different" label="4px 16px 32px 8px">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-all-different"
              className="w-20 h-16 bg-orange-500"
              style={{ borderRadius: '4px 16px 32px 8px' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Large Border Radius */}
      <h3 id="appearance-radius-large">Large Border Radius Values <span className="subsection-id">appearance-radius-large</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="radius-24" label="radius: 24px">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-24 h-16 bg-pink-500"
              style={{ borderRadius: '24px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-32" label="radius: 32px">
          <div className="flex items-center justify-center h-28">
            <div
              className="w-24 h-16 bg-pink-500"
              style={{ borderRadius: '32px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-48" label="radius: 48px">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="radius-48"
              className="w-24 h-16 bg-pink-500"
              style={{ borderRadius: '48px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-50-percent" label="radius: 50%">
          <div className="flex items-center justify-center h-28">
            <div
              data-testid="radius-50-percent"
              className="w-24 h-24 bg-pink-500"
              style={{ borderRadius: '50%' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Visibility States */}
      <h3 id="appearance-visibility">Visibility States <span className="subsection-id">appearance-visibility</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="visibility-visible" label="visibility: visible">
          <p className="text-xs text-gray-500 mb-2">Visible:</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center">
            <div
              data-testid="visibility-visible"
              className="w-16 h-16 bg-red-500 rounded"
              style={{ visibility: 'visible' }}
            />
          </div>
        </TestItem>

        <TestItem testId="visibility-hidden" label="visibility: hidden">
          <p className="text-xs text-gray-500 mb-2">Hidden (takes space):</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-400 rounded" />
            <div
              data-testid="visibility-hidden"
              className="w-16 h-16 bg-red-500 rounded"
              style={{ visibility: 'hidden' }}
            />
            <div className="w-12 h-12 bg-gray-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="display-none" label="display: none">
          <p className="text-xs text-gray-500 mb-2">Display none (no space):</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-400 rounded" />
            <div
              className="w-16 h-16 bg-red-500 rounded"
              style={{ display: 'none' }}
            />
            <div className="w-12 h-12 bg-gray-400 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Combined Opacity and Radius */}
      <h3 id="appearance-combined">Combined Opacity and Border Radius <span className="subsection-id">appearance-combined</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="combined-90-4" label="90%, 4px">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-indigo-500"
              style={{ opacity: 0.9, borderRadius: '4px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="combined-70-8" label="70%, 8px">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-indigo-500"
              style={{ opacity: 0.7, borderRadius: '8px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="combined-50-16" label="50%, 16px">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-indigo-500"
              style={{ opacity: 0.5, borderRadius: '16px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="combined-30-full" label="30%, full">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-28">
            <div
              className="w-16 h-16 bg-indigo-500"
              style={{ opacity: 0.3, borderRadius: '9999px' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Border Radius with Different Units */}
      <h3 id="appearance-radius-units">Border Radius with Different Units <span className="subsection-id">appearance-radius-units</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="radius-1rem" label="1rem">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-teal-500"
              style={{ borderRadius: '1rem' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-05em" label="0.5em">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-teal-500"
              style={{ borderRadius: '0.5em' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-25-percent" label="25%">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-teal-500"
              style={{ borderRadius: '25%' }}
            />
          </div>
        </TestItem>

        <TestItem testId="radius-elliptical" label="50% / 25% (elliptical)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="radius-elliptical"
              className="w-20 h-16 bg-teal-500"
              style={{ borderRadius: '50% / 25%' }}
            />
          </div>
        </TestItem>
      </div>
    </section>
  )
}

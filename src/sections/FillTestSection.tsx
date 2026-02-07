/**
 * Fill Section Test Cases
 * Tests: solid backgrounds, transparent, opacity, gradients, no-fill scenarios
 */
import { TestItem } from '../TestItem'

export function FillTestSection() {
  return (
    <section id="fill" className="test-section">
      <h2>Fill Section Tests</h2>

      {/* Solid Colors */}
      <h3 id="fill-solid">Solid Background Colors <span className="subsection-id">fill-solid</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <TestItem testId="fill-red" label="#FF0000">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-red"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#FF0000' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-green" label="#00FF00">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-green"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#00FF00' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-blue" label="#0000FF">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-blue"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#0000FF' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-yellow" label="#FFFF00">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#FFFF00' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-magenta" label="#FF00FF">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#FF00FF' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-cyan" label="#00FFFF">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#00FFFF' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Neutral Colors */}
      <h3 id="fill-neutral">Neutral / Grayscale Colors <span className="subsection-id">fill-neutral</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-5">
        <TestItem testId="fill-white" label="#FFFFFF (white)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-white"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #e5e5e5' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-light-gray" label="#E5E5E5">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-light-gray"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#E5E5E5' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-gray" label="#808080 (gray)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-gray"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#808080' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-dark-gray" label="#404040">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-dark-gray"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#404040' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-black" label="#000000 (black)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-black"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: '#000000' }}
            />
          </div>
        </TestItem>
      </div>

      {/* RGB/RGBA Colors */}
      <h3 id="fill-rgb">RGB/RGBA Color Formats <span className="subsection-id">fill-rgb</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="fill-rgb-solid" label="rgb(139, 92, 246)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-rgb-solid"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'rgb(139, 92, 246)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-rgba-half" label="rgba(..., 0.5)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-rgba-half"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'rgba(139, 92, 246, 0.5)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-hsl" label="hsl(262, 83%, 58%)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-hsl"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'hsl(262, 83%, 58%)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-hsla" label="hsla(..., 0.7)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-hsla"
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'hsla(262, 83%, 58%, 0.7)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Background Opacity */}
      <h3 id="fill-opacity">Background with Opacity <span className="subsection-id">fill-opacity</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-5">
        <TestItem testId="fill-opacity-100" label="100% opacity">
          <div className="bg-checkered flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'rgba(59, 130, 246, 1)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-opacity-75" label="75% opacity">
          <div className="bg-checkered flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.75)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-opacity-50" label="50% opacity">
          <div className="bg-checkered flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.5)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-opacity-25" label="25% opacity">
          <div className="bg-checkered flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.25)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-opacity-10" label="10% opacity">
          <div className="bg-checkered flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Transparent / No Fill */}
      <h3 id="fill-transparent">Transparent / No Background <span className="subsection-id">fill-transparent</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="fill-transparent" label="background: transparent">
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center h-24">
            <div
              data-testid="fill-transparent"
              className="w-16 h-16 rounded border-2 border-gray-400"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-rgba-0" label="rgba(0, 0, 0, 0)">
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center h-24">
            <div
              data-testid="fill-rgba-0"
              className="w-16 h-16 rounded border-2 border-gray-400"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-none" label="No background set">
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center h-24">
            <div data-testid="fill-none" className="w-16 h-16 rounded border-2 border-gray-400" />
          </div>
        </TestItem>
      </div>

      {/* CSS Variables */}
      <h3 id="fill-css-vars">CSS Variables <span className="subsection-id">fill-css-vars</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="fill-css-var" label="var(--custom-color)">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: 'var(--custom-color)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-tw-var" label="Tailwind variable fallback">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-20 h-16 rounded bg-blue-500"
              style={{ backgroundColor: 'var(--tw-color-blue-500, #3b82f6)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Tailwind Background Colors */}
      <h3 id="fill-tailwind">Tailwind Background Classes <span className="subsection-id">fill-tailwind</span></h3>
      <div className="test-grid grid-cols-3 md:grid-cols-6">
        <TestItem testId="fill-tw-red" label="bg-red-500">
          <div className="flex items-center justify-center h-20">
            <div className="w-12 h-12 rounded bg-red-500" />
          </div>
        </TestItem>

        <TestItem testId="fill-tw-orange" label="bg-orange-500">
          <div className="flex items-center justify-center h-20">
            <div className="w-12 h-12 rounded bg-orange-500" />
          </div>
        </TestItem>

        <TestItem testId="fill-tw-yellow" label="bg-yellow-500">
          <div className="flex items-center justify-center h-20">
            <div className="w-12 h-12 rounded bg-yellow-500" />
          </div>
        </TestItem>

        <TestItem testId="fill-tw-green" label="bg-green-500">
          <div className="flex items-center justify-center h-20">
            <div className="w-12 h-12 rounded bg-green-500" />
          </div>
        </TestItem>

        <TestItem testId="fill-tw-blue" label="bg-blue-500">
          <div className="flex items-center justify-center h-20">
            <div className="w-12 h-12 rounded bg-blue-500" />
          </div>
        </TestItem>

        <TestItem testId="fill-tw-purple" label="bg-purple-500">
          <div className="flex items-center justify-center h-20">
            <div className="w-12 h-12 rounded bg-purple-500" />
          </div>
        </TestItem>
      </div>

      {/* Gradient Backgrounds */}
      <h3 id="fill-gradients">Gradient Backgrounds <span className="subsection-id">fill-gradients</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="fill-gradient-h" label="linear-gradient (horizontal)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-gradient-h"
              className="w-24 h-16 rounded"
              style={{ background: 'linear-gradient(90deg, #ff6b6b, #feca57)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-gradient-v" label="linear-gradient (vertical)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-gradient-v"
              className="w-24 h-16 rounded"
              style={{ background: 'linear-gradient(180deg, #a29bfe, #6c5ce7)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-gradient-radial" label="radial-gradient">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="fill-gradient-radial"
              className="w-24 h-16 rounded"
              style={{ background: 'radial-gradient(circle, #74b9ff, #0984e3)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-gradient-tw" label="Tailwind gradient">
          <div className="flex items-center justify-center h-24">
            <div data-testid="fill-gradient-tw" className="w-24 h-16 rounded bg-gradient-to-br from-emerald-400 to-cyan-500" />
          </div>
        </TestItem>
      </div>

      {/* Fill with Visibility Toggle */}
      <h3 id="fill-visibility">Fill Visibility States <span className="subsection-id">fill-visibility</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="fill-visible" label="visibility: visible">
          <p className="text-xs text-gray-500 mb-2">Visible fill:</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center">
            <div
              data-testid="fill-visible"
              className="w-20 h-16 rounded"
              style={{ backgroundColor: '#10b981', visibility: 'visible' }}
            />
          </div>
        </TestItem>

        <TestItem testId="fill-hidden" label="visibility: hidden">
          <p className="text-xs text-gray-500 mb-2">Hidden fill (space preserved):</p>
          <div className="bg-gray-100 p-4 rounded h-24 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-400 rounded" />
            <div
              data-testid="fill-hidden"
              className="w-20 h-16 rounded"
              style={{ backgroundColor: '#10b981', visibility: 'hidden' }}
            />
            <div className="w-12 h-12 bg-gray-400 rounded" />
          </div>
        </TestItem>
      </div>
    </section>
  )
}

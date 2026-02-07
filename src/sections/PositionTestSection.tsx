/**
 * Position Section Test Cases
 * Tests: position values, transforms (rotation, scale), alignment contexts
 */
import { TestItem } from '../TestItem'

export function PositionTestSection() {
  return (
    <section id="position" className="test-section">
      <h2>Position Section Tests</h2>

      {/* Position Types */}
      <h3 id="position-types">Position Types <span className="subsection-id">position-types</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <TestItem testId="position-static" label="position: static">
          <div className="w-full h-20 bg-blue-100 relative">
            <div
              data-testid="position-static"
              className="w-12 h-12 bg-blue-500 rounded"
              style={{ position: 'static' }}
            />
          </div>
        </TestItem>

        <TestItem testId="position-relative" label="position: relative; top: 8px; left: 8px">
          <div className="w-full h-20 bg-green-100 relative">
            <div
              data-testid="position-relative"
              className="w-12 h-12 bg-green-500 rounded"
              style={{ position: 'relative', top: '8px', left: '8px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="position-absolute" label="position: absolute; top: 4px; right: 4px">
          <div className="w-full h-20 bg-yellow-100 relative">
            <div
              data-testid="position-absolute"
              className="w-12 h-12 bg-yellow-500 rounded"
              style={{ position: 'absolute', top: '4px', right: '4px' }}
            />
          </div>
        </TestItem>

        <TestItem testId="position-absolute-centered" label="position: absolute; bottom: 4px; left: 50%">
          <div className="w-full h-20 bg-purple-100 relative">
            <div
              data-testid="position-absolute-centered"
              className="w-12 h-12 bg-purple-500 rounded"
              style={{ position: 'absolute', bottom: '4px', left: '50%', transform: 'translateX(-50%)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="position-sticky" label="position: sticky; top: 0">
          <div className="w-full h-20 bg-pink-100 relative overflow-auto">
            <div className="h-40">
              <div
                data-testid="position-sticky"
                className="w-12 h-12 bg-pink-500 rounded"
                style={{ position: 'sticky', top: '0' }}
              />
              <p className="text-xs text-gray-500 mt-2">Scroll me</p>
            </div>
          </div>
        </TestItem>
      </div>

      {/* CSS Transforms - Rotation */}
      <h3 id="position-rotation">Rotation Transforms <span className="subsection-id">position-rotation</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <TestItem testId="rotation-0" label="rotate(0deg)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="rotation-0"
              className="w-16 h-16 bg-red-500 rounded"
              style={{ transform: 'rotate(0deg)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="rotation-45" label="rotate(45deg)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="rotation-45"
              className="w-16 h-16 bg-red-500 rounded"
              style={{ transform: 'rotate(45deg)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="rotation-90" label="rotate(90deg)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="rotation-90"
              className="w-16 h-16 bg-red-500 rounded"
              style={{ transform: 'rotate(90deg)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="rotation-180" label="rotate(180deg)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="rotation-180"
              className="w-16 h-16 bg-red-500 rounded"
              style={{ transform: 'rotate(180deg)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="rotation-neg45" label="rotate(-45deg)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="rotation-neg45"
              className="w-16 h-16 bg-red-500 rounded"
              style={{ transform: 'rotate(-45deg)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="rotation-270" label="rotate(270deg)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="rotation-270"
              className="w-16 h-16 bg-red-500 rounded"
              style={{ transform: 'rotate(270deg)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* CSS Transforms - Scale/Flip */}
      <h3 id="position-scale">Scale & Flip Transforms <span className="subsection-id">position-scale</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="scale-normal" label="scaleX(1) scaleY(1)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="scale-normal"
              className="w-16 h-16 bg-orange-500 rounded flex items-center justify-center text-white font-bold"
              style={{ transform: 'scaleX(1) scaleY(1)' }}
            >
              R
            </div>
          </div>
        </TestItem>

        <TestItem testId="scale-flip-x" label="scaleX(-1) - Flipped H">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="scale-flip-x"
              className="w-16 h-16 bg-orange-500 rounded flex items-center justify-center text-white font-bold"
              style={{ transform: 'scaleX(-1)' }}
            >
              R
            </div>
          </div>
        </TestItem>

        <TestItem testId="scale-flip-y" label="scaleY(-1) - Flipped V">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="scale-flip-y"
              className="w-16 h-16 bg-orange-500 rounded flex items-center justify-center text-white font-bold"
              style={{ transform: 'scaleY(-1)' }}
            >
              R
            </div>
          </div>
        </TestItem>

        <TestItem testId="scale-flip-both" label="scaleX(-1) scaleY(-1)">
          <div className="flex items-center justify-center h-24">
            <div
              data-testid="scale-flip-both"
              className="w-16 h-16 bg-orange-500 rounded flex items-center justify-center text-white font-bold"
              style={{ transform: 'scaleX(-1) scaleY(-1)' }}
            >
              R
            </div>
          </div>
        </TestItem>
      </div>

      {/* Combined Transforms */}
      <h3 id="position-combined">Combined Transforms <span className="subsection-id">position-combined</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-3">
        <TestItem testId="combined-rotate-flipx" label="rotate(45deg) scaleX(-1)">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-teal-500 rounded flex items-center justify-center text-white font-bold"
              style={{ transform: 'rotate(45deg) scaleX(-1)' }}
            >
              R
            </div>
          </div>
        </TestItem>

        <TestItem testId="combined-rotate-flipy" label="rotate(-30deg) scaleY(-1)">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-teal-500 rounded flex items-center justify-center text-white font-bold"
              style={{ transform: 'rotate(-30deg) scaleY(-1)' }}
            >
              R
            </div>
          </div>
        </TestItem>

        <TestItem testId="combined-rotate-flipboth" label="rotate(90deg) scale(-1,-1)">
          <div className="flex items-center justify-center h-24">
            <div
              className="w-16 h-16 bg-teal-500 rounded flex items-center justify-center text-white font-bold"
              style={{ transform: 'rotate(90deg) scaleX(-1) scaleY(-1)' }}
            >
              R
            </div>
          </div>
        </TestItem>
      </div>

      {/* Alignment Context - Flex Containers */}
      <h3 id="position-flex-alignment">Alignment Context - Flex Containers <span className="subsection-id">position-flex-alignment</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="flex-row-container" label="display: flex; flex-direction: row">
          <p className="text-xs text-gray-500 mb-2">Flex row container with 3 children:</p>
          <div
            data-testid="flex-row-container"
            className="bg-indigo-100 p-4 rounded"
            style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
          >
            <div data-testid="flex-row-child-1" className="w-12 h-12 bg-indigo-500 rounded" />
            <div data-testid="flex-row-child-2" className="w-12 h-12 bg-indigo-400 rounded" />
            <div data-testid="flex-row-child-3" className="w-12 h-12 bg-indigo-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="flex-col-container" label="display: flex; flex-direction: column">
          <p className="text-xs text-gray-500 mb-2">Flex column container with 3 children:</p>
          <div
            data-testid="flex-col-container"
            className="bg-violet-100 p-4 rounded"
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            <div data-testid="flex-col-child-1" className="w-full h-8 bg-violet-500 rounded" />
            <div data-testid="flex-col-child-2" className="w-full h-8 bg-violet-400 rounded" />
            <div data-testid="flex-col-child-3" className="w-full h-8 bg-violet-300 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Alignment Context - Grid Containers */}
      <h3 id="position-grid-alignment">Alignment Context - Grid Containers <span className="subsection-id">position-grid-alignment</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="grid-2x2-container" label="display: grid; grid-template-columns: repeat(2, 1fr)">
          <p className="text-xs text-gray-500 mb-2">Grid container 2x2:</p>
          <div
            data-testid="grid-2x2-container"
            className="bg-emerald-100 p-4 rounded"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}
          >
            <div data-testid="grid-2x2-child-1" className="h-12 bg-emerald-500 rounded" />
            <div data-testid="grid-2x2-child-2" className="h-12 bg-emerald-400 rounded" />
            <div data-testid="grid-2x2-child-3" className="h-12 bg-emerald-300 rounded" />
            <div data-testid="grid-2x2-child-4" className="h-12 bg-emerald-200 rounded" />
          </div>
        </TestItem>

        <TestItem testId="grid-3x1-container" label="display: grid; grid-template-columns: repeat(3, 1fr)">
          <p className="text-xs text-gray-500 mb-2">Grid container 3x1:</p>
          <div
            data-testid="grid-3x1-container"
            className="bg-cyan-100 p-4 rounded"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}
          >
            <div data-testid="grid-3x1-child-1" className="h-16 bg-cyan-500 rounded" />
            <div data-testid="grid-3x1-child-2" className="h-16 bg-cyan-400 rounded" />
            <div data-testid="grid-3x1-child-3" className="h-16 bg-cyan-300 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Move Element - Translate Transforms */}
      <h3 id="position-move">Move Element (Translate) <span className="subsection-id">position-move</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <TestItem testId="translate-none" label="translate: none">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-none"
              className="w-12 h-12 bg-blue-500 rounded"
              style={{ transform: 'translate(0, 0)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-x-16" label="translateX(16px)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-x-16"
              className="w-12 h-12 bg-blue-500 rounded"
              style={{ transform: 'translateX(16px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-x-neg16" label="translateX(-16px)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-x-neg16"
              className="w-12 h-12 bg-blue-500 rounded"
              style={{ transform: 'translateX(-16px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-y-16" label="translateY(16px)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-y-16"
              className="w-12 h-12 bg-green-500 rounded"
              style={{ transform: 'translateY(16px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-y-neg16" label="translateY(-16px)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-y-neg16"
              className="w-12 h-12 bg-green-500 rounded"
              style={{ transform: 'translateY(-16px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-xy-16" label="translate(16px, 16px)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-xy-16"
              className="w-12 h-12 bg-purple-500 rounded"
              style={{ transform: 'translate(16px, 16px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-xy-neg" label="translate(-16px, -16px)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-xy-neg"
              className="w-12 h-12 bg-purple-500 rounded"
              style={{ transform: 'translate(-16px, -16px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-percent" label="translate(50%, 50%)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-percent"
              className="w-12 h-12 bg-orange-500 rounded"
              style={{ transform: 'translate(50%, 50%)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Move Element - Large Offsets */}
      <h3 id="position-move-large">Move Element (Large Offsets) <span className="subsection-id">position-move-large</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TestItem testId="translate-x-48" label="translateX(48px)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-x-48"
              className="w-12 h-12 bg-cyan-500 rounded"
              style={{ transform: 'translateX(48px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-y-32" label="translateY(32px)">
          <div className="flex items-center justify-center h-28 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-y-32"
              className="w-12 h-12 bg-cyan-500 rounded"
              style={{ transform: 'translateY(32px)' }}
            />
          </div>
        </TestItem>

        <TestItem testId="translate-combined-rotate" label="translate(24px, 12px) rotate(15deg)">
          <div className="flex items-center justify-center h-24 bg-slate-100 rounded relative">
            <div className="absolute w-4 h-4 bg-slate-300 rounded-full" style={{ top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px' }} />
            <div
              data-testid="translate-combined-rotate"
              className="w-12 h-12 bg-pink-500 rounded"
              style={{ transform: 'translate(24px, 12px) rotate(15deg)' }}
            />
          </div>
        </TestItem>
      </div>

      {/* Elements with Siblings (for alignment context) */}
      <h3 id="position-siblings">Elements with Siblings <span className="subsection-id">position-siblings</span></h3>
      <TestItem testId="block-siblings" label="Block parent with siblingCount: 3">
        <p className="text-xs text-gray-500 mb-2">Block container with multiple block children:</p>
        <div className="bg-gray-100 p-4 rounded">
          <div className="h-8 bg-gray-500 rounded mb-2">First sibling</div>
          <div className="h-8 bg-gray-400 rounded mb-2">Second sibling</div>
          <div className="h-8 bg-gray-300 rounded">Third sibling</div>
        </div>
      </TestItem>
    </section>
  )
}

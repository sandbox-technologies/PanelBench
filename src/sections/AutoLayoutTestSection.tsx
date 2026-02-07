/**
 * Auto Layout Section Test Cases
 * Tests: flex/grid flow, gap, padding, margin, constraints, clip content
 */
import { TestItem } from '../TestItem'

export function AutoLayoutTestSection() {
  return (
    <section id="autolayout" className="test-section">
      <h2>Auto Layout Section Tests</h2>

      {/* Flow Types */}
      <h3 id="autolayout-flow">Flow Types <span className="subsection-id">autolayout-flow</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <TestItem testId="flow-block" label="display: block (freeform)">
          <p className="text-xs text-gray-500 mb-2">Freeform (block):</p>
          <div data-testid="flow-block" className="bg-blue-100 p-4 rounded h-24">
            <div className="w-12 h-12 bg-blue-500 rounded" />
          </div>
        </TestItem>

        <TestItem testId="flow-vertical" label="flex-direction: column">
          <p className="text-xs text-gray-500 mb-2">Vertical (flex-col):</p>
          <div
            data-testid="flow-vertical"
            className="bg-green-100 p-4 rounded"
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            <div className="h-8 bg-green-500 rounded" />
            <div className="h-8 bg-green-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="flow-horizontal" label="flex-direction: row">
          <p className="text-xs text-gray-500 mb-2">Horizontal (flex-row):</p>
          <div
            data-testid="flow-horizontal"
            className="bg-yellow-100 p-4 rounded"
            style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
          >
            <div className="w-12 h-12 bg-yellow-500 rounded" />
            <div className="w-12 h-12 bg-yellow-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="flow-grid" label="display: grid; 2x2">
          <p className="text-xs text-gray-500 mb-2">Grid:</p>
          <div
            data-testid="flow-grid"
            className="bg-purple-100 p-4 rounded"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}
          >
            <div className="h-10 bg-purple-500 rounded" />
            <div className="h-10 bg-purple-400 rounded" />
            <div className="h-10 bg-purple-300 rounded" />
            <div className="h-10 bg-purple-200 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Flex Wrap */}
      <h3 id="autolayout-wrap">Flex Wrap <span className="subsection-id">autolayout-wrap</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="flex-nowrap" label="flex-wrap: nowrap">
          <p className="text-xs text-gray-500 mb-2">No wrap (overflow):</p>
          <div
            data-testid="flex-nowrap"
            className="bg-red-100 p-4 rounded overflow-auto"
            style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'nowrap' }}
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-16 h-12 bg-red-400 rounded shrink-0" />
            ))}
          </div>
        </TestItem>

        <TestItem testId="flex-wrap" label="flex-wrap: wrap">
          <p className="text-xs text-gray-500 mb-2">Wrap enabled:</p>
          <div
            data-testid="flex-wrap"
            className="bg-orange-100 p-4 rounded"
            style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-16 h-12 bg-orange-400 rounded" />
            ))}
          </div>
        </TestItem>
      </div>

      {/* Gap Values */}
      <h3 id="autolayout-gap">Gap Values <span className="subsection-id">autolayout-gap</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="gap-0" label="gap: 0px">
          <div
            data-testid="gap-0"
            className="bg-teal-100 p-2 rounded"
            style={{ display: 'flex', gap: '0px' }}
          >
            <div className="w-8 h-8 bg-teal-500 rounded" />
            <div className="w-8 h-8 bg-teal-400 rounded" />
            <div className="w-8 h-8 bg-teal-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="gap-4" label="gap: 4px">
          <div
            data-testid="gap-4"
            className="bg-teal-100 p-2 rounded"
            style={{ display: 'flex', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-teal-500 rounded" />
            <div className="w-8 h-8 bg-teal-400 rounded" />
            <div className="w-8 h-8 bg-teal-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="gap-16" label="gap: 16px">
          <div
            data-testid="gap-16"
            className="bg-teal-100 p-2 rounded"
            style={{ display: 'flex', gap: '16px' }}
          >
            <div className="w-8 h-8 bg-teal-500 rounded" />
            <div className="w-8 h-8 bg-teal-400 rounded" />
            <div className="w-8 h-8 bg-teal-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="gap-32" label="gap: 32px">
          <div
            data-testid="gap-32"
            className="bg-teal-100 p-2 rounded"
            style={{ display: 'flex', gap: '32px' }}
          >
            <div className="w-8 h-8 bg-teal-500 rounded" />
            <div className="w-8 h-8 bg-teal-400 rounded" />
            <div className="w-8 h-8 bg-teal-300 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Column Gap vs Row Gap (Grid) */}
      <h3 id="autolayout-grid-gap">Column Gap vs Row Gap (Grid) <span className="subsection-id">autolayout-grid-gap</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="grid-gap-wide-col" label="column-gap: 24px; row-gap: 8px">
          <div
            data-testid="grid-gap-wide-col"
            className="bg-indigo-100 p-4 rounded"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '24px', rowGap: '8px' }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-10 bg-indigo-400 rounded" />
            ))}
          </div>
        </TestItem>

        <TestItem testId="grid-gap-wide-row" label="column-gap: 8px; row-gap: 24px">
          <div
            data-testid="grid-gap-wide-row"
            className="bg-violet-100 p-4 rounded"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '8px', rowGap: '24px' }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-10 bg-violet-400 rounded" />
            ))}
          </div>
        </TestItem>
      </div>

      {/* Padding Values */}
      <h3 id="autolayout-padding">Padding Values <span className="subsection-id">autolayout-padding</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="padding-0" label="padding: 0px">
          <div
            data-testid="padding-0"
            className="bg-pink-200 rounded inline-block"
            style={{ padding: '0px' }}
          >
            <div className="w-12 h-12 bg-pink-500 rounded" />
          </div>
        </TestItem>

        <TestItem testId="padding-8" label="padding: 8px">
          <div
            data-testid="padding-8"
            className="bg-pink-200 rounded inline-block"
            style={{ padding: '8px' }}
          >
            <div className="w-12 h-12 bg-pink-500 rounded" />
          </div>
        </TestItem>

        <TestItem testId="padding-24" label="padding: 24px">
          <div
            data-testid="padding-24"
            className="bg-pink-200 rounded inline-block"
            style={{ padding: '24px' }}
          >
            <div className="w-12 h-12 bg-pink-500 rounded" />
          </div>
        </TestItem>

        <TestItem testId="padding-asymmetric" label="padding: 8px 24px 16px 32px">
          <div
            data-testid="padding-asymmetric"
            className="bg-pink-200 rounded inline-block"
            style={{ paddingTop: '8px', paddingRight: '24px', paddingBottom: '16px', paddingLeft: '32px' }}
          >
            <div className="w-12 h-12 bg-pink-500 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Margin Values */}
      <h3 id="autolayout-margin">Margin Values <span className="subsection-id">autolayout-margin</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="margin-0" label="margin: 0px" className="bg-gray-200">
          <div
            className="w-12 h-12 bg-emerald-500 rounded"
            style={{ margin: '0px' }}
          />
        </TestItem>

        <TestItem testId="margin-16" label="margin: 16px" className="bg-gray-200">
          <div
            className="w-12 h-12 bg-emerald-500 rounded"
            style={{ margin: '16px' }}
          />
        </TestItem>

        <TestItem testId="margin-auto" label="margin: 0 auto (centered)" className="bg-gray-200">
          <div
            className="w-12 h-12 bg-emerald-500 rounded"
            style={{ margin: '0 auto' }}
          />
        </TestItem>

        <TestItem testId="margin-negative" label="margin-top: -8px (negative)" className="bg-gray-200">
          <div
            className="w-12 h-12 bg-emerald-500 rounded"
            style={{ marginTop: '-8px', marginLeft: '16px' }}
          />
        </TestItem>
      </div>

      {/* Size Constraints */}
      <h3 id="autolayout-constraints">Size Constraints (min/max width/height) <span className="subsection-id">autolayout-constraints</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="constraint-width" label="min-width: 200px; max-width: 400px">
          <div
            data-testid="constraint-width"
            className="bg-cyan-200 rounded p-4"
            style={{ minWidth: '200px', maxWidth: '400px', width: '100%' }}
          >
            <p className="text-sm">Resize window to see constraints</p>
          </div>
        </TestItem>

        <TestItem testId="constraint-height" label="min-height: 80px; max-height: 150px">
          <div
            data-testid="constraint-height"
            className="bg-sky-200 rounded p-4"
            style={{ minHeight: '80px', maxHeight: '150px', overflow: 'auto' }}
          >
            <p className="text-sm">Content here</p>
            <p className="text-sm">More content</p>
            <p className="text-sm">Even more</p>
          </div>
        </TestItem>
      </div>

      {/* Clip Content */}
      <h3 id="autolayout-overflow">Clip Content (overflow) <span className="subsection-id">autolayout-overflow</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="overflow-hidden" label="overflow: hidden (clipped)">
          <div
            data-testid="overflow-hidden"
            className="bg-amber-100 rounded w-24 h-24 relative"
            style={{ overflow: 'hidden' }}
          >
            <div className="w-32 h-32 bg-amber-500 rounded absolute top-2 left-2" />
          </div>
        </TestItem>

        <TestItem testId="overflow-visible" label="overflow: visible">
          <div
            data-testid="overflow-visible"
            className="bg-amber-100 rounded w-24 h-24 relative"
            style={{ overflow: 'visible' }}
          >
            <div className="w-32 h-32 bg-amber-500 rounded absolute top-2 left-2 opacity-75" />
          </div>
        </TestItem>

        <TestItem testId="overflow-auto" label="overflow: auto (scrollable)">
          <div
            data-testid="overflow-auto"
            className="bg-amber-100 rounded w-24 h-24 relative"
            style={{ overflow: 'auto' }}
          >
            <div className="w-48 h-48 bg-amber-500 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Alignment in Flex - Full Grid (all 9 positions) */}
      <h3 id="autolayout-alignment">Alignment Grid (justify-content / align-items) <span className="subsection-id">autolayout-alignment</span></h3>
      <div className="test-grid grid-cols-3">
        {/* Top row */}
        <TestItem testId="align-top-left" label="justify: start; align: start">
          <div
            data-testid="align-top-left"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-top-center" label="justify: center; align: start">
          <div
            data-testid="align-top-center"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-top-right" label="justify: end; align: start">
          <div
            data-testid="align-top-right"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>

        {/* Middle row */}
        <TestItem testId="align-center-left" label="justify: start; align: center">
          <div
            data-testid="align-center-left"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-center-center" label="justify: center; align: center">
          <div
            data-testid="align-center-center"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-center-right" label="justify: end; align: center">
          <div
            data-testid="align-center-right"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>

        {/* Bottom row */}
        <TestItem testId="align-bottom-left" label="justify: start; align: end">
          <div
            data-testid="align-bottom-left"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-bottom-center" label="justify: center; align: end">
          <div
            data-testid="align-bottom-center"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-bottom-right" label="justify: end; align: end">
          <div
            data-testid="align-bottom-right"
            className="bg-rose-100 rounded h-24"
            style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '4px' }}
          >
            <div className="w-8 h-8 bg-rose-500 rounded" />
            <div className="w-8 h-8 bg-rose-400 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Vertical Flow Alignment Grid */}
      <h3 id="autolayout-alignment-vertical">Alignment Grid - Vertical Flow <span className="subsection-id">autolayout-alignment-vertical</span></h3>
      <div className="test-grid grid-cols-3">
        {/* Top row - vertical flow */}
        <TestItem testId="align-vertical-top-left" label="vertical + start/start">
          <div
            data-testid="align-vertical-top-left"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-vertical-top-center" label="vertical + start/center">
          <div
            data-testid="align-vertical-top-center"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-vertical-top-right" label="vertical + start/end">
          <div
            data-testid="align-vertical-top-right"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>

        {/* Center row - vertical flow */}
        <TestItem testId="align-vertical-center-left" label="vertical + center/start">
          <div
            data-testid="align-vertical-center-left"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-vertical-center-center" label="vertical + center/center">
          <div
            data-testid="align-vertical-center-center"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-vertical-center-right" label="vertical + center/end">
          <div
            data-testid="align-vertical-center-right"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>

        {/* Bottom row - vertical flow */}
        <TestItem testId="align-vertical-bottom-left" label="vertical + end/start">
          <div
            data-testid="align-vertical-bottom-left"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-vertical-bottom-center" label="vertical + end/center">
          <div
            data-testid="align-vertical-bottom-center"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>

        <TestItem testId="align-vertical-bottom-right" label="vertical + end/end">
          <div
            data-testid="align-vertical-bottom-right"
            className="bg-indigo-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '4px' }}
          >
            <div className="w-8 h-6 bg-indigo-500 rounded" />
            <div className="w-8 h-6 bg-indigo-400 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Distributed Alignment (space-between/around/evenly) */}
      <h3 id="autolayout-distributed">Distributed Alignment <span className="subsection-id">autolayout-distributed</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="justify-space-between" label="justify-content: space-between">
          <div
            data-testid="justify-space-between"
            className="bg-lime-100 rounded h-20"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <div className="w-8 h-8 bg-lime-500 rounded" />
            <div className="w-8 h-8 bg-lime-400 rounded" />
            <div className="w-8 h-8 bg-lime-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="justify-space-around" label="justify-content: space-around">
          <div
            data-testid="justify-space-around"
            className="bg-lime-100 rounded h-20"
            style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
          >
            <div className="w-8 h-8 bg-lime-500 rounded" />
            <div className="w-8 h-8 bg-lime-400 rounded" />
            <div className="w-8 h-8 bg-lime-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="justify-space-evenly" label="justify-content: space-evenly">
          <div
            data-testid="justify-space-evenly"
            className="bg-lime-100 rounded h-20"
            style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
          >
            <div className="w-8 h-8 bg-lime-500 rounded" />
            <div className="w-8 h-8 bg-lime-400 rounded" />
            <div className="w-8 h-8 bg-lime-300 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Distributed Alignment - Vertical Flow */}
      <h3 id="autolayout-distributed-vertical">Distributed Alignment (Vertical Flow) <span className="subsection-id">autolayout-distributed-vertical</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="justify-space-between-vertical" label="vertical + space-between">
          <div
            data-testid="justify-space-between-vertical"
            className="bg-emerald-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <div className="w-8 h-8 bg-emerald-500 rounded" />
            <div className="w-8 h-8 bg-emerald-400 rounded" />
            <div className="w-8 h-8 bg-emerald-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="justify-space-around-vertical" label="vertical + space-around">
          <div
            data-testid="justify-space-around-vertical"
            className="bg-emerald-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}
          >
            <div className="w-8 h-8 bg-emerald-500 rounded" />
            <div className="w-8 h-8 bg-emerald-400 rounded" />
            <div className="w-8 h-8 bg-emerald-300 rounded" />
          </div>
        </TestItem>

        <TestItem testId="justify-space-evenly-vertical" label="vertical + space-evenly">
          <div
            data-testid="justify-space-evenly-vertical"
            className="bg-emerald-100 rounded h-32"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}
          >
            <div className="w-8 h-8 bg-emerald-500 rounded" />
            <div className="w-8 h-8 bg-emerald-400 rounded" />
            <div className="w-8 h-8 bg-emerald-300 rounded" />
          </div>
        </TestItem>
      </div>

      {/* Width/Height with Different Units */}
      <h3 id="autolayout-units">Dimensions with Different Units <span className="subsection-id">autolayout-units</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="size-px" label="width: 100px; height: 50px">
          <div
            className="bg-fuchsia-500 rounded"
            style={{ width: '100px', height: '50px' }}
          />
        </TestItem>

        <TestItem testId="size-percent-rem" label="width: 50%; height: 3rem">
          <div
            className="bg-fuchsia-500 rounded"
            style={{ width: '50%', height: '3rem' }}
          />
        </TestItem>

        <TestItem testId="size-calc" label="width: calc(100% - 32px)">
          <div
            className="bg-fuchsia-500 rounded"
            style={{ width: 'calc(100% - 32px)', height: '2.5em' }}
          />
        </TestItem>

        <TestItem testId="size-var" label="width/height: var(--custom-spacing)">
          <div
            className="bg-fuchsia-500 rounded"
            style={{ width: 'var(--custom-spacing)', height: 'var(--custom-spacing)' }}
          />
        </TestItem>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { PositionTestSection } from './sections/PositionTestSection'
import { AutoLayoutTestSection } from './sections/AutoLayoutTestSection'
import { TextLayoutTestSection } from './sections/TextLayoutTestSection'
import { AppearanceTestSection } from './sections/AppearanceTestSection'
import { TypographyTestSection } from './sections/TypographyTestSection'
import { FillTestSection } from './sections/FillTestSection'
import { StrokeTestSection } from './sections/StrokeTestSection'
import { EffectsTestSection } from './sections/EffectsTestSection'
import { ElementTypesTestSection } from './sections/ElementTypesTestSection'
import { FailedTestsProvider, useFailedTests } from './TestContext'

// Table of contents data structure
const tocData = [
  {
    id: 'position',
    title: 'Position',
    subsections: [
      { id: 'position-types', title: 'Position Types' },
      { id: 'position-rotation', title: 'Rotation Transforms' },
      { id: 'position-scale', title: 'Scale & Flip Transforms' },
      { id: 'position-combined', title: 'Combined Transforms' },
      { id: 'position-flex-alignment', title: 'Flex Alignment Context' },
      { id: 'position-grid-alignment', title: 'Grid Alignment Context' },
      { id: 'position-move', title: 'Move Element (Translate)' },
      { id: 'position-move-large', title: 'Move Element (Large Offsets)' },
      { id: 'position-siblings', title: 'Elements with Siblings' },
    ],
  },
  {
    id: 'autolayout',
    title: 'Auto Layout',
    subsections: [
      { id: 'autolayout-flow', title: 'Flow Types' },
      { id: 'autolayout-wrap', title: 'Flex Wrap' },
      { id: 'autolayout-gap', title: 'Gap Values' },
      { id: 'autolayout-grid-gap', title: 'Grid Gap' },
      { id: 'autolayout-padding', title: 'Padding Values' },
      { id: 'autolayout-margin', title: 'Margin Values' },
      { id: 'autolayout-constraints', title: 'Size Constraints' },
      { id: 'autolayout-overflow', title: 'Clip Content' },
      { id: 'autolayout-alignment', title: 'Alignment' },
      { id: 'autolayout-units', title: 'Dimension Units' },
    ],
  },
  {
    id: 'textlayout',
    title: 'Text Layout',
    subsections: [
      { id: 'textlayout-resizing', title: 'Resizing Modes' },
      { id: 'textlayout-block-inline', title: 'Block vs Inline' },
      { id: 'textlayout-padding', title: 'Padding' },
      { id: 'textlayout-asymmetric-padding', title: 'Asymmetric Padding' },
      { id: 'textlayout-margin', title: 'Margin' },
      { id: 'textlayout-negative-margin', title: 'Negative Margins' },
      { id: 'textlayout-width-constraints', title: 'Width Constraints' },
      { id: 'textlayout-multiline', title: 'Multi-line Text' },
      { id: 'textlayout-flex', title: 'Text in Flex' },
    ],
  },
  {
    id: 'appearance',
    title: 'Appearance',
    subsections: [
      { id: 'appearance-opacity', title: 'Opacity Levels' },
      { id: 'appearance-opacity-fine', title: 'Fine-grained Opacity' },
      { id: 'appearance-radius-uniform', title: 'Uniform Radius' },
      { id: 'appearance-radius-individual', title: 'Individual Corner Radius' },
      { id: 'appearance-radius-mixed', title: 'Mixed Radius' },
      { id: 'appearance-radius-large', title: 'Large Radius' },
      { id: 'appearance-visibility', title: 'Visibility States' },
      { id: 'appearance-combined', title: 'Combined Opacity & Radius' },
      { id: 'appearance-radius-units', title: 'Radius Units' },
    ],
  },
  {
    id: 'typography',
    title: 'Typography',
    subsections: [
      { id: 'typography-font-family', title: 'Font Families' },
      { id: 'typography-font-weight', title: 'Font Weights' },
      { id: 'typography-font-size', title: 'Font Sizes' },
      { id: 'typography-font-size-units', title: 'Font Size Units' },
      { id: 'typography-line-height', title: 'Line Heights' },
      { id: 'typography-line-height-px', title: 'Fixed Line Heights' },
      { id: 'typography-letter-spacing', title: 'Letter Spacing' },
      { id: 'typography-letter-spacing-px', title: 'Letter Spacing (px)' },
      { id: 'typography-text-align', title: 'Text Alignment' },
      { id: 'typography-combined', title: 'Combined Styles' },
    ],
  },
  {
    id: 'fill',
    title: 'Fill',
    subsections: [
      { id: 'fill-solid', title: 'Solid Colors' },
      { id: 'fill-neutral', title: 'Neutral Colors' },
      { id: 'fill-rgb', title: 'RGB/RGBA Formats' },
      { id: 'fill-opacity', title: 'Background Opacity' },
      { id: 'fill-transparent', title: 'Transparent' },
      { id: 'fill-css-vars', title: 'CSS Variables' },
      { id: 'fill-tailwind', title: 'Tailwind Classes' },
      { id: 'fill-gradients', title: 'Gradients' },
      { id: 'fill-visibility', title: 'Visibility States' },
    ],
  },
  {
    id: 'stroke',
    title: 'Stroke',
    subsections: [
      { id: 'stroke-colors', title: 'Border Colors' },
      { id: 'stroke-widths', title: 'Border Widths' },
      { id: 'stroke-styles', title: 'Border Styles' },
      { id: 'stroke-opacity', title: 'Border Opacity' },
      { id: 'stroke-individual', title: 'Individual Sides' },
      { id: 'stroke-mixed', title: 'Mixed Widths' },
      { id: 'stroke-position', title: 'Border Position' },
      { id: 'stroke-none', title: 'No Border' },
      { id: 'stroke-with-radius', title: 'Border with Radius' },
      { id: 'stroke-tailwind', title: 'Tailwind Classes' },
      { id: 'stroke-visibility', title: 'Visibility' },
    ],
  },
  {
    id: 'effects',
    title: 'Effects',
    subsections: [
      { id: 'effects-tailwind', title: 'Tailwind Shadows' },
      { id: 'effects-drop-shadow', title: 'Custom Drop Shadows' },
      { id: 'effects-shadow-offset', title: 'Shadow Offset' },
      { id: 'effects-shadow-blur', title: 'Shadow Blur' },
      { id: 'effects-shadow-spread', title: 'Shadow Spread' },
      { id: 'effects-colored-shadow', title: 'Colored Shadows' },
      { id: 'effects-inner-shadow', title: 'Inner Shadows' },
      { id: 'effects-layer-blur', title: 'Layer Blur' },
      { id: 'effects-backdrop-blur', title: 'Backdrop Blur' },
      { id: 'effects-stacked', title: 'Stacked Effects' },
      { id: 'effects-none', title: 'No Effects' },
      { id: 'effects-visibility', title: 'Visibility' },
    ],
  },
  {
    id: 'element-types',
    title: 'Element Types',
    subsections: [
      { id: 'element-types-text', title: 'Text Elements' },
      { id: 'element-types-container', title: 'Container Elements' },
      { id: 'element-types-layout', title: 'Layout Containers' },
      { id: 'element-types-image', title: 'Image Elements' },
      { id: 'element-types-interactive', title: 'Interactive Elements' },
      { id: 'element-types-replaced', title: 'Replaced Elements' },
      { id: 'element-types-list', title: 'List Elements' },
      { id: 'element-types-table', title: 'Table Elements' },
      { id: 'element-types-form', title: 'Form Element' },
      { id: 'element-types-semantic', title: 'Semantic Elements' },
    ],
  },
]

function FloatingFailedTestsPanel() {
  const { getFailedTestsList, getFailedTestsWithNotes, failedTests } = useFailedTests()
  const [copiedList, setCopiedList] = useState(false)
  const [copiedPrompts, setCopiedPrompts] = useState(false)

  const copyToClipboard = async (text: string, setCopied: (v: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleCopyList = async () => {
    const failed = getFailedTestsList()
    if (failed.length === 0) return
    const text = `Failing Tests (${failed.length}):\n${failed.map((id) => `- ${id}`).join('\n')}`
    await copyToClipboard(text, setCopiedList)
  }

  const handleCopyPrompts = async () => {
    const failedWithNotes = getFailedTestsWithNotes()
    if (failedWithNotes.length === 0) return

    const prompts = failedWithNotes.map(({ testId, note }) => {
      if (note.trim()) {
        return `Test "${testId}" is failing: ${note}`
      }
      return `Test "${testId}" is failing`
    })

    const text = `The following tests are failing and need to be fixed:\n\n${prompts.join('\n\n')}`
    await copyToClipboard(text, setCopiedPrompts)
  }

  const failedCount = failedTests.size

  if (failedCount === 0) return null

  return (
    <div className="floating-failed-panel">
      <div className="floating-panel-header">
        <span className="floating-panel-title">Failing Tests</span>
        <span className="floating-panel-count">{failedCount}</span>
      </div>
      <div className="floating-panel-buttons">
        <button
          onClick={handleCopyList}
          className="floating-panel-btn"
        >
          {copiedList ? 'Copied!' : 'Copy Test IDs'}
        </button>
        <button
          onClick={handleCopyPrompts}
          className="floating-panel-btn floating-panel-btn-primary"
        >
          {copiedPrompts ? 'Copied!' : 'Copy Prompts'}
        </button>
      </div>
    </div>
  )
}

function TableOfContents() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  const expandAll = () => {
    setExpandedSections(new Set(tocData.map((s) => s.id)))
  }

  const collapseAll = () => {
    setExpandedSections(new Set())
  }

  return (
    <nav className="-mt-4.5 mb-4 p-4 bg-white rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-gray-500">Table of Contents</h2>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Expand All
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={collapseAll}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Collapse All
          </button>
        </div>
      </div>
      <div className="space-y-1">
        {tocData.map((section) => {
          const isExpanded = expandedSections.has(section.id)
          return (
            <div key={section.id} className="toc-section">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="text-gray-400 hover:text-gray-600 w-4 text-center"
                >
                  {isExpanded ? '−' : '+'}
                </button>
                <a
                  href={`#${section.id}`}
                  className="toc-section-title"
                >
                  {section.title}
                </a>
                <span className="text-xs text-gray-400">
                  ({section.subsections.length})
                </span>
              </div>
              {isExpanded && (
                <div className="toc-subsections">
                  {section.subsections.map((sub) => (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      className="toc-subsection block"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-left">Panel Bench</h1>
          <p className="text-gray-600 text-base leading-5 text-left relative top-[9px]">
            the SOTA open-source test suite for code-first visual editors
          </p>
        </header>

        <TableOfContents />

        <PositionTestSection />
        <AutoLayoutTestSection />
        <TextLayoutTestSection />
        <AppearanceTestSection />
        <TypographyTestSection />
        <FillTestSection />
        <StrokeTestSection />
        <EffectsTestSection />
        <ElementTypesTestSection />
      </div>
      <FloatingFailedTestsPanel />
    </div>
  )
}

function App() {
  return (
    <FailedTestsProvider>
      <AppContent />
    </FailedTestsProvider>
  )
}

export default App

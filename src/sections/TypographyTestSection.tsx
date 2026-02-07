/**
 * Typography Section Test Cases
 * Tests: font family, weight, size, line-height, letter-spacing, text alignment
 */
import { TestItem } from '../TestItem'

export function TypographyTestSection() {
  return (
    <section id="typography" className="test-section">
      <h2>Typography Section Tests</h2>

      {/* Font Families */}
      <h3 id="typography-font-family">Font Families <span className="subsection-id">typography-font-family</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TestItem testId="font-inter" label="font-family: Inter">
          <p data-testid="font-inter" style={{ fontFamily: 'Inter, sans-serif' }} className="text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </TestItem>

        <TestItem testId="font-georgia" label="font-family: Georgia (serif)">
          <p data-testid="font-georgia" style={{ fontFamily: 'Georgia, serif' }} className="text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </TestItem>

        <TestItem testId="font-firacode" label="font-family: Fira Code (mono)">
          <p data-testid="font-firacode" style={{ fontFamily: 'Fira Code, monospace' }} className="text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </TestItem>

        <TestItem testId="font-playfair" label="font-family: Playfair Display">
          <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </TestItem>

        <TestItem testId="font-system" label="font-family: system-ui">
          <p style={{ fontFamily: 'system-ui, sans-serif' }} className="text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </TestItem>

        <TestItem testId="font-arial" label="font-family: Arial">
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} className="text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </TestItem>
      </div>

      {/* Font Weights */}
      <h3 id="typography-font-weight">Font Weights <span className="subsection-id">typography-font-weight</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <TestItem testId="weight-100" label="font-weight: 100">
          <p data-testid="weight-100" style={{ fontWeight: 100 }} className="text-xl">
            Thin
          </p>
        </TestItem>

        <TestItem testId="weight-200" label="font-weight: 200">
          <p data-testid="weight-200" style={{ fontWeight: 200 }} className="text-xl">
            Extra Light
          </p>
        </TestItem>

        <TestItem testId="weight-300" label="font-weight: 300">
          <p data-testid="weight-300" style={{ fontWeight: 300 }} className="text-xl">
            Light
          </p>
        </TestItem>

        <TestItem testId="weight-400" label="font-weight: 400">
          <p data-testid="weight-400" style={{ fontWeight: 400 }} className="text-xl">
            Regular
          </p>
        </TestItem>

        <TestItem testId="weight-500" label="font-weight: 500">
          <p data-testid="weight-500" style={{ fontWeight: 500 }} className="text-xl">
            Medium
          </p>
        </TestItem>

        <TestItem testId="weight-600" label="font-weight: 600">
          <p data-testid="weight-600" style={{ fontWeight: 600 }} className="text-xl">
            Semibold
          </p>
        </TestItem>

        <TestItem testId="weight-700" label="font-weight: 700">
          <p data-testid="weight-700" style={{ fontWeight: 700 }} className="text-xl">
            Bold
          </p>
        </TestItem>

        <TestItem testId="weight-800" label="font-weight: 800">
          <p data-testid="weight-800" style={{ fontWeight: 800 }} className="text-xl">
            Extra Bold
          </p>
        </TestItem>

        <TestItem testId="weight-900" label="font-weight: 900">
          <p data-testid="weight-900" style={{ fontWeight: 900 }} className="text-xl">
            Black
          </p>
        </TestItem>
      </div>

      {/* Font Sizes */}
      <h3 id="typography-font-size">Font Sizes <span className="subsection-id">typography-font-size</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="size-10" label="font-size: 10px">
          <p data-testid="size-10" style={{ fontSize: '10px' }}>
            10px - Very small text
          </p>
        </TestItem>

        <TestItem testId="size-12" label="font-size: 12px">
          <p data-testid="size-12" style={{ fontSize: '12px' }}>
            12px - Small text
          </p>
        </TestItem>

        <TestItem testId="size-14" label="font-size: 14px">
          <p data-testid="size-14" style={{ fontSize: '14px' }}>
            14px - Body text
          </p>
        </TestItem>

        <TestItem testId="size-16" label="font-size: 16px">
          <p data-testid="size-16" style={{ fontSize: '16px' }}>
            16px - Base size
          </p>
        </TestItem>

        <TestItem testId="size-18" label="font-size: 18px">
          <p data-testid="size-18" style={{ fontSize: '18px' }}>
            18px - Large text
          </p>
        </TestItem>

        <TestItem testId="size-24" label="font-size: 24px">
          <p data-testid="size-24" style={{ fontSize: '24px' }}>
            24px - Heading
          </p>
        </TestItem>

        <TestItem testId="size-32" label="font-size: 32px">
          <p data-testid="size-32" style={{ fontSize: '32px' }}>
            32px - Title
          </p>
        </TestItem>

        <TestItem testId="size-48" label="font-size: 48px">
          <p data-testid="size-48" style={{ fontSize: '48px' }}>
            48px
          </p>
        </TestItem>
      </div>

      {/* Font Sizes with Different Units */}
      <h3 id="typography-font-size-units">Font Sizes with Different Units <span className="subsection-id">typography-font-size-units</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="size-1rem" label="font-size: 1rem">
          <p style={{ fontSize: '1rem' }}>
            1rem text
          </p>
        </TestItem>

        <TestItem testId="size-15rem" label="font-size: 1.5rem">
          <p style={{ fontSize: '1.5rem' }}>
            1.5rem text
          </p>
        </TestItem>

        <TestItem testId="size-125em" label="font-size: 1.25em">
          <p style={{ fontSize: '1.25em' }}>
            1.25em text
          </p>
        </TestItem>

        <TestItem testId="size-clamp" label="font-size: clamp(14px, 2vw, 24px)">
          <p style={{ fontSize: 'clamp(14px, 2vw, 24px)' }}>
            Clamp text
          </p>
        </TestItem>
      </div>

      {/* Line Heights */}
      <h3 id="typography-line-height">Line Heights <span className="subsection-id">typography-line-height</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <TestItem testId="line-height-1" label="line-height: 1">
          <p data-testid="line-height-1" style={{ lineHeight: '1' }} className="bg-blue-100 p-2 rounded">
            Line height 1 (tight). Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </TestItem>

        <TestItem testId="line-height-125" label="line-height: 1.25">
          <p data-testid="line-height-125" style={{ lineHeight: '1.25' }} className="bg-blue-100 p-2 rounded">
            Line height 1.25. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </TestItem>

        <TestItem testId="line-height-15" label="line-height: 1.5">
          <p data-testid="line-height-15" style={{ lineHeight: '1.5' }} className="bg-blue-100 p-2 rounded">
            Line height 1.5 (normal). Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </TestItem>

        <TestItem testId="line-height-2" label="line-height: 2">
          <p data-testid="line-height-2" style={{ lineHeight: '2' }} className="bg-blue-100 p-2 rounded">
            Line height 2 (loose). Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </TestItem>
      </div>

      {/* Line Height with Pixel Values */}
      <h3 id="typography-line-height-px">Line Height with Fixed Values <span className="subsection-id">typography-line-height-px</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="line-height-16px" label="line-height: 16px">
          <p data-testid="line-height-16px" style={{ fontSize: '16px', lineHeight: '16px' }} className="bg-green-100 p-2 rounded">
            16px font, 16px line-height (cramped). Lorem ipsum dolor sit amet.
          </p>
        </TestItem>

        <TestItem testId="line-height-24px" label="line-height: 24px">
          <p data-testid="line-height-24px" style={{ fontSize: '16px', lineHeight: '24px' }} className="bg-green-100 p-2 rounded">
            16px font, 24px line-height. Lorem ipsum dolor sit amet.
          </p>
        </TestItem>

        <TestItem testId="line-height-32px" label="line-height: 32px">
          <p data-testid="line-height-32px" style={{ fontSize: '16px', lineHeight: '32px' }} className="bg-green-100 p-2 rounded">
            16px font, 32px line-height (spacious). Lorem ipsum dolor sit amet.
          </p>
        </TestItem>
      </div>

      {/* Letter Spacing */}
      <h3 id="typography-letter-spacing">Letter Spacing <span className="subsection-id">typography-letter-spacing</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <TestItem testId="letter-spacing-neg" label="letter-spacing: -0.05em">
          <p data-testid="letter-spacing-neg" style={{ letterSpacing: '-0.05em' }} className="text-lg">
            Negative spacing
          </p>
        </TestItem>

        <TestItem testId="letter-spacing-0" label="letter-spacing: 0">
          <p data-testid="letter-spacing-0" style={{ letterSpacing: '0' }} className="text-lg">
            Normal spacing
          </p>
        </TestItem>

        <TestItem testId="letter-spacing-005em" label="letter-spacing: 0.05em">
          <p data-testid="letter-spacing-005em" style={{ letterSpacing: '0.05em' }} className="text-lg">
            Wide spacing
          </p>
        </TestItem>

        <TestItem testId="letter-spacing-01em" label="letter-spacing: 0.1em">
          <p data-testid="letter-spacing-01em" style={{ letterSpacing: '0.1em' }} className="text-lg">
            Very wide
          </p>
        </TestItem>
      </div>

      {/* Letter Spacing with Pixel Values */}
      <h3 id="typography-letter-spacing-px">Letter Spacing with Pixel Values <span className="subsection-id">typography-letter-spacing-px</span></h3>
      <div className="test-grid grid-cols-2 md:grid-cols-4">
        <TestItem testId="letter-spacing-neg2px" label="letter-spacing: -2px">
          <p data-testid="letter-spacing-neg2px" style={{ letterSpacing: '-2px' }} className="text-lg">
            -2px spacing
          </p>
        </TestItem>

        <TestItem testId="letter-spacing-1px" label="letter-spacing: 1px">
          <p data-testid="letter-spacing-1px" style={{ letterSpacing: '1px' }} className="text-lg">
            1px spacing
          </p>
        </TestItem>

        <TestItem testId="letter-spacing-2px" label="letter-spacing: 2px">
          <p data-testid="letter-spacing-2px" style={{ letterSpacing: '2px' }} className="text-lg">
            2px spacing
          </p>
        </TestItem>

        <TestItem testId="letter-spacing-4px" label="letter-spacing: 4px">
          <p data-testid="letter-spacing-4px" style={{ letterSpacing: '4px' }} className="text-lg">
            4px spacing
          </p>
        </TestItem>
      </div>

      {/* Text Alignment */}
      <h3 id="typography-text-align">Text Alignment <span className="subsection-id">typography-text-align</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="text-align-left" label="text-align: left">
          <p data-testid="text-align-left" style={{ textAlign: 'left' }} className="bg-purple-100 p-3 rounded">
            Left aligned text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
        </TestItem>

        <TestItem testId="text-align-center" label="text-align: center">
          <p data-testid="text-align-center" style={{ textAlign: 'center' }} className="bg-purple-100 p-3 rounded">
            Center aligned text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
        </TestItem>

        <TestItem testId="text-align-right" label="text-align: right">
          <p data-testid="text-align-right" style={{ textAlign: 'right' }} className="bg-purple-100 p-3 rounded">
            Right aligned text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
        </TestItem>

        <TestItem testId="text-align-justify" label="text-align: justify">
          <p data-testid="text-align-justify" style={{ textAlign: 'justify' }} className="bg-purple-100 p-3 rounded">
            Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
        </TestItem>
      </div>

      {/* Vertical Text Alignment */}
      <h3 id="typography-vertical-align">Vertical Text Alignment <span className="subsection-id">typography-vertical-align</span></h3>
      <p className="text-sm text-gray-500 mb-4">
        Vertical alignment uses flexbox align-items to position text within a fixed-height container.
        The vertical align buttons should be <strong>enabled</strong> for these elements.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="valign-top" label="align-items: flex-start (top)">
          <div
            data-testid="valign-top"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              height: '100px',
            }}
            className="bg-amber-100 p-3 rounded"
          >
            <span>Top aligned text</span>
          </div>
        </TestItem>

        <TestItem testId="valign-middle" label="align-items: center (middle)">
          <div
            data-testid="valign-middle"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100px',
            }}
            className="bg-amber-100 p-3 rounded"
          >
            <span>Middle aligned text</span>
          </div>
        </TestItem>

        <TestItem testId="valign-bottom" label="align-items: flex-end (bottom)">
          <div
            data-testid="valign-bottom"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              height: '100px',
            }}
            className="bg-amber-100 p-3 rounded"
          >
            <span>Bottom aligned text</span>
          </div>
        </TestItem>
      </div>

      {/* Vertical Alignment with CSS vertical-align (inline elements) */}
      <h3 id="typography-vertical-align-inline">Vertical Align (CSS vertical-align) <span className="subsection-id">typography-vertical-align-inline</span></h3>
      <p className="text-sm text-gray-500 mb-4">
        CSS vertical-align works on inline/inline-block elements and table cells.
        The vertical align buttons should be <strong>enabled</strong> for these elements.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="valign-css-top" label="vertical-align: top (inline-block)">
          <div className="bg-teal-100 p-3 rounded h-[80px]" style={{ lineHeight: '80px' }}>
            <span
              data-testid="valign-css-top"
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                lineHeight: 'normal',
              }}
            >
              Top aligned
            </span>
          </div>
        </TestItem>

        <TestItem testId="valign-css-middle" label="vertical-align: middle (inline-block)">
          <div className="bg-teal-100 p-3 rounded h-[80px]" style={{ lineHeight: '80px' }}>
            <span
              data-testid="valign-css-middle"
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                lineHeight: 'normal',
              }}
            >
              Middle aligned
            </span>
          </div>
        </TestItem>

        <TestItem testId="valign-css-bottom" label="vertical-align: bottom (inline-block)">
          <div className="bg-teal-100 p-3 rounded h-[80px]" style={{ lineHeight: '80px' }}>
            <span
              data-testid="valign-css-bottom"
              style={{
                display: 'inline-block',
                verticalAlign: 'bottom',
                lineHeight: 'normal',
              }}
            >
              Bottom aligned
            </span>
          </div>
        </TestItem>
      </div>

      {/* Block elements - vertical align disabled */}
      <h3 id="typography-vertical-align-disabled">Block Elements (Vertical Align Disabled) <span className="subsection-id">typography-vertical-align-disabled</span></h3>
      <p className="text-sm text-gray-500 mb-4">
        Block elements cannot use vertical alignment. The vertical align buttons should be <strong>disabled</strong> for these elements.
      </p>
      <div className="test-grid grid-cols-1 md:grid-cols-3">
        <TestItem testId="valign-block-p" label="display: block (p element)">
          <p
            data-testid="valign-block-p"
            style={{ display: 'block' }}
            className="bg-rose-100 p-3 rounded"
          >
            Block paragraph - vertical align should be disabled
          </p>
        </TestItem>

        <TestItem testId="valign-block-div" label="display: block (div)">
          <div
            data-testid="valign-block-div"
            style={{ display: 'block' }}
            className="bg-rose-100 p-3 rounded"
          >
            Block div - vertical align should be disabled
          </div>
        </TestItem>

        <TestItem testId="valign-block-h1" label="display: block (h1)">
          <h1
            data-testid="valign-block-h1"
            style={{ display: 'block', fontSize: '18px' }}
            className="bg-rose-100 p-3 rounded"
          >
            Block heading - vertical align disabled
          </h1>
        </TestItem>
      </div>

      {/* Combined Typography Styles */}
      <h3 id="typography-combined">Combined Typography Styles <span className="subsection-id">typography-combined</span></h3>
      <div className="test-grid grid-cols-1 md:grid-cols-2">
        <TestItem testId="typo-elegant-heading" label="Playfair, 24px, 600, 1.3 LH, -0.02em LS">
          <p
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '1.3',
              letterSpacing: '-0.02em',
            }}
          >
            Elegant Heading Style
          </p>
        </TestItem>

        <TestItem testId="typo-body-text" label="Inter, 14px, 400, 1.6 LH, 0.01em LS">
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.6',
              letterSpacing: '0.01em',
            }}
          >
            Body text style optimized for readability. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </TestItem>

        <TestItem testId="typo-monospace" label="Fira Code, 13px, 500, 1.5 LH">
          <p
            style={{
              fontFamily: 'Fira Code, monospace',
              fontSize: '13px',
              fontWeight: 500,
              lineHeight: '1.5',
              letterSpacing: '0',
            }}
          >
            const code = 'Monospace style';
          </p>
        </TestItem>

        <TestItem testId="typo-label" label="11px, 500, uppercase, 0.1em LS">
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              lineHeight: '1.4',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Label / Caption Style
          </p>
        </TestItem>
      </div>
    </section>
  )
}

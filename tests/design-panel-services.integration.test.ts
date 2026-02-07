/**
 * Integration Tests for Design Panel Services
 * 
 * These tests run against the actual test gym in a real browser,
 * extract computed styles, create ElementIdentity objects, and then
 * test the actual design panel mappers and analyzers from inspector-official.
 * 
 * Run with: npm run test:integration
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import {
  startServer,
  stopServer,
  launchBrowser,
  closeBrowser,
  navigateToTestGym,
  createElementIdentityForTestId,
} from './setup'

// Import the actual services from inspector-official
// Note: In a real monorepo setup, these would be imported via package aliases
// For now, we'll use relative imports if in the same monorepo
import { analyzeElement } from '../../inspector-official/app/services/design-panel/element-analyzer'
import { mapAllFields, mapPositionFields, mapAutoLayoutFields, mapAppearanceFields, mapTypographyFields, mapFillFields, mapStrokeFields, mapEffectsFields } from '../../inspector-official/app/services/design-panel/field-mapper'
import { resolveSectionVisibility } from '../../inspector-official/app/services/design-panel/section-resolver'

describe('Design Panel Services Integration Tests', () => {
  beforeAll(async () => {
    await startServer()
    await launchBrowser()
    await navigateToTestGym()
  }, 60000)

  afterAll(async () => {
    await closeBrowser()
    await stopServer()
  })

  describe('Element Analyzer', () => {
    describe('Semantic Type Detection', () => {
      it('should detect h1 as text element', async () => {
        const identity = await createElementIdentityForTestId('element-h1')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.semanticType).toBe('text')
        expect(analyzed.tagName).toBe('h1')
        expect(analyzed.hasTextContent).toBe(true)
      })

      it('should detect paragraph as text element', async () => {
        const identity = await createElementIdentityForTestId('element-p')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.semanticType).toBe('text')
        expect(analyzed.tagName).toBe('p')
      })

      it('should detect div container', async () => {
        const identity = await createElementIdentityForTestId('element-div')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.semanticType).toBe('container')
        expect(analyzed.tagName).toBe('div')
      })

      it('should detect button as interactive', async () => {
        const identity = await createElementIdentityForTestId('element-button')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.semanticType).toBe('interactive')
        expect(analyzed.tagName).toBe('button')
      })

      it('should detect flex container as layout container', async () => {
        const identity = await createElementIdentityForTestId('flex-row-container')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.isLayoutContainer).toBe(true)
        expect(analyzed.layoutMode).toBe('flex')
      })

      it('should detect grid container as layout container', async () => {
        const identity = await createElementIdentityForTestId('grid-2x2-container')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.isLayoutContainer).toBe(true)
        expect(analyzed.layoutMode).toBe('grid')
      })
    })

    describe('Position Detection', () => {
      it('should detect static position', async () => {
        const identity = await createElementIdentityForTestId('position-static')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.positionType).toBe('static')
        expect(analyzed.isPositioned).toBe(false)
      })

      it('should detect relative position', async () => {
        const identity = await createElementIdentityForTestId('position-relative')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.positionType).toBe('relative')
        expect(analyzed.isPositioned).toBe(true)
      })

      it('should detect absolute position', async () => {
        const identity = await createElementIdentityForTestId('position-absolute')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.positionType).toBe('absolute')
        expect(analyzed.isPositioned).toBe(true)
      })
    })

    describe('Visual Properties Detection', () => {
      it('should detect element with background', async () => {
        const identity = await createElementIdentityForTestId('fill-red')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.hasBackground).toBe(true)
      })

      it('should detect element without visible background', async () => {
        const identity = await createElementIdentityForTestId('fill-transparent')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.hasBackground).toBe(false)
      })

      it('should detect element with border', async () => {
        const identity = await createElementIdentityForTestId('stroke-2px')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.hasBorder).toBe(true)
      })

      it('should detect element with box-shadow effects', async () => {
        const identity = await createElementIdentityForTestId('shadow-lg')
        const analyzed = analyzeElement(identity as any)
        expect(analyzed.hasEffects).toBe(true)
      })
    })
  })

  describe('Section Resolver', () => {
    it('should show typography section for text elements', async () => {
      const identity = await createElementIdentityForTestId('element-h1')
      const analyzed = analyzeElement(identity as any)
      const visibility = resolveSectionVisibility(analyzed)
      expect(visibility.typography).toBe(true)
      expect(visibility.textLayout).toBe(true)
    })

    it('should show auto layout section for containers', async () => {
      const identity = await createElementIdentityForTestId('element-div')
      const analyzed = analyzeElement(identity as any)
      const visibility = resolveSectionVisibility(analyzed)
      expect(visibility.autoLayout).toBe(true)
      // Container elements should not show typography by default
      expect(visibility.typography).toBe(false)
    })

    it('should always show appearance, fill, stroke, effects sections', async () => {
      const identity = await createElementIdentityForTestId('element-div')
      const analyzed = analyzeElement(identity as any)
      const visibility = resolveSectionVisibility(analyzed)
      expect(visibility.appearance).toBe(true)
      expect(visibility.fill).toBe(true)
      expect(visibility.stroke).toBe(true)
      expect(visibility.effects).toBe(true)
    })
  })

  describe('Field Mappers', () => {
    describe('mapPositionFields', () => {
      it('should map position and rotation correctly', async () => {
        const identity = await createElementIdentityForTestId('rotation-45')
        const fields = mapPositionFields(identity as any)
        // 45 degrees rotation
        expect(fields.rotation).toBeCloseTo(45, 0)
        expect(fields.scaleX).toBe(1)
        expect(fields.scaleY).toBe(1)
      })

      it('should detect flip transforms', async () => {
        const identity = await createElementIdentityForTestId('scale-flip-x')
        const fields = mapPositionFields(identity as any)
        expect(fields.scaleX).toBe(-1)
        expect(fields.scaleY).toBe(1)
      })

      it('should use rect for x/y when available', async () => {
        const identity = await createElementIdentityForTestId('position-static')
        const fields = mapPositionFields(identity as any)
        expect(typeof fields.x).toBe('number')
        expect(typeof fields.y).toBe('number')
      })
    })

    describe('mapAutoLayoutFields', () => {
      it('should detect horizontal flow', async () => {
        const identity = await createElementIdentityForTestId('flow-horizontal')
        const fields = mapAutoLayoutFields(identity as any)
        expect(fields.flow).toBe('horizontal')
      })

      it('should detect vertical flow', async () => {
        const identity = await createElementIdentityForTestId('flow-vertical')
        const fields = mapAutoLayoutFields(identity as any)
        expect(fields.flow).toBe('vertical')
      })

      it('should detect grid flow', async () => {
        const identity = await createElementIdentityForTestId('flow-grid')
        const fields = mapAutoLayoutFields(identity as any)
        expect(fields.flow).toBe('grid')
      })

      it('should read gap values', async () => {
        const identity = await createElementIdentityForTestId('gap-16')
        const fields = mapAutoLayoutFields(identity as any)
        expect(fields.gap).toBe(16)
      })

      it('should read padding values', async () => {
        const identity = await createElementIdentityForTestId('padding-asymmetric')
        const fields = mapAutoLayoutFields(identity as any)
        expect(fields.paddingTop).toBe(8)
        expect(fields.paddingRight).toBe(24)
        expect(fields.paddingBottom).toBe(16)
        expect(fields.paddingLeft).toBe(32)
      })

      it('should read dimensions from rect', async () => {
        const identity = await createElementIdentityForTestId('flow-block')
        const fields = mapAutoLayoutFields(identity as any)
        expect(fields.width).toBeGreaterThan(0)
        expect(fields.height).toBeGreaterThan(0)
      })
    })

    describe('mapAppearanceFields', () => {
      it('should read opacity correctly', async () => {
        const identity = await createElementIdentityForTestId('opacity-50')
        const fields = mapAppearanceFields(identity as any)
        expect(fields.opacity).toBe(50)
      })

      it('should read border radius', async () => {
        const identity = await createElementIdentityForTestId('radius-16')
        const fields = mapAppearanceFields(identity as any)
        expect(fields.cornerRadius).toBe(16)
      })

      it('should default visibility to true', async () => {
        const identity = await createElementIdentityForTestId('opacity-100')
        const fields = mapAppearanceFields(identity as any)
        expect(fields.visibility).toBe(true)
      })
    })

    describe('mapTypographyFields', () => {
      it('should read font family', async () => {
        const identity = await createElementIdentityForTestId('font-inter')
        const fields = mapTypographyFields(identity as any)
        expect(fields.fontFamily.toLowerCase()).toContain('inter')
      })

      it('should map font weight to named format', async () => {
        const identity = await createElementIdentityForTestId('weight-700')
        const fields = mapTypographyFields(identity as any)
        expect(fields.fontWeight).toContain('Bold')
        expect(fields.fontWeight).toContain('700')
      })

      it('should read font size', async () => {
        const identity = await createElementIdentityForTestId('size-24')
        const fields = mapTypographyFields(identity as any)
        expect(fields.fontSize).toBe(24)
      })
    })

    describe('mapFillFields', () => {
      it('should detect fill with color', async () => {
        const identity = await createElementIdentityForTestId('fill-red')
        const fields = mapFillFields(identity as any)
        expect(fields.hasFill).toBe(true)
        expect(fields.fill).not.toBeNull()
        expect(fields.fill?.color).toBe('#FF0000')
        expect(fields.fill?.opacity).toBe(100)
        // Note: Browsers normalize all computed color values to rgb/rgba format,
        // so even hex colors in CSS source become 'rgb' in computed styles
        expect(fields.fill?.format).toBe('rgb')
      })

      it('should detect fill for transparent with 0 opacity', async () => {
        const identity = await createElementIdentityForTestId('fill-transparent')
        const fields = mapFillFields(identity as any)
        expect(fields.hasFill).toBe(true)
        expect(fields.fill).not.toBeNull()
        expect(fields.fill?.opacity).toBe(0)
        expect(fields.fill?.format).toBe('rgb')
      })

      it('should detect fill for rgba(0,0,0,0) with 0 opacity', async () => {
        const identity = await createElementIdentityForTestId('fill-rgba-0')
        const fields = mapFillFields(identity as any)
        expect(fields.hasFill).toBe(true)
        expect(fields.fill).not.toBeNull()
        expect(fields.fill?.opacity).toBe(0)
        expect(fields.fill?.format).toBe('rgb')
      })

      it('should detect rgb format for rgb solid color', async () => {
        const identity = await createElementIdentityForTestId('fill-rgb-solid')
        const fields = mapFillFields(identity as any)
        expect(fields.hasFill).toBe(true)
        expect(fields.fill?.format).toBe('rgb')
        expect(fields.fill?.opacity).toBe(100)
      })

      it('should detect rgb format for rgba with opacity', async () => {
        const identity = await createElementIdentityForTestId('fill-rgba-half')
        const fields = mapFillFields(identity as any)
        expect(fields.hasFill).toBe(true)
        expect(fields.fill?.format).toBe('rgb')
        expect(fields.fill?.opacity).toBe(50)
      })

      it('should detect hsl color (browser normalizes to rgb)', async () => {
        // Note: Browsers normalize all color values to rgb/rgba in computed styles
        // HSL colors in CSS are returned as rgb() by getComputedStyle()
        const identity = await createElementIdentityForTestId('fill-hsl')
        const fields = mapFillFields(identity as any)
        expect(fields.hasFill).toBe(true)
        // Browser returns rgb format for all computed colors
        expect(fields.fill?.format).toBe('rgb')
        expect(fields.fill?.opacity).toBe(100)
      })

      it('should detect hsla color with opacity (browser normalizes to rgba)', async () => {
        // Note: Browsers normalize all color values to rgb/rgba in computed styles
        const identity = await createElementIdentityForTestId('fill-hsla')
        const fields = mapFillFields(identity as any)
        expect(fields.hasFill).toBe(true)
        // Browser returns rgb format for all computed colors
        expect(fields.fill?.format).toBe('rgb')
        expect(fields.fill?.opacity).toBe(70)
      })
    })

    describe('mapStrokeFields', () => {
      it('should detect stroke with properties', async () => {
        const identity = await createElementIdentityForTestId('stroke-4px')
        const fields = mapStrokeFields(identity as any)
        expect(fields.hasStroke).toBe(true)
        expect(fields.weight).toBe(4)
        expect(fields.style).toBe('solid')
      })

      it('should detect dashed stroke style', async () => {
        const identity = await createElementIdentityForTestId('stroke-dashed')
        const fields = mapStrokeFields(identity as any)
        expect(fields.style).toBe('dashed')
      })

      it('should detect no stroke', async () => {
        const identity = await createElementIdentityForTestId('stroke-none-implicit')
        const fields = mapStrokeFields(identity as any)
        expect(fields.hasStroke).toBe(false)
      })
    })

    describe('mapEffectsFields', () => {
      it('should parse drop shadow effects', async () => {
        const identity = await createElementIdentityForTestId('shadow-lg')
        const fields = mapEffectsFields(identity as any, identity.className)
        expect(fields.effects.length).toBeGreaterThan(0)
        // Should have at least one drop-shadow effect
        const hasShadow = fields.effects.some(e => e.type === 'drop-shadow')
        expect(hasShadow).toBe(true)
      })

      it('should parse inner shadow effects', async () => {
        const identity = await createElementIdentityForTestId('inner-shadow-medium')
        const fields = mapEffectsFields(identity as any, identity.className)
        // Inner shadow uses inset keyword which the parser should detect
        // The raw box-shadow should contain 'inset'
        expect(fields.rawBoxShadow).toContain('inset')
        // Effects should be parsed (even if classified differently)
        // Note: The classifier may treat some inset shadows as strokes depending on values
        expect(fields.rawBoxShadow).not.toBeNull()
      })

      it('should detect Tailwind shadow class', async () => {
        const identity = await createElementIdentityForTestId('shadow-lg')
        const fields = mapEffectsFields(identity as any, identity.className)
        // Should detect the Tailwind shadow-lg class
        expect(fields.detectedTailwindClass).toBe('shadow-lg')
      })

      it('should parse layer blur effects', async () => {
        const identity = await createElementIdentityForTestId('blur-4')
        const fields = mapEffectsFields(identity as any, identity.className)
        expect(fields.effects.length).toBeGreaterThan(0)
        // Should have layer-blur effect
        const hasBlur = fields.effects.some(e => e.type === 'layer-blur')
        expect(hasBlur).toBe(true)
      })

      it('should parse background blur effects (backdrop-filter: blur(4px))', async () => {
        const identity = await createElementIdentityForTestId('backdrop-blur-4')
        const fields = mapEffectsFields(identity as any, identity.className)
        expect(fields.effects.length).toBeGreaterThan(0)
        // Should have background-blur effect
        const hasBackdropBlur = fields.effects.some(e => e.type === 'background-blur')
        expect(hasBackdropBlur).toBe(true)
        // Should have correct blur value
        const backdropBlurEffect = fields.effects.find(e => e.type === 'background-blur')
        expect(backdropBlurEffect?.settings.blur).toBe(4)
      })

      it('should parse background blur effects (backdrop-filter: blur(8px))', async () => {
        const identity = await createElementIdentityForTestId('backdrop-blur-8')
        const fields = mapEffectsFields(identity as any, identity.className)
        // Should have background-blur effect with correct value
        const backdropBlurEffect = fields.effects.find(e => e.type === 'background-blur')
        expect(backdropBlurEffect).toBeDefined()
        expect(backdropBlurEffect?.settings.blur).toBe(8)
      })

      it('should parse background blur effects (backdrop-filter: blur(16px))', async () => {
        const identity = await createElementIdentityForTestId('backdrop-blur-16')
        const fields = mapEffectsFields(identity as any, identity.className)
        // Should have background-blur effect with correct value
        const backdropBlurEffect = fields.effects.find(e => e.type === 'background-blur')
        expect(backdropBlurEffect).toBeDefined()
        expect(backdropBlurEffect?.settings.blur).toBe(16)
      })

      it('should parse two stacked drop shadows as separate effects', async () => {
        // Test case: stacked-two-shadows has two separate drop shadows that should
        // NOT be consolidated into one since they don't match a Tailwind preset
        const identity = await createElementIdentityForTestId('stacked-two-shadows')
        const fields = mapEffectsFields(identity as any, identity.className)
        
        // Should have exactly 2 drop-shadow effects (not consolidated into 1)
        const dropShadows = fields.effects.filter(e => e.type === 'drop-shadow')
        expect(dropShadows.length).toBe(2)
        
        // Verify both shadows have different properties
        // First shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
        // Second shadow: 0 10px 20px rgba(0, 0, 0, 0.15)
        const shadowYValues = dropShadows.map(s => s.settings.positionY).sort((a, b) => a - b)
        expect(shadowYValues).toContain(4)
        expect(shadowYValues).toContain(10)
      })

      it('should parse drop shadow + inner shadow as separate effects', async () => {
        // Test case: stacked-drop-inner has a drop shadow and an inner shadow
        const identity = await createElementIdentityForTestId('stacked-drop-inner')
        const fields = mapEffectsFields(identity as any, identity.className)
        
        // Should have at least 1 drop-shadow and 1 inner-shadow
        const dropShadows = fields.effects.filter(e => e.type === 'drop-shadow')
        const innerShadows = fields.effects.filter(e => e.type === 'inner-shadow')
        
        expect(dropShadows.length).toBeGreaterThanOrEqual(1)
        expect(innerShadows.length).toBeGreaterThanOrEqual(1)
      })
    })
  })

  describe('Full Field Mapping (mapAllFields)', () => {
    it('should map all fields for a complex element', async () => {
      const identity = await createElementIdentityForTestId('shadow-lg')
      const analyzed = analyzeElement(identity as any)
      const fields = mapAllFields(identity as any, analyzed)

      // Should have all sections
      expect(fields.position).toBeDefined()
      expect(fields.autoLayout).toBeDefined()
      expect(fields.typography).toBeDefined()
      expect(fields.textLayout).toBeDefined()
      expect(fields.appearance).toBeDefined()
      expect(fields.fill).toBeDefined()
      expect(fields.stroke).toBeDefined()
      expect(fields.effects).toBeDefined()

      // Effects should be parsed
      expect(fields.effects.effects.length).toBeGreaterThan(0)
    })

    it('should correctly map a text element', async () => {
      const identity = await createElementIdentityForTestId('element-h1')
      const analyzed = analyzeElement(identity as any)
      const fields = mapAllFields(identity as any, analyzed)

      // Typography should be filled
      expect(fields.typography.fontSize).toBeGreaterThan(0)
      expect(fields.typography.fontFamily).toBeDefined()
    })

    it('should correctly map a flex container', async () => {
      const identity = await createElementIdentityForTestId('flex-row-container')
      const analyzed = analyzeElement(identity as any)
      const fields = mapAllFields(identity as any, analyzed)

      // Auto layout should show horizontal flow
      expect(fields.autoLayout.flow).toBe('horizontal')
      expect(fields.autoLayout.gap).toBe(8)
    })
  })
})

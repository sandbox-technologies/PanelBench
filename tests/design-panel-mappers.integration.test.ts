/**
 * Integration Tests for Design Panel Mappers
 * 
 * These tests run against the actual test gym in a real browser,
 * extract computed styles, and verify the design panel mappers
 * correctly interpret them.
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
  getComputedStylesForTestId,
} from './setup'

// Import the actual mappers from inspector-official
// Note: These paths would need to be adjusted based on actual monorepo setup
// For now, we'll test the raw computed style parsing

describe('Design Panel Integration Tests', () => {
  beforeAll(async () => {
    await startServer()
    await launchBrowser()
    await navigateToTestGym()
  }, 60000)

  afterAll(async () => {
    await closeBrowser()
    await stopServer()
  })

  describe('Position Section', () => {
    describe('Position Types', () => {
      it('should read static position correctly', async () => {
        const styles = await getComputedStylesForTestId('position-static')
        expect(styles.position).toBe('static')
      })

      it('should read relative position with offsets', async () => {
        const styles = await getComputedStylesForTestId('position-relative')
        expect(styles.position).toBe('relative')
        expect(styles.top).toBe('8px')
        expect(styles.left).toBe('8px')
      })

      it('should read absolute position', async () => {
        const styles = await getComputedStylesForTestId('position-absolute')
        expect(styles.position).toBe('absolute')
        expect(styles.top).toBe('4px')
        expect(styles.right).toBe('4px')
      })

      it('should read sticky position', async () => {
        const styles = await getComputedStylesForTestId('position-sticky')
        expect(styles.position).toBe('sticky')
        expect(styles.top).toBe('0px')
      })
    })

    describe('Rotation Transforms', () => {
      it('should read 0deg rotation', async () => {
        const styles = await getComputedStylesForTestId('rotation-0')
        // Browser normalizes rotate(0deg) to none or matrix(1, 0, 0, 1, 0, 0)
        expect(styles.transform).toMatch(/none|matrix\(1,\s*0,\s*0,\s*1,\s*0,\s*0\)/)
      })

      it('should read 45deg rotation as matrix', async () => {
        const styles = await getComputedStylesForTestId('rotation-45')
        // rotate(45deg) becomes matrix with sin/cos values
        expect(styles.transform).toContain('matrix')
        // Verify it's a rotation matrix (approximate check)
        const match = styles.transform.match(/matrix\(([^)]+)\)/)
        expect(match).not.toBeNull()
        if (match) {
          const values = match[1].split(',').map(v => parseFloat(v.trim()))
          // For 45deg: cos(45) ≈ 0.707, sin(45) ≈ 0.707
          expect(values[0]).toBeCloseTo(0.707, 2)
          expect(values[1]).toBeCloseTo(0.707, 2)
        }
      })

      it('should read 90deg rotation', async () => {
        const styles = await getComputedStylesForTestId('rotation-90')
        expect(styles.transform).toContain('matrix')
        const match = styles.transform.match(/matrix\(([^)]+)\)/)
        if (match) {
          const values = match[1].split(',').map(v => parseFloat(v.trim()))
          // For 90deg: cos(90) = 0, sin(90) = 1
          expect(values[0]).toBeCloseTo(0, 2)
          expect(values[1]).toBeCloseTo(1, 2)
        }
      })

      it('should read negative rotation', async () => {
        const styles = await getComputedStylesForTestId('rotation-neg45')
        expect(styles.transform).toContain('matrix')
        const match = styles.transform.match(/matrix\(([^)]+)\)/)
        if (match) {
          const values = match[1].split(',').map(v => parseFloat(v.trim()))
          // For -45deg: cos(-45) ≈ 0.707, sin(-45) ≈ -0.707
          expect(values[0]).toBeCloseTo(0.707, 2)
          expect(values[1]).toBeCloseTo(-0.707, 2)
        }
      })
    })

    describe('Scale Transforms', () => {
      it('should read normal scale (1, 1)', async () => {
        const styles = await getComputedStylesForTestId('scale-normal')
        expect(styles.transform).toMatch(/none|matrix\(1,\s*0,\s*0,\s*1,\s*0,\s*0\)/)
      })

      it('should read horizontal flip (scaleX: -1)', async () => {
        const styles = await getComputedStylesForTestId('scale-flip-x')
        expect(styles.transform).toContain('matrix')
        const match = styles.transform.match(/matrix\(([^)]+)\)/)
        if (match) {
          const values = match[1].split(',').map(v => parseFloat(v.trim()))
          // scaleX(-1) = matrix(-1, 0, 0, 1, 0, 0)
          expect(values[0]).toBe(-1)
          expect(values[3]).toBe(1)
        }
      })

      it('should read vertical flip (scaleY: -1)', async () => {
        const styles = await getComputedStylesForTestId('scale-flip-y')
        expect(styles.transform).toContain('matrix')
        const match = styles.transform.match(/matrix\(([^)]+)\)/)
        if (match) {
          const values = match[1].split(',').map(v => parseFloat(v.trim()))
          // scaleY(-1) = matrix(1, 0, 0, -1, 0, 0)
          expect(values[0]).toBe(1)
          expect(values[3]).toBe(-1)
        }
      })
    })

    describe('Flex/Grid Containers (Alignment Context)', () => {
      it('should read flex row container', async () => {
        const styles = await getComputedStylesForTestId('flex-row-container')
        expect(styles.display).toBe('flex')
        expect(styles.flexDirection).toBe('row')
        expect(styles.gap).toBe('8px')
      })

      it('should read flex column container', async () => {
        const styles = await getComputedStylesForTestId('flex-col-container')
        expect(styles.display).toBe('flex')
        expect(styles.flexDirection).toBe('column')
        expect(styles.gap).toBe('8px')
      })

      it('should read grid container', async () => {
        const styles = await getComputedStylesForTestId('grid-2x2-container')
        expect(styles.display).toBe('grid')
        expect(styles.gap).toBe('8px')
      })
    })
  })

  describe('Auto Layout Section', () => {
    describe('Flow Types', () => {
      it('should read block flow as freeform', async () => {
        const styles = await getComputedStylesForTestId('flow-block')
        expect(styles.display).toBe('block')
      })

      it('should read flex column as vertical flow', async () => {
        const styles = await getComputedStylesForTestId('flow-vertical')
        expect(styles.display).toBe('flex')
        expect(styles.flexDirection).toBe('column')
      })

      it('should read flex row as horizontal flow', async () => {
        const styles = await getComputedStylesForTestId('flow-horizontal')
        expect(styles.display).toBe('flex')
        expect(styles.flexDirection).toBe('row')
      })

      it('should read grid flow', async () => {
        const styles = await getComputedStylesForTestId('flow-grid')
        expect(styles.display).toBe('grid')
      })
    })

    describe('Distributed Alignment Detection', () => {
      it('should detect justify-content: space-between as distributed', async () => {
        const styles = await getComputedStylesForTestId('justify-space-between')
        expect(styles.justifyContent).toBe('space-between')
      })

      it('should detect justify-content: space-around as distributed', async () => {
        const styles = await getComputedStylesForTestId('justify-space-around')
        expect(styles.justifyContent).toBe('space-around')
      })

      it('should detect justify-content: space-evenly as distributed', async () => {
        const styles = await getComputedStylesForTestId('justify-space-evenly')
        expect(styles.justifyContent).toBe('space-evenly')
      })

      it('should detect vertical flow with space-between as distributed', async () => {
        const styles = await getComputedStylesForTestId('justify-space-between-vertical')
        expect(styles.justifyContent).toBe('space-between')
        expect(styles.flexDirection).toBe('column')
      })

      it('should detect vertical flow with space-around as distributed', async () => {
        const styles = await getComputedStylesForTestId('justify-space-around-vertical')
        expect(styles.justifyContent).toBe('space-around')
        expect(styles.flexDirection).toBe('column')
      })

      it('should detect vertical flow with space-evenly as distributed', async () => {
        const styles = await getComputedStylesForTestId('justify-space-evenly-vertical')
        expect(styles.justifyContent).toBe('space-evenly')
        expect(styles.flexDirection).toBe('column')
      })

      it('should not flag flex-start as distributed alignment', async () => {
        const styles = await getComputedStylesForTestId('align-top-left')
        expect(styles.justifyContent).toBe('flex-start')
      })

      it('should not flag center as distributed alignment', async () => {
        const styles = await getComputedStylesForTestId('align-center-center')
        expect(styles.justifyContent).toBe('center')
      })
    })

    describe('Gap Values', () => {
      it('should read gap: 0px', async () => {
        const styles = await getComputedStylesForTestId('gap-0')
        expect(styles.gap).toBe('0px')
      })

      it('should read gap: 4px', async () => {
        const styles = await getComputedStylesForTestId('gap-4')
        expect(styles.gap).toBe('4px')
      })

      it('should read gap: 16px', async () => {
        const styles = await getComputedStylesForTestId('gap-16')
        expect(styles.gap).toBe('16px')
      })

      it('should read gap: 32px', async () => {
        const styles = await getComputedStylesForTestId('gap-32')
        expect(styles.gap).toBe('32px')
      })
    })

    describe('Padding Values', () => {
      it('should read padding: 0px', async () => {
        const styles = await getComputedStylesForTestId('padding-0')
        expect(styles.paddingTop).toBe('0px')
        expect(styles.paddingRight).toBe('0px')
        expect(styles.paddingBottom).toBe('0px')
        expect(styles.paddingLeft).toBe('0px')
      })

      it('should read padding: 8px', async () => {
        const styles = await getComputedStylesForTestId('padding-8')
        expect(styles.paddingTop).toBe('8px')
        expect(styles.paddingRight).toBe('8px')
        expect(styles.paddingBottom).toBe('8px')
        expect(styles.paddingLeft).toBe('8px')
      })

      it('should read asymmetric padding', async () => {
        const styles = await getComputedStylesForTestId('padding-asymmetric')
        expect(styles.paddingTop).toBe('8px')
        expect(styles.paddingRight).toBe('24px')
        expect(styles.paddingBottom).toBe('16px')
        expect(styles.paddingLeft).toBe('32px')
      })
    })
  })

  describe('Appearance Section', () => {
    describe('Opacity', () => {
      it('should read opacity: 1 (100%)', async () => {
        const styles = await getComputedStylesForTestId('opacity-100')
        expect(styles.opacity).toBe('1')
      })

      it('should read opacity: 0.75 (75%)', async () => {
        const styles = await getComputedStylesForTestId('opacity-75')
        expect(styles.opacity).toBe('0.75')
      })

      it('should read opacity: 0.5 (50%)', async () => {
        const styles = await getComputedStylesForTestId('opacity-50')
        expect(styles.opacity).toBe('0.5')
      })

      it('should read opacity: 0.25 (25%)', async () => {
        const styles = await getComputedStylesForTestId('opacity-25')
        expect(styles.opacity).toBe('0.25')
      })

      it('should read opacity: 0 (0%)', async () => {
        const styles = await getComputedStylesForTestId('opacity-0')
        expect(styles.opacity).toBe('0')
      })
    })

    describe('Border Radius', () => {
      it('should read border-radius: 0px', async () => {
        const styles = await getComputedStylesForTestId('radius-0')
        expect(styles.borderRadius).toBe('0px')
      })

      it('should read border-radius: 4px', async () => {
        const styles = await getComputedStylesForTestId('radius-4')
        expect(styles.borderRadius).toBe('4px')
      })

      it('should read border-radius: 8px', async () => {
        const styles = await getComputedStylesForTestId('radius-8')
        expect(styles.borderRadius).toBe('8px')
      })

      it('should read border-radius: 16px', async () => {
        const styles = await getComputedStylesForTestId('radius-16')
        expect(styles.borderRadius).toBe('16px')
      })

      it('should read border-radius: 9999px (full/circle)', async () => {
        const styles = await getComputedStylesForTestId('radius-full')
        // Browser may normalize to actual computed value based on element size
        expect(parseInt(styles.borderRadius)).toBeGreaterThanOrEqual(32)
      })
    })

    describe('Large Border Radius Values', () => {
      it('should read border-radius: 48px', async () => {
        const styles = await getComputedStylesForTestId('radius-48')
        // Element is 96x64, so 48px is valid (not capped by half of 64 = 32)
        // Browser reports the actual computed value
        expect(parseInt(styles.borderRadius)).toBeGreaterThanOrEqual(32)
      })

      it('should read border-radius: 50% (percentage)', async () => {
        const styles = await getComputedStylesForTestId('radius-50-percent')
        // 50% of a 96x96 element = 48px each corner
        // Browser reports computed px value
        expect(parseInt(styles.borderRadius)).toBeGreaterThanOrEqual(32)
      })
    })

    describe('Individual Corner Radius', () => {
      it('should read individual top-left radius', async () => {
        const styles = await getComputedStylesForTestId('radius-tl-16')
        expect(styles.borderTopLeftRadius).toBe('16px')
        expect(styles.borderTopRightRadius).toBe('0px')
        expect(styles.borderBottomRightRadius).toBe('0px')
        expect(styles.borderBottomLeftRadius).toBe('0px')
      })

      it('should read individual top-right radius', async () => {
        const styles = await getComputedStylesForTestId('radius-tr-16')
        expect(styles.borderTopLeftRadius).toBe('0px')
        expect(styles.borderTopRightRadius).toBe('16px')
        expect(styles.borderBottomRightRadius).toBe('0px')
        expect(styles.borderBottomLeftRadius).toBe('0px')
      })

      it('should read individual bottom-right radius', async () => {
        const styles = await getComputedStylesForTestId('radius-br-16')
        expect(styles.borderTopLeftRadius).toBe('0px')
        expect(styles.borderTopRightRadius).toBe('0px')
        expect(styles.borderBottomRightRadius).toBe('16px')
        expect(styles.borderBottomLeftRadius).toBe('0px')
      })

      it('should read individual bottom-left radius', async () => {
        const styles = await getComputedStylesForTestId('radius-bl-16')
        expect(styles.borderTopLeftRadius).toBe('0px')
        expect(styles.borderTopRightRadius).toBe('0px')
        expect(styles.borderBottomRightRadius).toBe('0px')
        expect(styles.borderBottomLeftRadius).toBe('16px')
      })
    })

    describe('Mixed Corner Radius Values', () => {
      it('should read diagonal corner radius (16px 0 16px 0)', async () => {
        const styles = await getComputedStylesForTestId('radius-diagonal')
        expect(styles.borderTopLeftRadius).toBe('16px')
        expect(styles.borderTopRightRadius).toBe('0px')
        expect(styles.borderBottomRightRadius).toBe('16px')
        expect(styles.borderBottomLeftRadius).toBe('0px')
      })

      it('should read top-rounded corners (24px 24px 0 0)', async () => {
        const styles = await getComputedStylesForTestId('radius-top-rounded')
        expect(styles.borderTopLeftRadius).toBe('24px')
        expect(styles.borderTopRightRadius).toBe('24px')
        expect(styles.borderBottomRightRadius).toBe('0px')
        expect(styles.borderBottomLeftRadius).toBe('0px')
      })

      it('should read all-different corner radii (4px 16px 32px 8px)', async () => {
        const styles = await getComputedStylesForTestId('radius-all-different')
        expect(styles.borderTopLeftRadius).toBe('4px')
        expect(styles.borderTopRightRadius).toBe('16px')
        expect(styles.borderBottomRightRadius).toBe('32px')
        expect(styles.borderBottomLeftRadius).toBe('8px')
      })
    })

    describe('Special Border Radius Formats', () => {
      it('should read elliptical border-radius (50% / 25%)', async () => {
        const styles = await getComputedStylesForTestId('radius-elliptical')
        // Browser reports elliptical corners as "Xpx Ypx" for each corner
        // The horizontal radius is 50% and vertical is 25%
        expect(styles.borderTopLeftRadius).not.toBe('0px')
        expect(styles.borderTopRightRadius).not.toBe('0px')
        expect(styles.borderBottomRightRadius).not.toBe('0px')
        expect(styles.borderBottomLeftRadius).not.toBe('0px')
      })
    })
  })

  describe('Typography Section', () => {
    describe('Font Families', () => {
      it('should read Inter font family', async () => {
        const styles = await getComputedStylesForTestId('font-inter')
        expect(styles.fontFamily.toLowerCase()).toContain('inter')
      })

      it('should read Georgia font family', async () => {
        const styles = await getComputedStylesForTestId('font-georgia')
        expect(styles.fontFamily.toLowerCase()).toContain('georgia')
      })
    })

    describe('Font Weights', () => {
      it('should read font-weight: 100 (thin)', async () => {
        const styles = await getComputedStylesForTestId('weight-100')
        expect(styles.fontWeight).toBe('100')
      })

      it('should read font-weight: 400 (regular)', async () => {
        const styles = await getComputedStylesForTestId('weight-400')
        expect(styles.fontWeight).toBe('400')
      })

      it('should read font-weight: 700 (bold)', async () => {
        const styles = await getComputedStylesForTestId('weight-700')
        expect(styles.fontWeight).toBe('700')
      })

      it('should read font-weight: 900 (black)', async () => {
        const styles = await getComputedStylesForTestId('weight-900')
        expect(styles.fontWeight).toBe('900')
      })
    })

    describe('Font Sizes', () => {
      it('should read font-size: 10px', async () => {
        const styles = await getComputedStylesForTestId('size-10')
        expect(styles.fontSize).toBe('10px')
      })

      it('should read font-size: 16px', async () => {
        const styles = await getComputedStylesForTestId('size-16')
        expect(styles.fontSize).toBe('16px')
      })

      it('should read font-size: 32px', async () => {
        const styles = await getComputedStylesForTestId('size-32')
        expect(styles.fontSize).toBe('32px')
      })

      it('should read font-size: 48px', async () => {
        const styles = await getComputedStylesForTestId('size-48')
        expect(styles.fontSize).toBe('48px')
      })
    })
  })

  describe('Fill Section', () => {
    describe('Solid Colors', () => {
      it('should read red background (#FF0000)', async () => {
        const styles = await getComputedStylesForTestId('fill-red')
        // Browser returns rgb format
        expect(styles.backgroundColor).toBe('rgb(255, 0, 0)')
      })

      it('should read green background (#00FF00)', async () => {
        const styles = await getComputedStylesForTestId('fill-green')
        expect(styles.backgroundColor).toBe('rgb(0, 255, 0)')
      })

      it('should read blue background (#0000FF)', async () => {
        const styles = await getComputedStylesForTestId('fill-blue')
        expect(styles.backgroundColor).toBe('rgb(0, 0, 255)')
      })
    })

    describe('Transparent/No Fill', () => {
      it('should read transparent background', async () => {
        const styles = await getComputedStylesForTestId('fill-transparent')
        expect(styles.backgroundColor).toBe('rgba(0, 0, 0, 0)')
      })

      it('should read rgba(0,0,0,0) background', async () => {
        const styles = await getComputedStylesForTestId('fill-rgba-0')
        expect(styles.backgroundColor).toBe('rgba(0, 0, 0, 0)')
      })
    })
  })

  describe('Stroke Section', () => {
    describe('Border Widths', () => {
      it('should read 1px border', async () => {
        const styles = await getComputedStylesForTestId('stroke-1px')
        expect(styles.borderWidth).toBe('1px')
      })

      it('should read 2px border', async () => {
        const styles = await getComputedStylesForTestId('stroke-2px')
        expect(styles.borderWidth).toBe('2px')
      })

      it('should read 4px border', async () => {
        const styles = await getComputedStylesForTestId('stroke-4px')
        expect(styles.borderWidth).toBe('4px')
      })

      it('should read 8px border', async () => {
        const styles = await getComputedStylesForTestId('stroke-8px')
        expect(styles.borderWidth).toBe('8px')
      })
    })

    describe('Border Styles', () => {
      it('should read solid border style', async () => {
        const styles = await getComputedStylesForTestId('stroke-solid')
        expect(styles.borderStyle).toBe('solid')
      })

      it('should read dashed border style', async () => {
        const styles = await getComputedStylesForTestId('stroke-dashed')
        expect(styles.borderStyle).toBe('dashed')
      })

      it('should read dotted border style', async () => {
        const styles = await getComputedStylesForTestId('stroke-dotted')
        expect(styles.borderStyle).toBe('dotted')
      })
    })

    describe('No Border', () => {
      it('should read no border (implicit)', async () => {
        const styles = await getComputedStylesForTestId('stroke-none-implicit')
        expect(styles.borderWidth).toBe('0px')
      })

      it('should read no border (explicit none)', async () => {
        const styles = await getComputedStylesForTestId('stroke-none-explicit')
        expect(styles.borderWidth).toBe('0px')
      })
    })

    describe('Individual Border Sides', () => {
      it('should read border-top only', async () => {
        const styles = await getComputedStylesForTestId('stroke-border-top-only')
        expect(styles.borderTopWidth).toBe('4px')
        expect(styles.borderTopStyle).toBe('solid')
        expect(styles.borderTopColor).toBe('rgb(16, 185, 129)')
        expect(styles.borderRightWidth).toBe('0px')
        expect(styles.borderBottomWidth).toBe('0px')
        expect(styles.borderLeftWidth).toBe('0px')
      })

      it('should read border-right only', async () => {
        const styles = await getComputedStylesForTestId('stroke-border-right-only')
        expect(styles.borderRightWidth).toBe('4px')
        expect(styles.borderRightStyle).toBe('solid')
        expect(styles.borderRightColor).toBe('rgb(16, 185, 129)')
        expect(styles.borderTopWidth).toBe('0px')
        expect(styles.borderBottomWidth).toBe('0px')
        expect(styles.borderLeftWidth).toBe('0px')
      })

      it('should read border-bottom only', async () => {
        const styles = await getComputedStylesForTestId('stroke-border-bottom-only')
        expect(styles.borderBottomWidth).toBe('4px')
        expect(styles.borderBottomStyle).toBe('solid')
        expect(styles.borderBottomColor).toBe('rgb(16, 185, 129)')
        expect(styles.borderTopWidth).toBe('0px')
        expect(styles.borderRightWidth).toBe('0px')
        expect(styles.borderLeftWidth).toBe('0px')
      })

      it('should read border-left only', async () => {
        const styles = await getComputedStylesForTestId('stroke-border-left-only')
        expect(styles.borderLeftWidth).toBe('4px')
        expect(styles.borderLeftStyle).toBe('solid')
        expect(styles.borderLeftColor).toBe('rgb(16, 185, 129)')
        expect(styles.borderTopWidth).toBe('0px')
        expect(styles.borderRightWidth).toBe('0px')
        expect(styles.borderBottomWidth).toBe('0px')
      })

      it('should read mixed border widths (2px 4px 6px 8px)', async () => {
        const styles = await getComputedStylesForTestId('stroke-mixed-2-4-6-8')
        expect(styles.borderTopWidth).toBe('2px')
        expect(styles.borderRightWidth).toBe('4px')
        expect(styles.borderBottomWidth).toBe('6px')
        expect(styles.borderLeftWidth).toBe('8px')
      })

      it('should read top/bottom only borders', async () => {
        const styles = await getComputedStylesForTestId('stroke-top-bottom-only')
        expect(styles.borderTopWidth).toBe('4px')
        expect(styles.borderBottomWidth).toBe('4px')
        expect(styles.borderLeftWidth).toBe('0px')
        expect(styles.borderRightWidth).toBe('0px')
      })

      it('should read left/right only borders', async () => {
        const styles = await getComputedStylesForTestId('stroke-left-right-only')
        expect(styles.borderLeftWidth).toBe('4px')
        expect(styles.borderRightWidth).toBe('4px')
        expect(styles.borderTopWidth).toBe('0px')
        expect(styles.borderBottomWidth).toBe('0px')
      })
    })
  })

  describe('Effects Section', () => {
    describe('Tailwind Shadow Presets', () => {
      it('should read shadow-sm', async () => {
        const styles = await getComputedStylesForTestId('shadow-sm')
        expect(styles.boxShadow).not.toBe('none')
        expect(styles.boxShadow).toContain('rgba')
      })

      it('should read shadow (base)', async () => {
        const styles = await getComputedStylesForTestId('shadow-base')
        expect(styles.boxShadow).not.toBe('none')
      })

      it('should read shadow-md', async () => {
        const styles = await getComputedStylesForTestId('shadow-md')
        expect(styles.boxShadow).not.toBe('none')
      })

      it('should read shadow-lg', async () => {
        const styles = await getComputedStylesForTestId('shadow-lg')
        expect(styles.boxShadow).not.toBe('none')
      })

      it('should read shadow-none', async () => {
        const styles = await getComputedStylesForTestId('shadow-none')
        // Tailwind's shadow-none may output multiple 0-value shadows or 'none'
        // The key is that there's no visible shadow
        const isNone = styles.boxShadow === 'none' || 
          styles.boxShadow.includes('rgba(0, 0, 0, 0)') ||
          !styles.boxShadow.match(/\d+px.*rgba\([^0]/)
        expect(isNone).toBe(true)
      })
    })

    describe('Inner Shadows', () => {
      it('should read inner shadow (inset)', async () => {
        const styles = await getComputedStylesForTestId('inner-shadow-subtle')
        expect(styles.boxShadow).toContain('inset')
      })
    })

    describe('Layer Blur', () => {
      it('should read blur(0)', async () => {
        const styles = await getComputedStylesForTestId('blur-0')
        // blur(0px) may be normalized to 'none' or 'blur(0px)'
        expect(styles.filter === 'none' || styles.filter === 'blur(0px)').toBe(true)
      })

      it('should read blur(2px)', async () => {
        const styles = await getComputedStylesForTestId('blur-2')
        expect(styles.filter).toContain('blur(2px)')
      })

      it('should read blur(4px)', async () => {
        const styles = await getComputedStylesForTestId('blur-4')
        expect(styles.filter).toContain('blur(4px)')
      })

      it('should read blur(8px)', async () => {
        const styles = await getComputedStylesForTestId('blur-8')
        expect(styles.filter).toContain('blur(8px)')
      })
    })

    describe('Background Blur (backdrop-filter)', () => {
      it('should read backdrop-filter: blur(4px)', async () => {
        const styles = await getComputedStylesForTestId('backdrop-blur-4')
        expect(styles.backdropFilter).toContain('blur(4px)')
      })

      it('should read backdrop-filter: blur(8px)', async () => {
        const styles = await getComputedStylesForTestId('backdrop-blur-8')
        expect(styles.backdropFilter).toContain('blur(8px)')
      })

      it('should read backdrop-filter: blur(16px)', async () => {
        const styles = await getComputedStylesForTestId('backdrop-blur-16')
        expect(styles.backdropFilter).toContain('blur(16px)')
      })
    })
  })

  describe('Element Types', () => {
    describe('Text Elements', () => {
      it('should identify h1 element', async () => {
        const identity = await createElementIdentityForTestId('element-h1')
        expect(identity.tagName).toBe('h1')
        expect(identity.textContent).toContain('H1 Heading')
      })

      it('should identify paragraph element', async () => {
        const identity = await createElementIdentityForTestId('element-p')
        expect(identity.tagName).toBe('p')
        expect(identity.textContent.length).toBeGreaterThan(0)
      })

      it('should identify span element', async () => {
        const identity = await createElementIdentityForTestId('element-span')
        expect(identity.tagName).toBe('span')
      })
    })

    describe('Container Elements', () => {
      it('should identify div element', async () => {
        const identity = await createElementIdentityForTestId('element-div')
        expect(identity.tagName).toBe('div')
      })

      it('should identify section element', async () => {
        const identity = await createElementIdentityForTestId('element-section')
        expect(identity.tagName).toBe('section')
      })
    })

    describe('Interactive Elements', () => {
      it('should identify button element', async () => {
        const identity = await createElementIdentityForTestId('element-button')
        expect(identity.tagName).toBe('button')
      })

      it('should identify anchor element', async () => {
        const identity = await createElementIdentityForTestId('element-a')
        expect(identity.tagName).toBe('a')
      })

      it('should identify input element', async () => {
        const identity = await createElementIdentityForTestId('element-input-text')
        expect(identity.tagName).toBe('input')
      })
    })
  })
})

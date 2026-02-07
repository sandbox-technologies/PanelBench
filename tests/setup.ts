/**
 * Test Setup for Integration Tests
 * 
 * This module handles:
 * 1. Starting the Vite dev server
 * 2. Launching Puppeteer browser
 * 3. Providing utility functions to extract computed styles
 */

import puppeteer, { Browser, Page } from 'puppeteer'
import { spawn, ChildProcess } from 'child_process'
import waitOn from 'wait-on'

const TEST_PORT = 5174
const TEST_URL = `http://localhost:${TEST_PORT}`

let browser: Browser | null = null
let page: Page | null = null
let serverProcess: ChildProcess | null = null

/**
 * Start the Vite dev server
 */
export async function startServer(): Promise<void> {
  return new Promise((resolve, reject) => {
    serverProcess = spawn('npm', ['run', 'dev', '--', '--port', String(TEST_PORT)], {
      cwd: process.cwd(),
      stdio: 'pipe',
      shell: true,
    })

    serverProcess.stdout?.on('data', (data) => {
      const output = data.toString()
      if (output.includes('Local:') || output.includes('ready in')) {
        // Server is ready
      }
    })

    serverProcess.stderr?.on('data', (data) => {
      console.error('Server stderr:', data.toString())
    })

    serverProcess.on('error', reject)

    // Wait for server to be ready
    waitOn({
      resources: [TEST_URL],
      timeout: 30000,
    })
      .then(() => resolve())
      .catch(reject)
  })
}

/**
 * Stop the dev server
 */
export async function stopServer(): Promise<void> {
  if (serverProcess) {
    serverProcess.kill('SIGTERM')
    serverProcess = null
  }
}

/**
 * Launch browser and create page
 */
export async function launchBrowser(): Promise<void> {
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
}

/**
 * Close browser
 */
export async function closeBrowser(): Promise<void> {
  if (page) {
    await page.close()
    page = null
  }
  if (browser) {
    await browser.close()
    browser = null
  }
}

/**
 * Navigate to the test gym
 */
export async function navigateToTestGym(): Promise<void> {
  if (!page) throw new Error('Browser not launched')
  await page.goto(TEST_URL, { waitUntil: 'networkidle0' })
}

/**
 * Get computed styles for an element by test ID
 */
export async function getComputedStylesForTestId(testId: string): Promise<Record<string, string>> {
  if (!page) throw new Error('Browser not launched')

  const styles = await page.evaluate((id) => {
    const element = document.querySelector(`[data-testid="${id}"]`) as HTMLElement | null
    if (!element) {
      throw new Error(`Element with data-testid="${id}" not found`)
    }

    const computed = window.getComputedStyle(element)
    const result: Record<string, string> = {}

    // Extract all the properties the design panel cares about
    const properties = [
      // Position
      'position', 'top', 'right', 'bottom', 'left', 'transform',
      // Dimensions
      'width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight',
      // Layout
      'display', 'flexDirection', 'flexWrap', 'gap', 'columnGap', 'rowGap',
      'alignItems', 'justifyContent', 'gridTemplateColumns', 'gridTemplateRows',
      // Spacing
      'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
      'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
      // Appearance
      'opacity', 'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius',
      'borderBottomRightRadius', 'borderBottomLeftRadius', 'visibility', 'overflow',
      // Typography
      'fontFamily', 'fontWeight', 'fontSize', 'lineHeight', 'letterSpacing', 'textAlign',
      // Fill
      'backgroundColor',
      // Stroke
      'border', 'borderWidth', 'borderStyle', 'borderColor',
      'borderTop', 'borderRight', 'borderBottom', 'borderLeft',
      // Individual border side properties
      'borderTopWidth', 'borderTopStyle', 'borderTopColor',
      'borderRightWidth', 'borderRightStyle', 'borderRightColor',
      'borderBottomWidth', 'borderBottomStyle', 'borderBottomColor',
      'borderLeftWidth', 'borderLeftStyle', 'borderLeftColor',
      // Outline (for stroke position detection)
      'outline', 'outlineWidth', 'outlineStyle', 'outlineColor', 'outlineOffset',
      // Effects
      'boxShadow', 'filter', 'backdropFilter',
    ]

    for (const prop of properties) {
      result[prop] = computed.getPropertyValue(
        prop.replace(/([A-Z])/g, '-$1').toLowerCase()
      )
    }

    // Also capture inline styles for width/height to detect auto sizing
    // Empty string means not explicitly set (auto/inherited)
    result.inlineWidth = element.style.width || ''
    result.inlineHeight = element.style.height || ''

    return result
  }, testId)

  return styles
}

/**
 * Get element rect for an element by test ID
 */
export async function getElementRectForTestId(testId: string): Promise<{ x: number; y: number; width: number; height: number }> {
  if (!page) throw new Error('Browser not launched')

  const rect = await page.evaluate((id) => {
    const element = document.querySelector(`[data-testid="${id}"]`)
    if (!element) {
      throw new Error(`Element with data-testid="${id}" not found`)
    }
    const r = element.getBoundingClientRect()
    return { x: r.x, y: r.y, width: r.width, height: r.height }
  }, testId)

  return rect
}

/**
 * Get element info (tag, text, classes) for an element by test ID
 */
export async function getElementInfoForTestId(testId: string): Promise<{
  tagName: string
  textContent: string
  className: string
  outerHTML: string
}> {
  if (!page) throw new Error('Browser not launched')

  const info = await page.evaluate((id) => {
    const element = document.querySelector(`[data-testid="${id}"]`)
    if (!element) {
      throw new Error(`Element with data-testid="${id}" not found`)
    }
    return {
      tagName: element.tagName.toLowerCase(),
      textContent: element.textContent || '',
      className: element.className,
      outerHTML: element.outerHTML,
    }
  }, testId)

  return info
}

/**
 * Create an ElementIdentity-like object from a test ID
 * This mimics what the Inspector would create when selecting an element
 */
export async function createElementIdentityForTestId(testId: string): Promise<{
  tagName: string
  textContent: string
  className: string
  outerHTML: string
  rect: { x: number; y: number; width: number; height: number }
  computedStyles: Record<string, string>
  attributes: Record<string, string>
}> {
  const [info, rect, computedStyles] = await Promise.all([
    getElementInfoForTestId(testId),
    getElementRectForTestId(testId),
    getComputedStylesForTestId(testId),
  ])

  return {
    ...info,
    rect,
    computedStyles,
    attributes: { 'data-testid': testId },
  }
}

export { page, browser, TEST_URL }

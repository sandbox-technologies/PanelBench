import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.integration.test.ts'],
    testTimeout: 60000, // Integration tests may take longer
    hookTimeout: 60000,
    fileParallelism: false, // Run test files sequentially to share browser
  },
})

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: './',
    include: ['src/**/*.spec.ts', 'src/**/*.int-spec.ts'],
    globals: true,
    passWithNoTests: true,
    coverage: {
      provider: 'v8'
    }
  }
})

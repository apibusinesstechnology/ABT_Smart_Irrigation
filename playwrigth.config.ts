import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './dossier_test/e2e',
  use: {
    headless: true
  }
})

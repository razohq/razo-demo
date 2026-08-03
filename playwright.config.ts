import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // `list` for humans, razo's reporter for the structured razo-steps.json that
  // razo-upload sends to the dashboard (and the AI analyzer reads).
  reporter: [['list'], ['@razohq/razo/reporter']],
  // Fail fast on actionability waits so broken tests don't hang CI.
  use: { actionTimeout: 5_000 },
  expect: { timeout: 5_000 },
});

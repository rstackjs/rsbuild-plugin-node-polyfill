import { defineConfig } from '@rstest/core';

export default defineConfig({
  env: {
    // Let Rsbuild choose the mode based on the command.
    NODE_ENV: undefined,
  },
  include: ['test/e2e/**/*.test.ts'],
  isolate: false,
});

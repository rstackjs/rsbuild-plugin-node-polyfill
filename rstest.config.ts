import { defineConfig } from '@rstest/core';

export default defineConfig({
  projects: [
    {
      name: 'unit',
      include: ['test/unit/**/*.test.ts'],
    },
    {
      name: 'e2e',
      env: {
        // Let Rsbuild choose the mode based on the command.
        NODE_ENV: undefined,
      },
      include: ['test/e2e/**/*.test.ts'],
    },
  ],
});

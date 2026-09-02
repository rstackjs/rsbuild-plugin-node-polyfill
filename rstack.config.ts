// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';

define.lib({
  lib: [
    { syntax: 'es2021', dts: true },
    { format: 'cjs', syntax: 'es2021' },
  ],
});

define.test({
  extends: {},
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

define.fmt({
  singleQuote: true,
});

define.staged({
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}': ['rs lint', 'rs fmt'],
  '*.{json,md,mdx,css,scss,less,html,yml,yaml}': 'rs fmt',
});

define.lint(({ globals, js, ts }) => [
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['playground/src/**/*'],
    languageOptions: {
      globals: {
        ...globals.browser,
        Buffer: 'readonly',
      },
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: globals.rstest,
    },
  },
  {
    files: ['test/**/src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]);

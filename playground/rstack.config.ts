// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginNodePolyfill } from '../dist/index.js';

define.app({
  plugins: [pluginNodePolyfill()],
});

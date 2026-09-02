// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginNodePolyfill } from '../src/index.ts';

define.app({
  plugins: [pluginNodePolyfill()],
});

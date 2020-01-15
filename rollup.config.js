import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import sveltePreprocess from 'svelte-preprocess';

import pkg from './package.json';

const preprocess = sveltePreprocess({
  postcss: true,
});

const name = 'fulmo';

export default {
  input: 'cmp/index.js',
  output: [
    { file: pkg.module, 'format': 'es', name },
    { file: pkg.main, 'format': 'umd', name }
  ],
  plugins: [
    svelte({
      dev: false,
      hydratable: true,
      preprocess
    }),
    resolve(),
    commonjs()
  ]
};
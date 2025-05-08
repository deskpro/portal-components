import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('../package.json');

export default {
  input:  'src/index.ts',
  external: ['react', '@emotion/core', 'react-datepicker', packageJson.peerDependencies],
  output: [
    {
      file:      packageJson.main,
      format:    'cjs',
      sourcemap: true
    },
    {
      file:      packageJson.module,
      format:    'esm',
      sourcemap: true
    }
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
  ]
};

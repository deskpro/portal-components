import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('../package.json');

export default {
  input:  'src/index.ts',
  external: ['react', '@emotion/core', '@floating-ui/react', packageJson.peerDependencies],
  output: [
    {
      file:      packageJson.main,
      format:    'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        '@emotion/core': '@emotion/core',
        '@floating-ui/react': '@floating-ui/react'
      }
    },
    {
      file:      packageJson.module,
      format:    'esm',
      sourcemap: true,
      globals: {
        react: 'React',
        '@emotion/core': '@emotion/core',
        '@floating-ui/react': '@floating-ui/react'
      }
    }
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
  ]
};

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from "@rollup/plugin-babel";

const packageJson = require('../package.json');

export default {
  input:  'src/index.ts',
  external: ['react', '@emotion/core'],
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
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      extensions: [".js"],
      exclude: ["node_modules/**"],
    }),
  ]
};

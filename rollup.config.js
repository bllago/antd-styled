import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    // Preferably set as first plugin.
    peerDepsExternal(),
    babel({
      plugins: ['@babel/plugin-syntax-jsx'],
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs(),
    scss()
  ]
}

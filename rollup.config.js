import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/assets/js/main.js',
    output: [
        {
            sourcemap: true,
            format: 'iife',
            name: 'main',
            file: 'public/js/bundle.js',
        },
        {
            sourcemap: true,
            file: 'public/js/bundle.min.js',
            format: 'iife',
            name: 'main',
            plugins: [terser()],
        },
    ],
    plugins: [nodeResolve(), commonjs(), json()],
};
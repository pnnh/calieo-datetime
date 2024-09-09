import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import preserveDirectives from 'rollup-preserve-directives'
import replace from '@rollup/plugin-replace';
import stylexPlugin from '@stylexjs/rollup-plugin';
import copy from "rollup-plugin-copy";

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: true,
        assetFileNames: '[name][extname]'
    },
    external: [],
    plugins: [
        commonjs(),
        nodeResolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectories: ['node_modules', 'src'],
            preferBuiltins: false
        }),
        json(),
        typescript({
            tsconfig: 'tsconfig.json',
            sourceMap: true,
            outputToFilesystem: true,
        }),
        copy({
            targets: [
                {src: 'public/*', dest: 'dist'},
            ]
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production'),
            __buildDate__: () => JSON.stringify(new Date()),
            __buildVersion: 15
        }),
        stylexPlugin({
            fileName: 'index.css',
            classNamePrefix: 'ca-',
            importSources: [
                {from: 'react-strict-dom', as: 'css '}
            ]
        }),
        preserveDirectives(),
        strip({
            include: ['**/*.(js|mjs|ts|tsx)'],
            debugger: true,
            functions: ['console.log', 'console.debug'],
            sourceMap: true
        }),
        terser()
    ]
}


import babel from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
    input: 'src/index.js',
    external: ['react', 'lodash'],
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        production && terser()
    ]
}

import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
	input: 'src/index.ts',
	plugins: [
		commonjs(),
		typescript({
			declaration: true,
			declarationDir: 'dist/',
			rootDir: 'src',
		}),
	],
	external: [
		'prettier',
		'prettier/doc',
		'@astrojs/compiler',
		'@astrojs/compiler/utils',
		'@astrojs/compiler/sync',
		'sass-formatter',
	],
	output: {
		dir: 'dist',
		format: 'esm',
		sourcemap: true,
	},
});

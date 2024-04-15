import { resolve } from 'path';

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		setupFiles: './src/setupTests.ts',
		environment: 'jsdom',
	},
	resolve: {
		alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
	},
});

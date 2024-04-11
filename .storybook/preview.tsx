import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/global.scss';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ backgroundColor: '#212121' }}>
				<Story />
			</div>
		),
	],
};

export default preview;

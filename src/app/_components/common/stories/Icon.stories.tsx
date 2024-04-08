import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon';

const meta = {
	title: 'Common/Icon',
	component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		icon: 'home',
		color: '#0fd2af',
	},
};

export const Fill: Story = {
	args: {
		icon: 'home',
		type: 'fill',
		color: '#c0c0c0',
		size: '50px',
	},
};

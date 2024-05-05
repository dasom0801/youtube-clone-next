import type { Meta, StoryObj } from '@storybook/react';
import QuickPicksList from '../QuickPicksList';
import MockQuickPickList from '@/mocks/data/home/quick-picks.json';

const meta = {
	title: 'home/QuickPicksList',
	component: QuickPicksList,
} satisfies Meta<typeof QuickPicksList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		list: MockQuickPickList.list,
	},
};

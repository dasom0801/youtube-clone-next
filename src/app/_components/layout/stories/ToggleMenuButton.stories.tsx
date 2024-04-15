import type { Meta, StoryObj } from '@storybook/react';
import ToggleMenuButton from '../ToggleMenuButton';
import ToggleMenuProvider from '../ToggleMenuProvider';

const meta = {
	title: 'Layout/ToggleMenuButton',
	component: ToggleMenuButton,
} satisfies Meta<typeof ToggleMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {},
	decorators: (Story) => {
		return (
			<ToggleMenuProvider>
				<Story />
			</ToggleMenuProvider>
		);
	},
};

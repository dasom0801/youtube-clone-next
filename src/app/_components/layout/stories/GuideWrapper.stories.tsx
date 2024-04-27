import type { Meta, StoryObj } from '@storybook/react';
import GuideWrapper from '../GuideWrapper';
import ToggleMenuProvider from '../ToggleMenuProvider';

const meta = {
	title: 'layout/GuideWrapper',
	component: GuideWrapper,
} satisfies Meta<typeof GuideWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {},
	decorators: (Story) => (
		<ToggleMenuProvider>
			<Story />
		</ToggleMenuProvider>
	),
};

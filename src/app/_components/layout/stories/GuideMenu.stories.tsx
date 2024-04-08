import type { Meta, StoryObj } from '@storybook/react';
import GuideMenu from '../GuideMenu';

const meta = {
	title: 'Layout/GuideMenu',
	component: GuideMenu,
} satisfies Meta<typeof GuideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		menuList: [
			{ icon: 'home', label: '홈', path: '/', active: true },
			{ icon: 'explore', label: '둘러보기', path: '/explore' },
			{ icon: 'library_music', label: '보관함', path: '/library' },
		],
	},
	decorators: (Story) => {
		return (
			<div style={{ width: '240px' }}>
				<Story />
			</div>
		);
	},
};

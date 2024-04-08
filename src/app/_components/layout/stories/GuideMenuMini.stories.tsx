import type { Meta, StoryObj } from '@storybook/react';
import GuideMenuMini from '../GuideMenuMini';

const meta = {
	title: 'Layout/GuideMenuMini',
	component: GuideMenuMini,
} satisfies Meta<typeof GuideMenuMini>;

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
};

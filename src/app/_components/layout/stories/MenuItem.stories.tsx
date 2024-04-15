import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from '../MenuItem';

const meta = {
	title: 'Layout/MenuItem',
	component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: 'Home',
		path: '/',
		label: '홈',
	},
	decorators: (Story) => {
		return (
			<div style={{ width: '240px', padding: '0 8px' }}>
				<Story />
			</div>
		);
	},
	argTypes: {
		icon: {
			description:
				'메뉴 왼쪽에 위치하는 아이콘입니다. 구글 아이콘 이름을 입력해야합니다.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		path: {
			description: '메뉴를 클릭했을 때 이동할 주소입니다.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		label: {
			description: '메뉴의 이름입니다.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		active: {
			description:
				'메뉴의 액티브 상태입니다. 현 주소와 path가 일치할 때 액티브가 되어야 합니다.',
			table: {
				type: {
					summary: 'boolean',
				},
			},
		},
	},
};

export const Active: Story = {
	args: {
		icon: 'Home',
		path: '/',
		label: '홈',
		active: true,
	},
	decorators: (Story) => {
		return (
			<div style={{ width: '240px', padding: '0 8px' }}>
				<Story />
			</div>
		);
	},
};

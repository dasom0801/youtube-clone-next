import type { Meta, StoryObj } from '@storybook/react';
import MusicListItem from '../MusicListItem';
import MockMusicData from '../../../../mocks/data/common/music.json';

const meta = {
	title: 'common/MusicListItem',
	component: MusicListItem,
} satisfies Meta<typeof MusicListItem>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		...MockMusicData,
	},
};

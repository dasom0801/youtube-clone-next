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
	argTypes: {
		thumbnail: {
			description: '컴포넌트 왼쪽에 표시되는 앨범 커버 이미지입니다.',
		},
		title: {
			description: '노래 제목입니다.',
		},
		id: {
			description: '노래 id입니다.',
		},
		artist: {
			description: '가수 정보입니다. id와 name을 넘겨주어야 합니다.',
		},
		album: {
			description: '앨범 정보입니다. id와 title을 넘겨주어야 합니다.',
		},
	},
};

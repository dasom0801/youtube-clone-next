import type { Meta, StoryObj } from '@storybook/react';
import SectionTitle from '../SectionTitle';

const meta = {
	title: 'common/SectionTitle',
	component: SectionTitle,
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Title: Story = {
	args: {
		title: '추천 앨범',
	},
	argTypes: {
		title: {
			description: '해당 영역의 제목을 의미합니다..',
			type: {
				name: 'string',
				required: true,
			},
		},
		href: {
			description: '제목을 클릭했을 때 이동하는 경로입니다.',
			type: {
				name: 'string',
			},
		},
		description: {
			description: '제목 상단에 보이는 설명입니다.',
			type: {
				name: 'string',
			},
		},
		thumbnail: {
			description: '제목 왼쪽에 보이는 이미지입니다.',
		},
	},
};

export const WithLink: Story = {
	args: {
		title: '추천 재생목록',
		href: '/',
	},
};

export const WithSubTitle: Story = {
	args: {
		title: '빠른 선곡',
		description: '이 노래로 뮤직 스테이션 시작하기',
	},
};

export const WithRoundThumbnail: Story = {
	args: {
		title: 'fromis_9 (프로미스나인)',
		description: '아래 아티스트를 좋아한다면',
		thumbnail: {
			src: 'https://lh3.googleusercontent.com/ZmXAEDLEvSHvGsguOwJcQQ71Gw6wU_YuDajHy7iEfQTOJNp2ivHsZ_guZafqfCSW3Eb7PTV3diPbto4=w120-h120-l90-rj',
			alt: 'fromis_9',
			variant: 'round',
		},
	},
};

export const WithSquareThumbnail: Story = {
	args: {
		title: '집중을 위한 재즈',
		description: '아래 재생목록을 즐겨 듣는다면',
		thumbnail: {
			src: 'https://lh3.googleusercontent.com/5GZhlyoWqiPNO_1pvHb70PWvYDIC84Oaj9DwxAwybV5uVxr0jPxEqzpc9lnIYcn_k5KG-fwpROBN8BQ=w120-h120-l90-rj',
			alt: '집중을 위한 재즈',
			variant: 'square',
		},
	},
};

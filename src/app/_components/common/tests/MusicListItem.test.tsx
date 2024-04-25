import mockRouter from 'next-router-mock';
import { render } from '@/app/_lib/test/render';
import MockMusicData from '@/mocks/data/common/music.json';
import MusicListItem from '../MusicListItem';
import { screen } from '@testing-library/react';

beforeEach(() => {
	mockRouter.push('/initial-path');
});

it('썸네일을 클릭하면 /watch?v=id 경로로 이동한다.', async () => {
	const { clickThumbnail } = renderComponent();
	await clickThumbnail();
	expect(mockRouter.asPath).toEqual(`/watch?v=${MockMusicData.id}`);
});

it('제목을 클릭하면 /watch?v=id 경로로 이동한다.', async () => {
	const { clickTitle } = renderComponent();
	await clickTitle();
	expect(mockRouter.asPath).toEqual(`/watch?v=${MockMusicData.id}`);
});

it('가수 이름을 클릭하면 /channel/artist.id 경로로 이동한다.', async () => {
	const { clickArtist } = renderComponent();
	await clickArtist();
	expect(mockRouter.asPath).toEqual(`/channel/${MockMusicData.artist.id}`);
});

it('앨범 이름을 클릭하면 /browse/album.id 경로로 이동한다.', async () => {
	const { clickAlbum } = renderComponent();
	await clickAlbum();
	expect(mockRouter.asPath).toEqual(`/browse/${MockMusicData.album.id}`);
});

const renderComponent = () => {
	const { user } = render(<MusicListItem {...MockMusicData} />);
	const thumbnail = () => screen.getByAltText(MockMusicData.title);

	const title = () =>
		screen.getAllByRole('link', { name: MockMusicData.title })[1];
	const artist = () =>
		screen.getByRole('link', { name: MockMusicData.artist.name });
	const album = () =>
		screen.getAllByRole('link', { name: MockMusicData.album.title })[2];

	const clickThumbnail = async () => await user.click(thumbnail());
	const clickTitle = async () => await user.click(title());
	const clickArtist = async () => await user.click(artist());
	const clickAlbum = async () => await user.click(album());

	return {
		clickThumbnail,
		clickTitle,
		clickArtist,
		clickAlbum,
	};
};

import mockRouter from 'next-router-mock';
import { screen } from '@testing-library/react';
import { render } from '@/app/_lib/test/render';
import GuideWrapper from '../GuideWrapper';

beforeEach(() => {
	mockRouter.push('/initial-path');
});

it('홈 버튼을 클릭하면 / 경로로 이동한다.', async () => {
	const { clickHome } = renderComponent();
	await clickHome();
	expect(mockRouter.asPath).toEqual('/');
});

it('둘러보기 버튼을 클릭하면 /explore 경로로 이동한다.', async () => {
	const { clickExplore } = renderComponent();
	await clickExplore();
	expect(mockRouter.asPath).toEqual('/explore');
});

it('보관함 버튼을 클릭하면 /library 경로로 이동한다.', async () => {
	const { clickLibrary } = renderComponent();
	await clickLibrary();
	expect(mockRouter.asPath).toEqual('/library');
});

const renderComponent = () => {
	const { user } = render(<GuideWrapper />);
	const home = () => screen.getByRole('link', { name: '홈' });
	const explore = () => screen.getByRole('link', { name: '둘러보기' });
	const library = () => screen.getByRole('link', { name: '보관함' });

	const clickHome = async () => await user.click(home());
	const clickExplore = async () => await user.click(explore());
	const clickLibrary = async () => await user.click(library());

	return {
		clickHome,
		clickExplore,
		clickLibrary,
	};
};

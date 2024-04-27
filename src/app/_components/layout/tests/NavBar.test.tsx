import mockRouter from 'next-router-mock';
import { screen } from '@testing-library/react';
import NavBar from '../NavBar';
import { render } from '@/app/_lib/test/render';

it('로고를 클릭하면 / 경로로 페이지가 이동한다.', async () => {
	mockRouter.push('/initial-path');
	const { clickLogo } = renderComponent();
	await clickLogo();
	expect(mockRouter.asPath).toEqual('/');
});

const renderComponent = () => {
	const { user } = render(<NavBar />);
	const logo = () => screen.getByAltText(/youtube music logo/);
	const clickLogo = async () => await user.click(logo());

	return {
		clickLogo,
	};
};

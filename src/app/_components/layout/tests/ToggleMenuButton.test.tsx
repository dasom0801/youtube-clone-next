import { screen } from '@testing-library/react';
import { render } from '@/app/_lib/test/render';
import ToggleMenuButton from '../ToggleMenuButton';
import ToggleMenuProvider, * as ToggleMenu from '../ToggleMenuProvider';

const mockFn = vi.fn();
vi.spyOn(ToggleMenu, 'useToggleMenu').mockImplementation(() => ({
	isOpen: true,
	onToggleMenu: mockFn,
}));

it('버튼을 클릭하면 ToggleMenuContext의 onToggleMenu 함수가 호출된다.', async () => {
	const { clickButton } = renderComponent();
	await clickButton();
	expect(mockFn).toHaveBeenCalledOnce();
});

const renderComponent = () => {
	const { user } = render(
		<ToggleMenuProvider>
			<ToggleMenuButton />
		</ToggleMenuProvider>
	);

	const button = () => screen.getByRole('button');
	const clickButton = async () => await user.click(button());

	return {
		clickButton,
	};
};

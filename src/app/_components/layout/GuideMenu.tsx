import MenuItem, { MenuItemProps } from './MenuItem';

interface Props {
	menuList: MenuItemProps[];
}

const GuideMenu = ({ menuList }: Props) => {
	return (
		<ul>
			{menuList.map((menu) => (
				<li key={menu.path}>
					<MenuItem {...menu} />
				</li>
			))}
		</ul>
	);
};
export default GuideMenu;

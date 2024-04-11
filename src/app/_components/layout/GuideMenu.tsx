'use client';
import clsx from 'clsx';
import MenuItem, { MenuItemProps } from './MenuItem';
import styles from './styles/guide.module.scss';
import { useToggleMenu } from './ToggleMenuProvider';

const menuList: MenuItemProps[] = [
	{ icon: 'home', label: '홈', path: '/' },
	{ icon: 'explore', label: '둘러보기', path: '/explore' },
	{ icon: 'library_music', label: '보관함', path: '/library' },
];

const GuideMenu = () => {
	const { isOpen } = useToggleMenu();
	return (
		<ul
			className={clsx({
				[styles.guideMenu]: isOpen,
				[styles.guideMenuMini]: !isOpen,
			})}
		>
			{menuList.map((menu) => (
				<li key={menu.path}>
					<MenuItem {...menu} mini={!isOpen} />
				</li>
			))}
		</ul>
	);
};
export default GuideMenu;

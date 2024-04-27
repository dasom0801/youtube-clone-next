import MenuItem, { MenuItemProps } from './MenuItem';
import styles from './styles/guide.module.scss';

const menuList: MenuItemProps[] = [
	{ icon: 'home', label: '홈', path: '/' },
	{ icon: 'explore', label: '둘러보기', path: '/explore' },
	{ icon: 'library_music', label: '보관함', path: '/library' },
];

const GuideMenu = () => {
	return (
		<ul className={styles.guideMenu}>
			{menuList.map((menu) => (
				<li key={menu.path}>
					<MenuItem {...menu} />
				</li>
			))}
		</ul>
	);
};
export default GuideMenu;

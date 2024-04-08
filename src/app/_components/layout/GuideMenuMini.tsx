import MenuItem, { MenuItemProps } from './MenuItem';
import styles from './styles/guide.module.scss';

interface Props {
	menuList: MenuItemProps[];
}

const GuideMenuMini = ({ menuList }: Props) => {
	return (
		<ul className={styles.guideMenuMini}>
			{menuList.map((menu) => (
				<li key={menu.path}>
					<MenuItem {...menu} mini={true} />
				</li>
			))}
		</ul>
	);
};
export default GuideMenuMini;

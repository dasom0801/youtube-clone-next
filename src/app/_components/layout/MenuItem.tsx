import Link from 'next/link';
import clsx from 'clsx';
import Icon from '../common/Icon';
import styles from './styles/menuItem.module.scss';

export interface MenuItemProps {
	icon: string;
	path: string;
	label: string;
	active?: boolean;
	mini?: boolean;
}

const MenuItem = ({ icon, path, label, active, mini }: MenuItemProps) => {
	return (
		<Link
			href={path}
			className={clsx({
				[styles.menuItem]: true,
				[styles.active]: active,
				[styles.mini]: mini,
			})}
		>
			<Icon icon={icon} type={active ? 'fill' : 'outline'} />
			<span className={styles.label}>{label}</span>
		</Link>
	);
};
export default MenuItem;

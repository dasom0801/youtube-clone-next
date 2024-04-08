import Link from 'next/link';
import clsx from 'clsx';
import Icon from '../common/Icon';
import styles from './styles/menuItem.module.scss';

interface Props {
	icon: string;
	path: string;
	label: string;
	active?: boolean;
}

const MenuItem = ({ icon, path, label, active }: Props) => {
	return (
		<Link
			href={path}
			className={clsx(styles.menuItem, active && styles.active)}
		>
			<Icon icon={icon} type={active ? 'fill' : 'outline'} />
			<span className={styles.label}>{label}</span>
		</Link>
	);
};
export default MenuItem;

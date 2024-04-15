'use client';
import { memo } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Icon from '../common/Icon';
import styles from './styles/menuItem.module.scss';
import { useToggleMenu } from './ToggleMenuProvider';

export interface MenuItemProps {
	icon: string;
	path: string;
	label: string;
	active?: boolean;
}

const MenuItem = memo(function MenuItem({
	icon,
	path,
	label,
	active,
}: MenuItemProps) {
	const { isOpen } = useToggleMenu();
	return (
		<Link
			href={path}
			className={clsx({
				[styles.menuItem]: true,
				[styles.menuItemActive]: active,
				[styles.menuItemMini]: !isOpen,
			})}
		>
			<Icon icon={icon} type={active ? 'fill' : 'outline'} />
			<span className={styles.label}>{label}</span>
		</Link>
	);
});
export default MenuItem;

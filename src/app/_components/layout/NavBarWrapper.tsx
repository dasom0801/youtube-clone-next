'use client';
import clsx from 'clsx';
import NavBar from './NavBar';
import { useScrollTopDetector } from './lib/hooks/useScrollTopDetector';
import styles from './styles/nav.module.scss';

const NavBarWrapper = () => {
	const { isScrollTop } = useScrollTopDetector();

	return (
		<div
			className={clsx({
				[styles.wrapper]: true,
				[styles.wrapperScrolled]: !isScrollTop,
			})}
		>
			<NavBar />
		</div>
	);
};
export default NavBarWrapper;

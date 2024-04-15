import Logo from './Logo';
import ToggleMenuButton from './ToggleMenuButton';
import styles from './styles/nav.module.scss';

const NavBar = () => {
	return (
		<>
			<div className={styles.leftContent}>
				<ToggleMenuButton />
				<Logo />
			</div>
		</>
	);
};
export default NavBar;

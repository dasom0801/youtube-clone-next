'use client';

import { useToggleMenu } from './ToggleMenuProvider';
import styles from './styles/nav.module.scss';
import Icon from '../common/Icon';

const ToggleMenuButton = () => {
	const { onToggleMenu } = useToggleMenu();
	return (
		<button className={styles.toggleButton} onClick={onToggleMenu}>
			<Icon icon='menu' />
		</button>
	);
};
export default ToggleMenuButton;

'use client';

import { IoMenuOutline } from '@react-icons/all-files/io5/IoMenuOutline';
import { useToggleMenu } from './ToggleMenuProvider';
import styles from './styles.module.scss';

const ToggleMenuButton = () => {
	const { onToggleMenu } = useToggleMenu();
	return (
		<button className={styles.toggleButton} onClick={onToggleMenu}>
			<IoMenuOutline />
		</button>
	);
};
export default ToggleMenuButton;

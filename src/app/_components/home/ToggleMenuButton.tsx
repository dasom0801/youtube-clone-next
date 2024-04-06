'use client';

import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';
import { useToggleMenu } from './ToggleMenuProvider';
import styles from './styles.module.scss';

const ToggleMenuButton = () => {
	const { onToggleMenu } = useToggleMenu();
	return (
		<button className={styles.toggleButton} onClick={onToggleMenu}>
			<AiOutlineMenu />
		</button>
	);
};
export default ToggleMenuButton;

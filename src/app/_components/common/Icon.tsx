import clsx from 'clsx';
import styles from './styles/Icon.module.scss';

interface Props {
	icon: string;
	type?: 'outline' | 'fill';
	size?: `${number}px`;
	color?: string;
}

const Icon = ({
	icon,
	type = 'outline',
	size: fontSize = '24px',
	color = '#FFF',
}: Props) => {
	return (
		<span
			className={clsx(
				'material-symbols-outlined',
				type === 'fill' ? styles.fill : styles.outlined
			)}
			style={{
				fontSize,
				color,
			}}
		>
			{icon}
		</span>
	);
};
export default Icon;

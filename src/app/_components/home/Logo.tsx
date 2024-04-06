import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

const Logo = () => {
	return (
		<Link href='/' className={styles.logo}>
			<Image src='logo.svg' alt='youtube music logo' width={80} height={24} />
		</Link>
	);
};
export default Logo;

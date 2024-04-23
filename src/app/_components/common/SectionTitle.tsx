import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './styles/SectionTitle.module.scss';

interface Props {
	title: string;
	href?: string;
	description?: string;
	thumbnail?: {
		src: string;
		alt: string;
		variant?: 'round' | 'square';
	};
}

const Title = ({ href, children }: PropsWithChildren<{ href?: string }>) => {
	return href ? (
		<Link className={styles.titleLink} href={href}>
			{children}
		</Link>
	) : (
		<div className={styles.title}>{children}</div>
	);
};

const SectionTitle = ({ title, href, description, thumbnail }: Props) => {
	return (
		<div className={styles.wrapper}>
			{thumbnail && (
				<div
					className={clsx({
						[styles.thumbnail]: true,
						[styles.thumbnailRound]: thumbnail?.variant === 'round',
					})}
				>
					<Image
						src={thumbnail.src}
						alt={thumbnail.alt}
						style={{
							width: '100%',
							height: 'auto',
						}}
						width={56}
						height={56}
					/>
				</div>
			)}
			<h2>
				<div className={styles.description}>{description}</div>
				<Title href={href}>{title}</Title>
			</h2>
		</div>
	);
};
export default SectionTitle;

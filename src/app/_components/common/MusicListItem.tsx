import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import styles from './styles/MusicListItem.module.scss';

const MusicListItem = ({ id, thumbnail, title, artist, album }: Music) => {
	return (
		<div className={styles.wrapper}>
			<Link className={styles.thumbnail} href={`/watch?v=${id}`}>
				<Image src={thumbnail} alt={title} width={48} height={48} />
				<div>
					<Icon icon='play_arrow' type='fill' />
				</div>
			</Link>
			<div className={styles.textWrapper}>
				<Link className={styles.title} href={`/watch?v=${id}`}>
					{title}
				</Link>
				<div className={styles.info}>
					<div className={styles.artist}>
						<Link href={`/channel/${artist.id}`}>{artist.name}</Link>
					</div>

					<div className={styles.album}>
						<Link href={`/browse/${album.id}`}>{album.title}</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MusicListItem;

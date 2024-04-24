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
			<div>
				<Link className={styles.title} href={`/watch?v=${id}`}>
					{title}
				</Link>
				<div className={styles.info}>
					<Link className={styles.artist} href={`/channel/${artist.id}`}>
						<span>{artist.name}</span>
					</Link>
					<Link className={styles.album} href={`/browse/${album.id}`}>
						<span>{album.title}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default MusicListItem;

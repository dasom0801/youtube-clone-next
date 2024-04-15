import styles from './styles/guide.module.scss';
import GuideMenu from './GuideMenu';

const GuideWrapper = () => {
	return (
		<div className={styles.guideWrapper} role='navigation'>
			<div className={styles.guideContent}>
				<GuideMenu />
			</div>
		</div>
	);
};
export default GuideWrapper;

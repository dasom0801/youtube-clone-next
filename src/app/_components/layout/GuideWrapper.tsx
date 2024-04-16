'use client';
import clsx from 'clsx';
import GuideMenu from './GuideMenu';
import { useScrollTopDetector } from './lib/hooks/useScrollTopDetector';
import styles from './styles/guide.module.scss';

const GuideWrapper = () => {
	const { isScrollTop } = useScrollTopDetector();
	return (
		<div
			className={clsx({
				[styles.guideWrapper]: true,
				[styles.guideWrapperScrolled]: !isScrollTop,
			})}
			role='navigation'
		>
			<div className={styles.guideContent}>
				<GuideMenu />
			</div>
		</div>
	);
};
export default GuideWrapper;

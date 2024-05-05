import MusicListItem from '../common/MusicListItem';
import SectionTitle from '../common/SectionTitle';
import styles from './styles/QuickPicksList.module.scss';

interface Props {
	list: Music[];
}

const QuickPicksList = ({ list }: Props) => {
	return (
		<>
			<SectionTitle
				title='빠른 선곡'
				description='이 노래로 뮤직 스테이션 시작하기'
			/>
			<ul className={styles.list}>
				{list.map((item) => (
					<MusicListItem {...item} key={item.id} />
				))}
			</ul>
		</>
	);
};
export default QuickPicksList;

import { homeQueries } from '@/app/_lib/queries';
import { useQuery } from '@tanstack/react-query';

const useQuickPicksQuery = () => {
	return useQuery(homeQueries.quickPicks());
};

export default useQuickPicksQuery;

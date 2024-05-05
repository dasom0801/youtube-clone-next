import { queryOptions } from '@tanstack/react-query';
import { getQuickPicks } from '../api/home';

export const homeQueries = {
	all: () => ['home'],
	quickPicks: () =>
		queryOptions({
			queryKey: [...homeQueries.all(), 'quickPicks'],
			queryFn: () => getQuickPicks(),
		}),
};

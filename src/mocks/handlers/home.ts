import { HttpResponse, http } from 'msw';
import quickPicks from '../data/home/quick-picks.json';

export const handlers = [
	http.get(`/api/quick-picks`, () => {
		return HttpResponse.json(quickPicks);
	}),
];

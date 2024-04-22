import { HttpResponse, http } from 'msw';
import quickPick from '../data/home/quick-picks.json';

export const handlers = [
	http.get(`/api/quick-pick`, () => {
		return HttpResponse.json(quickPick);
	}),
];

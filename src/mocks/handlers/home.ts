import { HttpResponse, http } from 'msw';
import quickPicks from '../data/home/quick-picks.json';
import chart from '../data/home/chart.json';

export const handlers = [
	http.get(`/api/quick-picks`, () => {
		return HttpResponse.json(quickPicks);
	}),
	http.get(`/api/chart/playlist`, () => {
		return HttpResponse.json(chart);
	}),
];

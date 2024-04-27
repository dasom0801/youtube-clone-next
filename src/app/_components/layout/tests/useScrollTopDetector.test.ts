import { fireEvent, renderHook, waitFor } from '@testing-library/react';
import {
	useScrollTopDetector,
	SCROLL_TOP_THRESHOLD,
} from '../lib/hooks/useScrollTopDetector';

beforeEach(() => {
	fireEvent.scroll(window, {
		target: {
			scrollY: 0,
		},
	});
});

it(`scroll Y 값이 ${SCROLL_TOP_THRESHOLD} 이하이면 true를 반환한다.`, async () => {
	const { result } = renderHook(useScrollTopDetector);
	fireEvent.scroll(window, {
		target: {
			scrollY: SCROLL_TOP_THRESHOLD - 1,
		},
	});
	await new Promise((r) => setTimeout(r, 1000));
	expect(result.current.isScrollTop).toBe(true);
});

it('scroll Y 값이 5 이상이면 false를 반환한다.', async () => {
	const { result } = renderHook(useScrollTopDetector);
	fireEvent.scroll(window, {
		target: {
			scrollY: SCROLL_TOP_THRESHOLD + 5,
		},
	});
	await new Promise((r) => setTimeout(r, 1000));
	expect(result.current.isScrollTop).toBe(false);
});

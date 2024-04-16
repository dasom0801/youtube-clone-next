import { debounce } from '@/app/_lib/utils';
import { useEffect, useState } from 'react';

export const SCROLL_TOP_THRESHOLD = 5;

export const useScrollTopDetector = () => {
	const [currentScrollY, setCurrentScrollY] = useState(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY <= SCROLL_TOP_THRESHOLD) {
				if (currentScrollY > SCROLL_TOP_THRESHOLD) {
					setCurrentScrollY(window.scrollY);
				}
			} else {
				if (currentScrollY <= SCROLL_TOP_THRESHOLD) {
					setCurrentScrollY(window.scrollY);
				}
			}
		};

		const debouncedHandleScroll = debounce(handleScroll, 10);

		window.addEventListener('scroll', debouncedHandleScroll);
		return () => {
			window.removeEventListener('scroll', debouncedHandleScroll);
		};
	}, [currentScrollY]);

	return { isScrollTop: currentScrollY <= SCROLL_TOP_THRESHOLD };
};

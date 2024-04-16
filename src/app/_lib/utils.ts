export const debounce = <T extends Function>(func: T, delay: number) => {
	let timer: number | null = null;

	return (...args: any[]) => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(func, delay, ...args);
	};
};

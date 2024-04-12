export const changeBackgroundColor = (isDefaultColor: boolean) => {
	const body = document.body;
	const color = isDefaultColor ? '#212121' : '#030303';
	body.style.setProperty('--guide-bg-color', color);
};

export const changeGuideSideBorder = (hide: boolean) => {
	const body = document.body;
	const border = hide
		? '1px solid transparent'
		: '1px solid rgba(255, 255, 255, 0.15)';
	body.style.setProperty('--guide-side-border', border);
};

export const changeGuideMenuStyles = (isOpen: boolean) => {
	const body = document.body;
	const styles = {
		open: {
			bgColor: '#030303',
			border: '1px solid rgba(255, 255, 255, 0.15)',
			width: '240px',
		},
		close: {
			bgColor: 'transparent',
			border: '1px solid transparent',
			width: '72px',
		},
	}[isOpen ? 'open' : 'close'];
	body.style.setProperty('--guide-bg-color', styles.bgColor);
	body.style.setProperty('--guide-side-border', styles.border);
	body.style.setProperty('--guide-width', styles.width);
};

'use client';

let started = false;
if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
	if (typeof window !== 'undefined') {
		(async () => {
			const { worker } = await import('../../../../mocks/browser');
			worker.start();
		})();
	}
}

const SetupWorkerBrowser = () => {
	return null;
};
export default SetupWorkerBrowser;

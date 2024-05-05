const SetupWorkerServer = () => {
	if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
		if (typeof window === 'undefined') {
			(async () => {
				const { server } = await import('../../../../mocks/node');
				server.listen();
			})();
		}
	}
	return null;
};
export default SetupWorkerServer;

import SetupWorkerBrowser from './SetupWorkerBrowser';
import SetupWorkerServer from './SetupWorkerServer';

const SetupWorker = () => {
	return (
		<>
			<SetupWorkerServer />
			<SetupWorkerBrowser />
		</>
	);
};
export default SetupWorker;

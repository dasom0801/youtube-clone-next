import axios from 'axios';

export const getQuickPicks = async () => {
	return (await axios.get<{ list: Music[] }>(`/api/quick-picks`)).data;
};

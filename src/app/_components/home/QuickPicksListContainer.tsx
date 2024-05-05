'use client';

import QuickPicksList from './QuickPicksList';
import useQuickPicksQuery from './hooks/useQuickPicksQuery';

const QuickPicksListContainer = () => {
	const { data, error } = useQuickPicksQuery();

	if (error) {
		return <></>;
	}

	return data && <QuickPicksList list={data.list} />;
};
export default QuickPicksListContainer;

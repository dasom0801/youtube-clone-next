import React, { ReactNode } from 'react';
import { RenderOptions, render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

export const render = (ui: ReactNode, options: RenderOptions = {}) => {
	const user = userEvent.setup();
	return {
		user,
		...rtlRender(<MemoryRouterProvider>{ui}</MemoryRouterProvider>, options),
	};
};

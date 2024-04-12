'use client';

import React, {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { changeBackgroundColor, changeGuideSideBorder } from './lib/utils';

interface ToggleMenuContextValue {
	isOpen: boolean;
	onToggleMenu: () => void;
}

const ToggleMenuContext = createContext<ToggleMenuContextValue>({
	isOpen: true,
	onToggleMenu: () => {},
});

type Props = PropsWithChildren<{}>;
export default function ToggleMenuProvider({ children }: Props) {
	const [isOpen, toggleMenu] = useState(true);
	const onToggleMenu = useCallback(() => {
		toggleMenu((state) => !state);
	}, [toggleMenu]);

	useEffect(() => {
		changeBackgroundColor(!isOpen);
		changeGuideSideBorder(!isOpen);
	}, [isOpen]);

	return (
		<ToggleMenuContext.Provider value={{ isOpen, onToggleMenu }}>
			{children}
		</ToggleMenuContext.Provider>
	);
}

export const useToggleMenu = () => {
	const context = useContext(ToggleMenuContext);

	if (!context) {
		throw new Error(
			'useToggleMnu는 ToggleMenuProvider와 함께 사용해야합니다. '
		);
	}
	return context;
};

'use client';

import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useState,
} from 'react';

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
	const onToggleMenu = () => {
		toggleMenu((state) => !state);
	};

	return (
		<ToggleMenuContext.Provider value={{ isOpen, onToggleMenu }}>
			{children}
		</ToggleMenuContext.Provider>
	);
}

export const useToggleMenu = () => {
	return useContext(ToggleMenuContext);
};

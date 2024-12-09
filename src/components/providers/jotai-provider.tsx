"use client";

import { Provider } from "jotai";
import { FC } from "react";

type Props = {
	children: React.ReactNode;
};

export const JotaiProvider: FC<Props> = ({ children }) => (
	<Provider>{children}</Provider>
);

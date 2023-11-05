"use client";
import { useEffect } from "react";

const LocomotiveScroll = ({ children }) => {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return <div>{children}</div>;
};

export default LocomotiveScroll;

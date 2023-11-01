"use client";

import { useState, useEffect } from "react";
import styles from "./ScrollToTopBtn.module.css";
import toTopImg from "../../public/icons/arrowhead-up.png";
import Image from "next/image";

const ScrollToTopBtn = () => {
	const [showButton, setShowButton] = useState(false);
	useEffect(() => {
		const handleScrollButtonVisiblity = () => {
			window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
		};
		window.addEventListener("scroll", handleScrollButtonVisiblity);
		return () => {
			window.removeEventListener("scroll", handleScrollButtonVisiblity);
		};
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div
			className={styles.container}
			style={
				showButton
					? { transform: "translateY(-50px) " }
					: { transform: "translateY(80px) " }
			}
		>
			<div className={styles.scrollToTopBtn} onClick={handleScrollToTop}>
				<Image
					className={styles.scrollToTopBtnImg}
					src={toTopImg}
					alt="scrollToTop"
					width={20}
					height={20}
				/>
			</div>
		</div>
	);
};

export default ScrollToTopBtn;

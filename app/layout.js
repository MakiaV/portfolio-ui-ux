import { Raleway } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollToTopBtn from "@/components/scrollToTopBtn/ScrollToTopBtn";
import LocomotiveScroll from "@/components/locomotiveScroll";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
	title: "EVA UI | UX DESIGN",
	description: "UI | UX DESIGN PORTFOLIO",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<LocomotiveScroll>
					<div>
						<Header />
						{children}
						<Footer />
					</div>
					<ScrollToTopBtn />
				</LocomotiveScroll>
			</body>
		</html>
	);
}

import { BiCopyright } from "react-icons/bi";
import styles from "./Footer.module.css";

const Footer = () => {
	const dt = new Date();

	return (
		<div className={styles.container}>
			<BiCopyright />
			<p>{dt.getFullYear()}</p>
			<p>Eva Arnaud</p>
		</div>
	);
};

export default Footer;

import Image from "next/image";
import styles from "./Header.module.css";
import profilePic from "../../public/images/profil.jpeg";
import Link from "next/link";
import homeIcon from "../../public/icons/home.png";

const Header = () => {
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.container}>
				<div className={styles.logoWrapper}>
					<div className={styles.logo}>
						<Image
							src={profilePic}
							alt="profile"
							width={50}
							height={50}
							className={styles.profileImg}
							priority={true}
						/>
					</div>
					<Link href="/" className={styles.home}>
						<Image
							src={homeIcon}
							alt="home"
							width={30}
							height={30}
						/>
					</Link>
				</div>

				<div className={styles.menuWrapper}>
					<Link href="/#contact" className={styles.menuItem}>
						Contact
					</Link>
					<Link href="/projects" className={styles.menuItem}>
						Projects
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;

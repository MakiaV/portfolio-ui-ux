import Image from "next/image";
import styles from "./page.module.css";
import profilImage from "../public/images/profil.jpeg";
import contacts from "@/assets/contacts";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.profilWrapper}>
				<div className={styles.profil}>
					<span className={styles.hello}>Hello, my name is</span>
					<span className={styles.profilName}>Eva Arnaud,</span>
					<span className={styles.desc}>
						a French UX | UI Designer based in Houston.
					</span>
				</div>
				<div className={styles.profilImgWrapper}>
					<Image
						src={profilImage}
						alt="profil"
						width={250}
						height={250}
						className={styles.profileImg}
					/>
				</div>
			</div>
			<p className={styles.descLong}>
				Passionate UI/UX Designer with a keen eye for creating intuitive
				and visually appealing digital experiences. I specialize in
				crafting user-centric interfaces that seamlessly blend form and
				function to enhance user satisfaction. Experienced in
				wireframing, prototyping, and collaborating with
				cross-functional teams to transform complex ideas into
				user-friendly solutions. Constantly driven to stay updated with
				the latest design trends and technologies to deliver innovative
				and delightful user experiences.
			</p>

			<div className={styles.contactWrapper} id="contact">
				<p>Contact</p>
				<span>GET IN TOUCH</span>
				<div className={styles.contactContainer}>
					{contacts.map((contact) => (
						<div key={contact.id} className={styles.contactItem}>
							<Image
								src={contact.image}
								alt="contact"
								width={15}
								height={15}
							/>

							<span className={styles.contactTitel}>
								{contact.title}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

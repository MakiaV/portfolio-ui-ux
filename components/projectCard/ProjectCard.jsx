"use client";

import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { useEffect, useLayoutEffect, useState } from "react";

const ProjectCard = ({ project }) => {
	const [showTitle, setShowTitle] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {}, []);

	const handleAnimation = () => {
		setLoaded(true);
		setShowTitle(!showTitle);
	};

	return (
		<div className={styles.container}>
			<div
				className={styles.imageWrapper}
				onMouseEnter={handleAnimation}
				onMouseLeave={() => setShowTitle(!showTitle)}
			>
				<Image
					src={project.image}
					alt="image"
					width={400}
					height={300}
					className={styles.image}
				/>
			</div>

			{showTitle ? (
				<span className={styles.title}>{project.title}</span>
			) : (
				<span className={styles.title}>{project.title}</span>
			)}
		</div>
	);
};

export default ProjectCard;

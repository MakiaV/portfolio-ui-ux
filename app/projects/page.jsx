import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./Projects.module.css";
import projects from "@/assets/projects";

const Projects = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>My projects</h1>
			<div className={styles.projects}>
				{projects?.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;

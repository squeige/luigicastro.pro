import styles from './bio.module.css';

function Bio() {
	return (
		<div className={styles.main}>
			<p>
				I am an IT veteran with 15 years of experience in IT and infrastructure. My strength lies in rapid adaptation to evolving tech landscapes. Whether it's optimizing Linux systems, orchestrating Windows environments, or diving into virtualization. I excel in troubleshooting, problem solving, optimizing, and innovating. I'm passionate about exploring new technologies.
			</p>

			<div className={styles.menu}>
			<div className={styles.card}>
				<div className={styles.thumb}></div>
					<h1>Diaries of Geek</h1>
					<p>Explore my writings and notes chronicling passions, endeavors, and exciting projects. Delve into the realm of creativity, innovation, and exploration as I share the stories behind my journey through various realms of knowledge and discovery.</p>
				</div>
			<div className={styles.card}>
				<div className={styles.thumb}></div>
					<h1>My GIT Repo</h1>
					<p>Explore my personal Git repository, where I document my tech journey. Find code snippets, technical documents, and innovative solutions as I dive into the world of software development. Join me on this journey of exploration and learning!</p>
				</div>
			<div className={styles.card}>
				<div className={styles.thumb}></div>
					<h1>Resume</h1>
					<p>Explore my  books, writings, and notes chronicling my latest passions, endeavors, and exciting projects. Delve into the realm of creativity, innovation, and exploration as I share the stories behind my journey through various realms of knowledge and discovery.</p>
				</div>
			</div>
		</div>
	)
}

export default Bio

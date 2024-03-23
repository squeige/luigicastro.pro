import styles from './bio.module.css';

function Bio() {
	return (
		<div className={styles.main}>

			<p>
				I am an IT veteran with 15 years of experience in IT and infrastructure. My strength lies in rapid adaptation to evolving tech landscapes. Whether it's optimizing Linux systems, orchestrating Windows environments, or diving into virtualization. I excel in troubleshooting, problem solving, optimizing, and innovating. I'm passionate about exploring new technologies.
			</p>

			<div className={styles.menu}>
			<div className={styles.card}>
				<div className={styles.image}></div>
					<h1>Canvas</h1>
					<p>Explore my  books, writings, and notes chronicling my latest passions, endeavors, and exciting projects. Delve into the realm of creativity, innovation, and exploration as I share the stories behind my journey through various realms of knowledge and discovery.</p>
				</div>
			<div className={styles.card}>
				<div className={styles.image}></div>
					<h1>My GIT Repo</h1>
					<p>Explore my  books, writings, and notes chronicling my latest passions, endeavors, and exciting projects. Delve into the realm of creativity, innovation, and exploration as I share the stories behind my journey through various realms of knowledge and discovery.</p>
				</div>
			<div className={styles.card}>
				<div className={styles.image}></div>
					<h1>Traditional Resume</h1>
					<p>Explore my  books, writings, and notes chronicling my latest passions, endeavors, and exciting projects. Delve into the realm of creativity, innovation, and exploration as I share the stories behind my journey through various realms of knowledge and discovery.</p>
				</div>

			</div>

		</div>
	)
}

export default Bio

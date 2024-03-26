import styles from './bio.module.css';
import git_lgt from '../../img/git_lgt.svg';
import linked_lgt from '../../img/linked_lgt.svg';

function Bio() {
	return (
		<div className={styles.main}>
			<p>
				I am an IT veteran with 15 years of experience in IT and infrastructure. My strength lies in rapid adaptation to evolving tech landscapes. Whether it's optimizing Linux systems, orchestrating Windows environments, or diving into virtualization. I excel in troubleshooting, problem solving, optimizing, and innovating. I'm passionate about exploring new technologies.
			</p>

			<div className={styles.menu}>
			<div className={styles.card}>
				<a href="https://bookstack.luigicastro.pro/" target="_blank"><div className={styles.thumb}></div></a>
					<h1>Diaries of a Geek</h1>
					<p>Explore my writings and notes chronicling passions, endeavors, and exciting projects. Delve into the realm of creativity, innovation, and exploration.</p>
				</div>
			<div className={styles.card}>
				<a href="https://github.com/squeige" target="_blank"><div className={styles.thumb}><img src={git_lgt} alt="git_lgt" style={{width: '90px', height:'auto'}}/>
					</div></a>
					<h1>My GIT Repo</h1>
					<p>Welcome to my GitHub repository! 🚀 Here you'll find a collection of projects showcasing my passion for coding and problem-solving</p>
				</div>
			<div className={styles.card}>
				<a href="https://www.linkedin.com/in/squeige/" target="_blank"><div className={styles.thumb}><img src={linked_lgt} alt="git_lgt" style={{width: '90px', height:'auto'}}/>
					</div></a>
					<h1>Resume</h1>
					<p>Check out my resume for a comprehensive overview of my skills, experience, and achievements. Let's connect and explore how we can work together to make a positive impact! </p>
				</div>
			</div>
		</div>
	)
}

export default Bio

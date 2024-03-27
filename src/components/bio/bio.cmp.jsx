import styles from './bio.module.css';
import git_lgt from '../../img/git_lgt.svg';
import git_drk from '../../img/git_drk.svg';
import linked_drk from '../../img/linked_drk.svg';
import linked_lgt from '../../img/linked_lgt.svg';
import book from '../../img/book.png';

import Card from './card.cmp.jsx';

function Bio({isDark}) {
	return (
		<div className={styles.main}>
			<p>
				I am an IT veteran with 15 years of experience in IT and infrastructure. My strength lies in rapid adaptation to evolving tech landscapes. Whether it's optimizing Linux systems, orchestrating Windows environments, or diving into virtualization. I excel in troubleshooting, problem solving, optimizing, and innovating. I'm passionate about exploring new technologies.
			</p>

			<div className={styles.menu}>
				<Card 
					link='https://bookstack.luigicastro.pro/' 
					image={book} 
					title='Diaries of a Geek' 
					description='Explore my writings and notes chronicling passions, endeavors, and exciting projects. Delve into the realm of creativity, innovation, and exploration.' 
					width= '100%'
					height= '100%'
				isDark={isDark}/> 
				<Card 
					link='https://github.com/squeige'  
					image={isDark ? git_drk : git_lgt}
					title='My Git' 
					description="Welcome to my GitHub repository! 🚀 Here you'll find a collection of projects showcasing my passion for coding and problem-solving"
					width='92px'
					height='auto'
				isDark={isDark}/>
				<Card 
					link='https://www.linkedin.com/in/squeige/'  
					image={isDark ? linked_drk : linked_lgt}
					title='Resume' 
					description="Check out my resume for a comprehensive overview of my skills, experience, and achievements. Let's connect and explore how we can work together to make a positive impact!"
					width='92px'
					height='auto'
				isDark={isDark}/> 
			</div>
		</div>
	)
}

export default Bio

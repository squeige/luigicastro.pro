import styles from './header.module.css';
import logo_lgt from '../../img/logo_lgt.svg';
import logo_drk from '../../img/logo_drk.svg';
import moon from '../../img/moon.svg';
import sun from '../../img/sun.svg';

function Header({isDark, toggleDarkMode}) {
	return (
		<div className={styles.main}>
			<div className = {styles.left}>
			<img src={isDark ? logo_drk : logo_lgt} alt='logo' style={{ width: '650px',  height: 'auto' }} />
			</div>

			<div className = {styles.right}>
			<img src={isDark ? sun : moon} alt={isDark ? 'sun' : 'moon'} style={{ width: '38px',  height: 'auto' }} onClick={toggleDarkMode} />
			</div>
		</div>
	);
}

export default Header;

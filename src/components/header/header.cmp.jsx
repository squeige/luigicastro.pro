import styles from './header.module.css';
import logo from '../../img/luigi_logo_lg.svg';
import icon from '../../img/moon.svg';

function Header() {
	return (
		<div className={styles.main}>
			<div className = {styles.left}>
			<img src={logo} alt='logo' style={{ width: '650px',  height: 'auto' }} />
			</div>

			<div className = {styles.right}>
			<img src={icon} alt='moon' style={{ width: '38px',  height: 'auto' }} />
			</div>
		</div>
	);
}

export default Header;

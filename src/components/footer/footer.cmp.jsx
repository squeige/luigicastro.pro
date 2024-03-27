import styles from './footer.module.css';
import sign_lg from '../../img/signature_lg.svg';
import sign_drk from '../../img/signature_drk.svg';
import mushie from '../../img/mushroom_forest.jpg';

function Footer({isDark}) {
	return (
		<div className={styles.main}>
			<div className={styles.top}>
				<img src={mushie} 
					alt="mushie" 
					style={{ width: '550px', height: '100%', borderRadius: '1em' }}/>
				<img src={isDark ? sign_drk : sign_lg} 
					alt={isDark ? 'signature dark' : 'signature light'}
					style={{ width: '350px', height: '100%' }}/>
			</div>
			<div className={styles.bottom}>
			<p>Luigi Castro <br />Copyright  © 2024. All rights reserved.</p>
			</div>
		</div>
	)
}

export default Footer

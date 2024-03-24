import styles from './footer.module.css';
import sign_lg from '../../img/signature_lg.svg'
import mushie from '../../img/mushroom_forest.jpg';

function Footer() {
	return (
		<div className={styles.main}>
			<div className={styles.top}>
				<img src={mushie} alt="mushie" style={{ width: '550px', height: '100%', borderRadius: '20px' }}/>
				<img src={sign_lg} alt="sign" style={{ width: '350px', height: 'auto' }}/>
			</div>
			<div className={styles.bottom}>
			<p>Luigi Castro <br />Copyright  © 2024. All rights reserved.</p>
			</div>
		</div>
	)
}

export default Footer

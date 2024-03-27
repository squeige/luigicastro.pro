import React from 'react';
import styles from './bio.module.css';

const Card = ({ isDark, link, image, title, description, width, height,fill }) => (
	<div className={styles.card}>
		<a href={link} target="_blank"><div className={isDark ? styles.thumbDark : styles.thumb}>
			<img src={image} alt={title} style={{ width: width, height: height}} />
			</div>
		</a>
		<h1> {title} </h1>
		<p>{description}</p>
	</div>
);
export default Card;

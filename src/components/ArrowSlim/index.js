import React from 'react';
import styles from './ArrowSlim.scss';

const ArrowSlim = () => (
	<svg  role="presentation"  x="0px" y="0px" viewBox="0 0 200 200" className={styles.ArrowSlim}>
		<g>
			<line className={styles.st0} x1="100" y1="25" x2="100" y2="175"/>
		</g>
		<line className={styles.st1} x1="140" y1="135" x2="100" y2="175"/>
		<line className={styles.st1} x1="59.8" y1="134.8" x2="99.8" y2="174.8"/>
	</svg>
);

export default ArrowSlim;


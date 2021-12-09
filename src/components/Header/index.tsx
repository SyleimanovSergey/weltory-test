import React from 'react';

import styles from './index.module.scss';
import imgLogo from 'assets/images/header-logo.png';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<img src={imgLogo} alt="Logo Wildlife" width="169" height="39" />
		</header>
	);
};

export default Header;

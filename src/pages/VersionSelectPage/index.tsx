import React from 'react';

import VersionSelectCards from 'components/VersionSelectCards';
import Table from 'components/Table';

import logo from 'assets/images/weltory-logo.png';

import styles from './index.module.scss';

const VersionSelectCardsPage: React.FC = () => {
	return (
		<main className={styles.main}>
			<img className={styles.logo} src={logo} alt="Weltory logo" width="230" height="89" />
			<h1 className={styles.title}>Take better care of yourself every day</h1>
			<VersionSelectCards />
			<Table />
		</main>
	);
};

export default VersionSelectCardsPage;

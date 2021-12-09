import React from 'react';

import styles from './index.module.scss';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.blockApp}>
				<p className={styles.text}>Get the mobile app</p>
				<a
					className={styles.appStore}
					href="https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8">
					<span className={styles.visuallyHidden}>Link to the app on app store</span>
				</a>
				<a
					className={styles.playMarket}
					href="https://play.google.com/store/apps/details?id=com.welltory.client.android">
					<span className={styles.visuallyHidden}>Link to the app on play market</span>
				</a>
			</div>
			<div className={styles.blockCopyright}>
				<a className={`${styles.itemCopyright} ${styles.copyrightTerms}`} href="https://welltory.com/terms/">
					Terms of use
				</a>
				<a className={`${styles.itemCopyright} ${styles.copyrightPrivacy}`} href="https://welltory.com/privacy/">
					Privacy policy
				</a>
			</div>
			<div className={styles.blockSocial}>
				<a className={`${styles.socialItem} ${styles.twitter}`} href="https://twitter.com/welltory">
					<span className={styles.visuallyHidden}>Link to twitter</span>
				</a>
				<a className={`${styles.socialItem}  ${styles.fb}`} href="https://www.facebook.com/welltory">
					<span className={styles.visuallyHidden}>Link to facebook</span>
				</a>
				<a className={`${styles.socialItem} ${styles.instagram}`} href="https://www.instagram.com/welltory/">
					<span className={styles.visuallyHidden}>Link to instagram</span>
				</a>
				<a className={`${styles.socialItem} ${styles.linkedin}`} href="https://www.linkedin.com/company/welltory">
					<span className={styles.visuallyHidden}>Link to linkedin</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;

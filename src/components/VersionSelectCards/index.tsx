import React, { useState } from 'react';

import styles from './index.module.scss';

const VersionSelectCards: React.FC = () => {
	const [active, setActive] = useState<{ monthly: boolean; annual: boolean }>({
		monthly: false,
		annual: true
	});

	const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		const { id } = e.currentTarget as HTMLDivElement;
		if (id === 'monthly') {
			setActive({ monthly: true, annual: false });
			console.log(e.currentTarget);
		}
		if (id === 'annual') {
			setActive({ monthly: false, annual: true });
			console.log(e.currentTarget);
		}
	};

	const onKeyPress: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
		if (e.key === 'Enter') {
			const { id } = e.target as HTMLDivElement;
			if (id === 'monthly') {
				setActive({ monthly: true, annual: false });
			}
			if (id === 'annual') {
				setActive({ monthly: false, annual: true });
			}
		}
	};

	return (
		<div className={styles.versionSelect}>
			<div className={`${active.monthly ? styles.versionSelectItemActive : styles.versionSelectItem}`}>
				<div
					className={styles.content}
					onClick={onClick}
					onKeyPress={onKeyPress}
					id="monthly"
					role="button"
					tabIndex={0}>
					<p className={`${styles.discount} ${styles.discountMonthly}`}>-15%</p>
					<div className={styles.blockRate}>
						<p className={styles.rateName}>Monthly</p>
						<div className={styles.ratePriceBlock}>
							<p className={`${styles.ratePriceNew} ${styles.ratePriceNewMonthly}`}>$ 5.99</p>
							<p className={styles.ratePriceOld}>$ 7.99</p>
						</div>
					</div>
					<p className={styles.conditions}>Billed every month</p>
				</div>
			</div>
			<div className={`${active.annual ? styles.versionSelectItemActive : styles.versionSelectItem}`}>
				<div
					className={styles.content}
					onClick={onClick}
					onKeyPress={onKeyPress}
					id="annual"
					role="button"
					tabIndex={0}>
					<p className={`${styles.discount} ${styles.discountAnnual}`}>– 25%</p>
					<div className={styles.blockRate}>
						<p className={styles.rateName}>Annual</p>
						<div className={styles.ratePriceBlock}>
							<p className={`${styles.ratePriceNew} ${styles.ratePriceNewAnnual}`}>$ 4.59</p>
							<p className={styles.ratePriceOld}>$ 7.99</p>
						</div>
					</div>
					<p className={styles.conditions}>$79 billed once a year</p>
				</div>
			</div>
			<div className={styles.btnBlock}>
				<button className={styles.btn}>Continue</button>
				<p className={styles.text}>No commitments. Cancel anytime</p>
			</div>
		</div>
	);
};

export default VersionSelectCards;

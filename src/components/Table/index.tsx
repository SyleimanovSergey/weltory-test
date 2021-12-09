import React from 'react';

import { tableDataBetterFast, tableDataHealthInsights } from './data';

import logoActive from 'assets/images/check.svg';
import logoInactive from 'assets/images/no-check.png';

import styles from './index.module.scss';

const Table: React.FC = () => {
	return (
		<>
			<h2 className={styles.title}>Choose the best plan for you</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th className={styles.titleTable}>What you get</th>
						<th className={styles.collapseTable} />
						<th className={`${styles.titleTable} ${styles.titleFree}`}>
							<span className={styles.titleVisibility}>for</span> free
						</th>
						<th className={styles.collapseTable} />
						<th className={`${styles.titleTable} ${styles.titlePro}`}>
							<span className={styles.titleVisibility}>in</span> Pro
						</th>
					</tr>
				</thead>
			</table>

			<table className={styles.tableContent}>
				<caption className={styles.caption}>Feel better fast</caption>
				<tbody>
					{tableDataBetterFast.map((item, index) => {
						const boxFirst = index !== tableDataBetterFast.length - 1 ? styles.boxFirst : styles.lastBoxFirst;
						const box = index !== tableDataBetterFast.length - 1 ? styles.box : styles.lastBox;

						return (
							<tr key={item.text}>
								<td className={boxFirst}>{item.text}</td>
								<td className={styles.collapseTable} />
								<td className={box}>
									<img src={item.free ? logoActive : logoInactive} alt="#" />
								</td>
								<td className={styles.collapseTable} />
								<td className={box}>
									<img src={item.pro ? logoActive : logoInactive} alt="#" />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<table className={styles.tableContent}>
				<caption className={styles.caption}>Gain rich health insights</caption>
				<tbody>
					{tableDataHealthInsights.map((item, index) => {
						const boxFirst = index !== tableDataHealthInsights.length - 1 ? styles.boxFirst : styles.lastBoxFirst;
						const box = index !== tableDataHealthInsights.length - 1 ? styles.box : styles.lastBox;

						return (
							<tr key={item.text}>
								<td className={boxFirst}>{item.text}</td>
								<td className={styles.collapseTable} />
								<td className={box}>
									<img src={item.free ? logoActive : logoInactive} alt="#" />
								</td>
								<td className={styles.collapseTable} />
								<td className={box}>
									<img src={item.pro ? logoActive : logoInactive} alt="#" />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className={styles.btnBlock}>
				<button className={`${styles.btn} ${styles.btnFree}`}>go with the free version</button>
				<button className={`${styles.btn} ${styles.btnUpdate}`}>upgrade now</button>
			</div>
		</>
	);
};

export default Table;

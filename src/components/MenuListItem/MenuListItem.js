import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
	return (
		<div className={styles.MenuListItem}>
			<div className={styles.name}>{menuItem.name}</div>
			<div className={styles.buy}>
				<span>${menuItem.price.toFixed(2)}</span>
				<div className={styles.description}>{menuItem.description}</div>
				<button
					className="btn-sm"
					onClick={() => handleAddToOrder(menuItem._id)}
				>
					ADD
				</button>
			</div>
		</div>
	);
}

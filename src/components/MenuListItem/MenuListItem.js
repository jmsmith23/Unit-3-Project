import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
	return (
		<div className={styles.MenuListItem} style={{ backgroundColor: 'blue' }}>
			<h1 className={styles.ItemName}>{menuItem.name}</h1>
			<div className={styles.buy}>
				<div className={styles.description}>{menuItem.description}</div>
				<span>${menuItem.price.toFixed(2)}</span>
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

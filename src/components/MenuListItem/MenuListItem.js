import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
	return (
		<div className={styles.MenuListItem}>
			<div className="col-md-5">
				<img
					src={menuItem.imageUrl}
					className="item-image"
					width="230"
					height="280"
				></img>
			</div>
			<div className={styles.buy}>
				<h1 className="item-name">{menuItem.name}</h1>
				<div className="description">{menuItem.description}</div>
				<span>${menuItem.price.toFixed(2)}</span>
				<button
					className="addButton"
					onClick={() => handleAddToOrder(menuItem._id)}
				>
					ADD
				</button>
			</div>
		</div>
	);
}

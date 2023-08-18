import styles from './OrderDetail.module.scss';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
	order,
	handleChangeQty,
	handleCheckout
}) {
	if (!order) return null;

	const lineItems = order.lineItems.map((item) => (
		<LineItem
			lineItem={item}
			isPaid={order.isPaid}
			handleChangeQty={handleChangeQty}
			key={item._id}
		/>
	));

	return (
		<div className={styles.OrderDetail}>
			<div className={styles.sectionHeading}>
				{order.isPaid ? (
					<span className="order-title">
						ORDER <span className="smaller">{order.orderId}</span>
					</span>
				) : (
					<span className="new-order-title">NEW ORDER </span>
				)}
				<span className="date">
					{new Date(order.updatedAt).toLocaleDateString()}
				</span>
			</div>
			<div
				className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}
			>
				{lineItems.length ? (
					<>
						{lineItems}
						<section className={styles.total}>
							{order.isPaid ? (
								<span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
							) : (
								<button
									className="checkout-btn"
									onClick={handleCheckout}
									disabled={!lineItems.length}
								>
									CHECKOUT
								</button>
							)}
							<span>{order.totalQty}</span>
							<span className={styles.right}>
								${order.orderTotal.toFixed(2)}
							</span>
						</section>
					</>
				) : (
					<div className={styles.hungry}></div>
				)}
			</div>
		</div>
	);
}

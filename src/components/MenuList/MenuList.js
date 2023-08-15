import { useState, useEffect } from 'react';
import styles from './MenuList.module.scss';
import MenuListItem from '../MenuListItem/MenuListItem';
import Button from 'react-bootstrap/Button';

export default function MenuList({ menuItems, handleAddToOrder }) {
	const [pageNumber, setPageNumber] = useState(1);
	const [pageItems, setPageItems] = useState([]);

	useEffect(() => {
		const itemsPerPage = 5;
		const startIndex = (pageNumber - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const itemsOnPage = menuItems.slice(startIndex, endIndex);
		setPageItems(itemsOnPage);
	}, [pageNumber, menuItems]);

	const addOne = () => {
		setPageNumber(pageNumber + 1);
	};

	const subtractOne = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		}
	};

	return (
		<main className={styles.MenuList}>
			{pageItems.map((item) => (
				<MenuListItem
					key={item._id}
					handleAddToOrder={handleAddToOrder}
					menuItem={item}
				/>
			))}

			<Button onClick={subtractOne}>Prev</Button>
			{pageNumber}
			<Button onClick={addOne}>Next</Button>
		</main>
	);
}

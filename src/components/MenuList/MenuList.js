import { useState, useEffect } from 'react';
import styles from './MenuList.module.scss';
import MenuListItem from '../MenuListItem/MenuListItem';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../Logo/Logo';
import Header from '../Navbar/Header';

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
		const itemsPerPage = 5;
		const startIndex = pageNumber * itemsPerPage;
		if (startIndex < menuItems.length) {
			setPageNumber(pageNumber + 1);
		}
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

			<div className={styles.PageButtons}>
				<Button size="sm" className="mx-3" onClick={subtractOne}>
					Prev
				</Button>
				{pageNumber}
				<Button size="sm" className="mx-3" onClick={addOne}>
					Next
				</Button>
			</div>
		</main>
	);
}

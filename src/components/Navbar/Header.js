import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from '../Logo/Logo';

export default function Header() {
	return (
		<header>
			<Navbar className="navbar" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">
						<Logo />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/cart">
								<FaShoppingCart /> Cart
							</Nav.Link>
							<Nav.Link href="/login">
								<FaUser />
								Sign in
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

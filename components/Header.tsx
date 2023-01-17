import { Navbar, Button, Nav, Form, InputGroup, Badge, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import styles from '../styles/Header.module.scss';
import {FC, useEffect} from 'react';
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {signout} from "../redux/auth/authSlice";
import {UISlice} from "../redux/ui/uiSlice";
import {useRouter} from 'next/router';

const Header:FC = () => {
    const cartTotalCount = useAppSelector((state ) => state.cart.totalCount);
    const username = useAppSelector((state) => state.user.username);
    const dispatch = useAppDispatch();

    const router = useRouter();

    const handleSignout:() => void = () => dispatch(signout());

    const handleCartToggle: () => void = () => dispatch(UISlice.actions.toggleCartShown());

    const handleSigninToggle: () => void = () => dispatch(UISlice.actions.toggleSigninShown());

    const handleProfileToggle: () => void = () => dispatch(UISlice.actions.toggleProfileShown());

    return (
        <header className={styles.header + " position-fixed w-100"}>
            <Navbar bg={router.pathname !== "/" && "dark"} variant="dark" className={styles.navbar_desktop} expand="sm">
                <Navbar.Brand className={styles.logo}>
                    <Link href={'/'}>
                        <img src="/icons/logo.svg" className={styles.logoImg} alt="Логотип Applecart.ru"/>
                    </Link>
                </Navbar.Brand>
                {username && <ButtonGroup>
                    <DropdownButton as={ButtonGroup} title={''} variant="success" id="bg-dropdown-1">
                        <Dropdown.Item eventKey="1" onClick={handleProfileToggle}>Profile</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                            <Link href={'/orders'}>
                            Orders
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" onClick={handleSignout}>Log out</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="light">
                        <img id={styles.userIcon} src="/icons/user.png" alt="User"/>
                        <span className="mx-2">{username}</span>
                    </Button>
                </ButtonGroup>}
                {!username && <Button className={"signinButton py-2 px-4"} onClick={handleSigninToggle}
                    variant="success">Log in</Button>}
                <Navbar.Collapse>
                    <Nav className="mr-auto w-100 d-flex flex-column flex-md-row justify-content-around">
                        <Link href="/about" passHref>
                            <Nav.Link className={styles.navlink_desktop}>About us</Nav.Link>
                        </Link>
                        <Nav.Link href="/#contacts">Contacts</Nav.Link>
                    </Nav>
                    <Form className="me-3">
                        <InputGroup className={styles.searchField_desktop}>
                            <Form.Control type="text" placeholder="e.g. IPhone" />
                            <Button variant="success" type="submit">
                                <img className={styles.searchIcon} alt="Search" src="/icons/search.svg" />
                            </Button>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
                <button onClick={handleCartToggle} className={styles.cart_desktop}>
                    <img className={styles.cartIcon} alt="Cart" src="/icons/cart.svg" />
                    <Badge bg='' className={styles.badge}>{cartTotalCount}</Badge>
                </button>
            </Navbar>
        </header>
    )
}

export default Header;
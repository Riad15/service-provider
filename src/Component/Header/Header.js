import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/nav-img.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <>
            <Navbar style={{ backgroundColor: '#06ADEF' }} collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="home#services">service</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/about">
                                About
                            </Nav.Link>
                            {
                                user ?
                                    <div className='d-flex'>
                                        <Nav.Link onClick={() => signOut(auth)} href="/login">Log out</Nav.Link>
                                    </div>

                                    :
                                    <Nav.Link href="/login">Log in</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
import React from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import PMModal from '../modal/Modal';

const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Product Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='border-0 p-0 shadow-none' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#">Home</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <PMModal />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
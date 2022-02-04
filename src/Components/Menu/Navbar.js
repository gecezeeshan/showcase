import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Profile from './Profile';

let MyNavBar = () => {
    return (

        <>


            <Navbar bg="light" expand="lg">

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">                       
                        <LinkContainer to="/Books">
                            <Nav.Link>Books</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Test">
                            <Nav.Link>Test</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
                <Profile></Profile>
            </Navbar>

        </>
    )
}

export default MyNavBar;

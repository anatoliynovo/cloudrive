import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="ml">
            <Navbar.Brand as={Link} to="/">
                Cloudrive
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/user">
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

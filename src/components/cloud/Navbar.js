import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileLogo from '../../assets/profile.png';
import BrandLogo from '../../assets/logo.png';

export default function NavbarComponent() {
  return (
    <Navbar className="shadow" bg='light' expand='ml'>
      <Navbar.Brand as={Link} to='/'>
      <img src={BrandLogo} alt={'logo'} style={{width: "80px"}}/>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user'>
          <img src={ProfileLogo} alt={'profile'} className="mr-3" style={{width: "30px"}}/>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

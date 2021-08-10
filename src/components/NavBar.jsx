import React from 'react'
import { Container,Navbar,Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <header>
                
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Storm</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Nosotros</Nav.Link>
      <Nav.Link href="#pricing">Articulos</Nav.Link>
      <NavDropdown title="Categorias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Pista</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Montaña</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
                
            </header>
            </>
        
    )
}

export default NavBar;


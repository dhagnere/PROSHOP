import React from 'react'
import { Container , Navbar, Nav} from 'react-bootstrap'
import './Header.css'


const Header = () => {
    return <header>
      <Navbar className = "navbar-color" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><i className="fas fa-user-tie"></i></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Panier</Nav.Link>
                  <Nav.Link href="/login"><i className='fas fa-user'></i>Se connecter</Nav.Link>
                    {/* <NavDropdown title="Menus Déroulants" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Menu 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Menu 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Menu 3</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Menu Séparé</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>   
        </Container>
      </Navbar>
    </header>
}

export default Header

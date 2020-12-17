import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar className='navbar-color' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <i className='fas fa-laptop-house'></i>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Panier
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>Se connecter
                </Nav.Link>
              </LinkContainer>
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
  )
}

export default Header


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import {ShoppingCart} from 'phosphor-react'
import { useAppSelector } from '@/redux/store';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarMenu() {
  const cartItemsCount = useAppSelector((state) => state.cart)

  return (
    <>
    <Navbar expand="lg" className="bg-white" style={{minHeight: '64px'}}>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand><img src='./redux-logo.svg' className='navbar-logo'/> REDUX Toolkit Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            {/*<LinkContainer to="/" className='align-self-center'>
              <Nav.Link>Home</Nav.Link>
  </LinkContainer>*/}

            <LinkContainer to="/cart" className='align-self-center'>
              <Nav.Link className='position-relative'>
                <div className='cartCount'>
                  {cartItemsCount.cartTotalQuantity}
                </div>
                <ShoppingCart size={32} />
              </Nav.Link>
            </LinkContainer>

            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='navbar-space'></div>
    </>
  );
}

export default NavbarMenu;
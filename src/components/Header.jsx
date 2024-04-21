import React from 'react'
import { Link } from 'react-router-dom'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'


function Header() {
  return (
    <>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                   <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text>
                    <FormControl style={{width:500}} placeholder='Search Products' 
                    className='m-auto' / >
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color='white' fontSize='25px'/>
                            <Badge >{10}</Badge>
                        </Dropdown.Toggle>
                   
                    <Dropdown.Menu style={{minWidth:370}}>
                       <span style={{padding:10}}> Cart is Empty !</span>
                    </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Header
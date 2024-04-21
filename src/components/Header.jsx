import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

function Header() {
  const {
    state: { cart }, dispatch
  } = CartState();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text>
            <FormControl
              style={{ width: 500 }}
              placeholder="Search Products"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => {
                      return (
                        <>
                          <span key={prod.id}>
                            <img  src={prod.image}  alt={prod.name}/>
                            <div>
                              <span>{prod.name}</span>
                              <span>${prod.price.split(".")[0]}</span>
                            </div>
                            <AiFillDelete  style={{cursor:"pointer"}}
                            onClick={()=>{
                                dispatch({
                                    type:"REMOVE_FROM_CART",
                                    payload:prod
                                })
                            }}/>
                          </span>
                          ;
                        </>
                      );
                    })}
                  </>
                ) : (
                  <span style={{ padding: 10 }}> Cart is Empty !</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown, Button } from 'react-bootstrap';

function CustomHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" onClick={handleDropdownToggle}>
              Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu show={dropdownOpen}>
              <Dropdown.Item href="/item1">Item 1</Dropdown.Item>
              <Dropdown.Item href="/item2">Item 2</Dropdown.Item>
              <Dropdown.Item href="/item3">Item 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="outline-info">Menu Choice 1</Button>
          <Button variant="outline-info">Menu Choice 2</Button>
          <Button variant="outline-info">Menu Choice 3</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomHeader;
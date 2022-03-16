import { LinkContainer } from 'react-router-bootstrap';
import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <LinkContainer to="/home">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/createvote" >
                    <Nav.Link>Create Vote</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/votes" >
                    <Nav.Link>Votes</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
   margin-bottom: 3rem;
   ul {
       margin: 0;
       padding: 0;
       text-align: center;
       list-style: none;

       display: grid;
       grid-template-columns: 1ft 1fr auto 1fr 1fr;
       grid-gap: 2rem;
       align-items: center;
   }
`;

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to="/">Hot Now</Link>
                </li>
                <li>
                    <Link to="/pizzas">Pizza Menu</Link>
                </li>
                <li>
                    <Link to="/">LOGO</Link>
                </li>
                <li>
                    <Link to="/slicemasters">Slicemasters</Link>
                </li>
                <li>
                    <Link to="/orders">Order Ahead!</Link>
                </li>
            </ul>
        </NavStyles>  
    )
}
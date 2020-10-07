import React from 'react';
//import './NavbarStyle.css';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';


function Navbar() {

    const Navbar = styled.div`
        display: flex;
        position: fixed;
        width: 100%;
        background: linear-gradient(90deg, rgba(139, 109, 109, 0.1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,0.1) 100%);
        -webkit-box-shadow: 0px 10px 300px -49px rgba(0,0,0,1);
        -moz-box-shadow: 0px 10px 300px -49px rgba(0,0,0,1);
        box-shadow: 0px 10px 300px -49px rgba(0,0,0,1);
        border-bottom: 0.01px solid rgb(200, 200, 200) ;
    `;
    const Span = styled.span`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
        padding: 0.5em;
        width: 6rem;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        font-family: 'Josefin Sans', sans-serif;
        text-shadow: 2px 0px 3px rgba(130, 130, 130, 1);
        font-size: 1rem;
        color: whitesmoke;
        background:#23232e;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    `;
    return (
        <Navbar>
            <Span>MM-Lucas</Span>
        </Navbar>
    )

}


export default Navbar;
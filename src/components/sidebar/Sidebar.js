import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUsers,
    faPeopleCarry,
    faWallet,
    faTools
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Charts from 'components/dashboard/Charts';






// CSS DEL COMPONENTE

const SidebarApp = styled.nav`
    top: 2.529rem;
    width: 6rem;
    height: 1000em;
    position: fixed;
    background-color: #23232e;
    transition: width 300ms ease;
    &:hover {
        width: 11rem;
        
    }
 
`;

const SidebarNav = styled.ul`
    list-style: none;
    padding: 0;
    padding-left: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`;

const SidebarItem = styled.li`
    width: 100%;
    margin-top: 2em;
    margin-bottom: 2em;
    &:hover{
        color: white;
        background-color: rgb(255, 255, 255, 0.1);  
              
    }
`;

const SidebarLink = styled.a`
    margin-left: 0.3rem;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 3em;
    color: #b6b6b6;
    border-radius: 3%;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: white;
        text-decoration: none;
          
    }  
`;

const LinkText = styled.span`
    font-size: 0%;
    margin-left: 0.5rem;
    transition: font-size 300ms ease;
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${SidebarApp}:hover & {
          font-size: 100%;
          text-decoration: none;
      }
`;

const icono = {

    padding: '2px',
    height: '2.3em',
    borderRadius: '15%',
    width: '2.1rem'

}

const prevent = (e) => {
    e.prevendDefault()
};



const handleChange = (e) => {
    console.log(e)
}

function Sidebar(props) {


    return (
        <div>
            <SidebarApp onChange={handleChange}>
                <SidebarNav>
                    <SidebarItem>
                        <SidebarLink href={prevent}>
                            <FontAwesomeIcon style={icono} icon={faWallet} />
                            <LinkText>Caja</LinkText>
                        </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink href={prevent}>
                            <FontAwesomeIcon style={icono} icon={faUsers} />
                            <LinkText >Clientes</LinkText>
                        </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink href={prevent}>
                            <FontAwesomeIcon style={icono} icon={faPeopleCarry} />
                            <LinkText >Proveedores</LinkText>
                        </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink href={prevent}>
                            <FontAwesomeIcon style={icono} icon={faTools} />
                            <LinkText >Reparaciones</LinkText>
                        </SidebarLink>
                    </SidebarItem>
                </SidebarNav>

            </SidebarApp>
            <Charts padding={props.hover} />
        </div>
    )

}


export default Sidebar;
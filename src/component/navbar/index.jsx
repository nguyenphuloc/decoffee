import React, { useState } from 'react';
import './styles.scss';
import { useHistory } from 'react-router';

import NavbarItem from '../navbarItem';

const data = [
    {id: '01', name: 'Home', handleOnClick: '/'},
    {id: '02', name: 'About Us', handleOnClick: '/'},
    {id: '03', name: 'Menu', handleOnClick: '/'},
    {id: '04', name: 'Gallery', handleOnClick: '/'},
    {id: '05', name: 'Blog', handleOnClick: '/'},
    {id: '06', name: 'Blog Details', handleOnClick: '/'},
    {id: '07', name: 'Elements', handleOnClick: '/'},
    {id: '08', name: 'Contact Us', handleOnClick: '/'},
]

export default function Navbar() {
    const history = useHistory();
    const handleClick = (url) => {
        history.push(url);
    }

    return(
        <div className="navbar">
            <ul>
                {data.map(item => (
                    <li className="li-navbar">
                        <NavbarItem 
                            key={item.id}
                            name={item.name}
                            handleOnClick = {() => handleClick(item.handleOnClick)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
import React, {useState} from 'react';
import logo from '../assets/logo.png'
import {FaBars, FaTimes} from "react-icons/fa";

import './Navbar.css'

const Navbar = () => {

    const [isClick, setIsClick] = useState(false)

    const handleClick =()=> setIsClick(!isClick)
    const closeMenu = ()=> setIsClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href="/" className='logo'>
                    <img src={logo} alt="logo"/>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {
                        isClick ? (<FaTimes size={30} style={{color:'#fff'}} />)
                            :(<FaBars size={30} style={{color:'#fff'}} />)
                    }
                </div>
                <ul className={isClick ? "nav-menu active": "nav-menu"}>
                    <li className='nav-item'>
                        <a href="#hero" onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#about" onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#testimonials" onClick={closeMenu}>Testimonial</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#demo" onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
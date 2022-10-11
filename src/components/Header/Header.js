import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='bg-indigo-600'>
            <NavLink to="/home" className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    );
};

export default Header;
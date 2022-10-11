import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='container px-32 bg-indigo-600 flex justify-between text-white py-5'>
            <div className="nav-brand font-bold">
                <h1>Quiz World</h1>
            </div>
            <nav className='font-semibold navbar uppercase'>
                <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
        </header>
    );
};

export default Header;
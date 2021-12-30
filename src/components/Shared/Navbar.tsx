import React from 'react';
import { FaTicketAlt, FaSearch } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <div className='container'>
            <div className='navbar'>

                <FaTicketAlt className='logo' />

                <div className='subnavbar'>
                    <p className='item'>Movies</p>
                    <p className='item'>My List</p>
                    <p className='item'>Profile</p>
                </div>

                <div className='search'>
                    <input className='searchInput' type="text" placeholder='Search' />
                    <FaSearch className='searchIcon' />
                </div>

            </div>
        </div>
    )
}
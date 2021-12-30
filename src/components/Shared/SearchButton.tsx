import React from 'react'
import { FaSearch } from 'react-icons/fa';
export const SearchButton = () => {
    return (
        <>
            <div className='search'>
                <input className='searchInput' type="text" placeholder='Search' />
                <FaSearch className='searchIcon' />
            </div>
        </>
    )
}

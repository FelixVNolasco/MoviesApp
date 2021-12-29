import React from 'react';
import { FaTicketAlt, FaSearch } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <div className='px-8 bg-gradient-to-r'>
            <div className='w-full flex flex-row space-x-4 h-16 items-center justify-between'>
                
                <FaTicketAlt  className='h-16 w-16 orange-600'/>
            
                <div className='flex flex-row'>
                    <p className='mx-2'>Movies</p>
                    <p className='mx-2'>My List</p>
                    <p className='mx-2'>Profile</p>
                </div>

                <div className='flex flex-row items-center h-8 rounded border-gray-100'>
                    <FaSearch  className='mx-2'/>
                    <input type="text" placeholder='Search' />
                </div>

            </div>
        </div>
    )
}
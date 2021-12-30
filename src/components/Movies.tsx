import React from 'react'
import { FaArrowDown } from 'react-icons/fa';
import { SearchButton } from './Shared/SearchButton';
import { Card } from './Shared/Card';

export const Movies = () => {
    return (
        <>
            <div className='container'>
                <div className='moviesSection'>
                    <div className='searchSection'>
                        <div className='filters'>
                            <h2 className='searchTitle'>To Look For:</h2>
                            <div className='filter'>
                                <p>Year</p>                                
                                <FaArrowDown className='iconArrow' />
                               </div>
                            <div className='filter'>
                                <p>A - Z</p>                                
                                <FaArrowDown className='iconArrow' />
                            </div>
                            <div className='filter'>
                                <p>Runtime</p>
                                <FaArrowDown className='iconArrow' />
                            </div>
                        </div>
                        <SearchButton />
                    </div>                    
                    <div className='movies'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>   
                </div>
            </div>   
        </>
    )
}
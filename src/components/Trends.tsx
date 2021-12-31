import React from 'react';
import { FaPollH, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Card } from './Shared/Card';
import { Tag } from './Shared/Tag';

export const Trends = () => {
    return (
        <>
            <div className='container'>
                <div className='trendsSection'>
                    <div className='trendsHeader'>
                        <h2 className='header'>Trends Now!</h2>
                        <FaPollH className='icon' />
                    </div>

                    <div className='moviesCarrousel'>
                        <FaChevronLeft className='arrow' />
                        <div className='moviesTrends'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <FaChevronRight className='arrow' />
                    </div>
                    <div className='tagsSection'>
                        <FaChevronLeft className='arrow' />
                        <div className='tags'>
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />                    
                        </div>
                        <FaChevronRight className='arrow' />
                    </div>

                </div>
            </div>

        </>
    )
}



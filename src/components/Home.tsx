import React from 'react';
import { Movies } from './Movies';
import { Footer } from './Shared/Footer';
import { Trends } from './Trends';
import { FaCircle } from 'react-icons/fa';

export const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='info'>
                    <div className='movie'>
                        <div className='genres'>
                            <p className='genre'>Action</p>
                            <p className='genre'>Adventure</p>
                            <p className='genre'>Sci-fi</p>
                        </div>
                        <h2 className='title'>Spiderman: No Way Home</h2>

                        <div className='infoMovie'>
                            <p className='infoItem'>2021</p>
                            <p className='infoItem'>2H 28 MIN</p>
                            <p className='infoItem'>8.9 IMDB</p>
                        </div>
                        <div className='caption'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, mollitia.</p>
                        </div>
                    </div>

                    <div className='slidePosition'>
                        <FaCircle className='dot selected' />
                        <FaCircle className='dot' />
                        <FaCircle className='dot' />
                    </div>
                </div>
            </div>
            <Trends />
            <Movies />
            <Footer />
        </>
    )
}
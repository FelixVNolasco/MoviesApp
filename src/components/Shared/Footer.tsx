import React from 'react'
import { FaTicketAlt } from 'react-icons/fa';
export const Footer = () => {
    return (
        <>            
                <div className='footerSection'>
                    <div className='socialSection'>
                        <div className='titleApp'>
                            <h2>Movies App</h2>
                            <FaTicketAlt className='icon' />
                        </div>
                         <h4>Find your favorite Movie!</h4>

                        <div className='team'>
                            <div className='teamMember'>
                                <div className='imgTeamMember'></div>
                                <div className='infoMember'>
                                    <p className='name'>Felix Enrique Vega Nolasco</p>
                                    <span className='role'>Front End Developer</span>
                                </div>                                
                            </div>
                            <div className='teamMember'>
                                <div className='imgTeamMember'></div>
                                <div className='infoMember'>
                                    <p className='name'>Franco Uriel Perez Mancilla</p>
                                    <span className='role'>UX Designer</span>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>            
        </>
    )
}

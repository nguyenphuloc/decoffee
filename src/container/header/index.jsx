import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall, faCannabis, faPodcast } from '@fortawesome/free-solid-svg-icons'

import xlogo2 from '../../assets/image/xlogo2_footer.png';
import Navbar from '../../component/navbar';
import Button from '../../component/button';

export default function Header() {
    return(
        <div className="header">
            <div className="menu-img">
                <img src={xlogo2} alt=""/>
            </div>
            <div className="menu">
                <Navbar />
            </div>
            <div className="menu-footer">
                <Button 
                    modifier="white"
                    children="Order Online"
                />
                <p>0708 393 969</p>
                <p>30 Street. Bo Bao Tan Thang, Son Ky, Tan Phu, Ho Chi Minh City</p>
                <div className="menu-icon">
                    <FontAwesomeIcon icon={faVolleyballBall} />
                    <FontAwesomeIcon icon={faCannabis} className="icon"/>
                    <FontAwesomeIcon icon={faPodcast} />
                </div>
            </div>
        </div>
    )
}
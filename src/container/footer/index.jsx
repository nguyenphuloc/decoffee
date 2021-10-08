import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall, faCannabis, faPodcast } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return(
        <div className="ctn-footer">
            <div className="footer">
                <div className="footer-address">
                    <h4>Contact Us</h4>
                    <p>0708 393 969</p>
                    <p>30 Street. Bo Bao Tan Thang, Son Ky, Tan Phu, Ho Chi Minh City</p>
                    <div className="footer-icon">
                        <FontAwesomeIcon icon={faVolleyballBall} />
                        <FontAwesomeIcon icon={faCannabis} className="icon"/>
                        <FontAwesomeIcon icon={faPodcast} />    
                    </div> 
                </div>
                <div className ="footer-logo">
                    <div></div>
                </div>
                <div className="footer-menu">
                    <div></div>
                </div>
            </div>
            <div className="footer-author"></div>
        </div>
    )
}
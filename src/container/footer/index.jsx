import React from 'react';
import './styles.scss';

export default function Footer() {
    return(
        <div className="ctn-footer">
            <div className="footer">
                <div className="footer-address"></div>
                <div className ="footer-logo"></div>
                <div className="footer-menu"></div>
            </div>
            <div className="footer-author"></div>
        </div>
    )
}
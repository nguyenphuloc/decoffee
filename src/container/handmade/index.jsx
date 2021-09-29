import React from 'react';
import './styles.scss';

import hero from '../../assets/image/h1_hero1.jpg';

export default function Handmade() {
    return(
        <div className="ctn-handmade">
            <div className="img">
                <img src={hero} alt=""/>
            </div>
        </div>
    )
}
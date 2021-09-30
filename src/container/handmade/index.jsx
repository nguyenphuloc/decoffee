import React from 'react';
import './styles.scss';

import Button from '../../component/button/index';

export default function Handmade() {
    return(
        <div className="ctn-handmade">
            <div className="handmade">
                <div className="handmade-content">
                    <h1>Handmade</h1>
                    <h1> 
                        <span>"Cookies"</span>
                        and 
                    </h1>
                    <h1>Coffee Delights</h1>
                </div>
                <p>
                    Consectetur adipiscing elit ornare viverra arcu, sed hendrerit tortor 
                    rutrum eget. Fusce tempus risus ac dolor pulvinar, id sodales nibh 
                    lobortis.
                </p>
                <Button 
                    modifier="orange"
                    children="our menu"
                />
            </div>
        </div>
    )
}
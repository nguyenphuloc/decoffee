import React from 'react';
import './styles.scss';

import Handmade from '../../container/handmade';
import Information from '../../container/information';

export default function Home() {
    return(
        <div className="home">
            <Handmade />
            <Information />
            <div className="test"></div>
        </div>
    )
}
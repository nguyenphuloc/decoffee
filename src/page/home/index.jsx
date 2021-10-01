import React from 'react';
import './styles.scss';

import Handmade from '../../container/handmade';
import Information from '../../container/information';
import OurMenu from '../../container/ourmenu';

export default function Home() {
    return(
        <div className="home">
            <Handmade />
            <Information />
            <OurMenu />
            {/* <div className="test"></div> */}
        </div>
    )
}
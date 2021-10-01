import React from 'react';
import './styles.scss';

import signature from '../../assets/image/signature.png';
import xabout from '../../assets/image/xabout-shape.png';

export default function Information() {
    return(
        <div className="ctn-information">
            <div className="information">
                <div className="info">
                    <h2>
                        A boutique and fun cafe that brought together coffee cultures of the 
                        whole world in California.
                    </h2>
                    <p>
                        Duis congue sapien non mauris tristique, eu porttitor arcu 
                        feugiat. Quisque sit amet quam sodales, porttitor lectus vitae, 
                        consectetur est. Curabitur ac erat vel mi auctor gravida eu in 
                        ex. Nulla lorem turpis, faucibus vitae condimentum non, auctor 
                        id urna. Maecenas vitae volutpat magna.
                    </p>
                    <div className="signature">
                        <img src={signature} alt=""/>
                    </div>
                </div>
                <div className="time">
                    <div className="hours-lunch">
                        <div className="hours">
                            <h4>Hours</h4>
                            <p>Monday & Sunday</p>
                            <span>11:00 am – 4:00 am</span>
                        </div>
                        <div className="lunch">
                            <h4>Lunch</h4>
                            <p>Monday & Sunday</p>
                            <span>11:00 am – 4:00 am</span>
                        </div>
                    </div>
                    <div className="dinner">
                        <h4>Dinner</h4>
                        <p>Monday & Sunday</p>
                        <span>11:00 am – 4:00 am</span>
                    </div>
                </div>
            </div>
            <div className="img-female">
                <img src={xabout} alt=""/>
            </div>
        </div>
    )
}
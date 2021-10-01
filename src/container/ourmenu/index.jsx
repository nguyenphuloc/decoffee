import React from 'react';
import './styles.scss';

export default function OurMenu() {
    return(
        <div className="ctn-our-menu">
            <div className="our-menu">
                <h2>
                    Our Menu
                </h2>
                <p>
                    Duis congue sapien non mauris tristique, eu porttitor arcu feugiat. 
                    Quisque sit amet quam sodales, porttitor lectus vitae, consectetur.
                </p>
            </div>
            <div className="price-list">
                <div className="list-coffee">
                    <div className="list">
                        <h4>Coffee</h4>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Proin risus erat ……………
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                </div>
                <div className="list-drinks"></div>
                <div className="list-food"></div>
            </div>
        </div>
    )
}
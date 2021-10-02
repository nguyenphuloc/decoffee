import React from 'react';
import './styles.scss';

import menu from '../../assets/image/menu-shape.png';

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
                            Proin risus erat..................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Bacon, Ham, Cumberland, Sausage, Chorizo..................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            "Full" Paris Breakfast 17".............................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Proin risus erat..................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Three Egg Omelet 17.............................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                </div> 
                <div className="list-drinks">
                <div className="list">
                        <h4>Drinks</h4>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Proin risus erat..................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Bacon, Ham, Cumberland, Sausage, Chorizo..................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            "Full" Paris Breakfast 17".............................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Proin risus erat..................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Three Egg Omelet 17.............................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                </div>
                <div className="list-food">
                <div className="list">
                        <h4>Fast Food</h4>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Proin risus erat..................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Bacon, Ham, Cumberland, Sausage, Chorizo..................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            "Full" Paris Breakfast 17".............................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Proin risus erat..................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                    <div className="menu-item">
                        <h4>
                            Three Egg Omelet 17.............................................................................................
                            <span>5$</span>
                        </h4>
                        <p>
                            Sed ultrices nisl velit
                        </p>
                    </div>
                </div>
            </div>
            <div className="menu-img">
                <img src={menu} alt=""/>
            </div>
        </div>
    )
}
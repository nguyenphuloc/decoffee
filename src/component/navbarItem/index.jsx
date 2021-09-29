import React from 'react';
import classNames from 'classnames';

export default function NavbarItem(props) {
    const { name, modifier, handleOnClick} = props;
    const className = classNames(
        "cpn-navbar-item",
        modifier && `cpn-navbar-item--${modifier}`
    );

    return(
        <div
            className={className}
            onClick={handleOnClick}
        >
            {name}
        </div>
    )
}
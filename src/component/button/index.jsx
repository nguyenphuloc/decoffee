import React from 'react';
import './styles.scss';
import classNames from 'classnames';

export default function Button(props) {
    const { modifier, children, ...buttonProps } = props;

    const className = classNames(
        "cpn-button",
        modifier && `cpn-button--${modifier}`
    );
    return(
        <button
            className={className}
            {...buttonProps}
        >
            {children}
        </button>
    )
}
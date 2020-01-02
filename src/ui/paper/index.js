import React from 'react'
import classNames from 'classnames'

import './Paper.scss'

export function Paper(props) {
    const { className, children } = props

    return (
        <div {...{
            className: classNames('ui-paper', className),
        }}>
            {children}
        </div>
    )
}

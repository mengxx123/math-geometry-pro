import React from 'react'
import classNames from 'classnames'

import './Input.scss'

export function Container(props) {
    const { className, children, maxWidth } = props

    const style = {}
    if (maxWidth) {
        style.maxWidth = maxWidth
    }

    return (
        <div {...{
            className: classNames('ui-container', className),
            style,
            // onClick
        }}
        >
            {children}
        </div>
    )
}
// export

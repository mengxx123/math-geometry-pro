import React from 'react'
import classNames from 'classnames'

import './AppBar.scss'

import { IconButton } from '../iconButton'

export function AppBar(props) {
    const { className, title, action, onMenuClick } = props

    return (
        <div {...{
            className: classNames('ui-appbar', className),
            // onClick
        }}
            
        >
            <div className="appbar-left">
                <IconButton className="appbar-menu-btn" icon="menu" onClick={onMenuClick} />
                <div className="ui-appbar-title">{title}</div>
            </div>
            <div className="appbar-right">{action}</div>
        </div>
    )
}
// export
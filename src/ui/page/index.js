import React from 'react'
// import classNames from 'classnames'
// import { Page as UIPage, Button, AppBar, Input, Paper } from '../../ui'
// import { Container } from '..'

// import classes from './index.module.scss'

// console.log('classes 关于', classes)

export class Page extends React.Component {

    render() {
        const { children } = this.props
        
        return (
            <div className="ui-page">
                {children}
            </div>
        )
    }
}

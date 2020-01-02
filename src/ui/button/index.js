import React from 'react'
import classNames from 'classnames'

import './Button.scss'

function ButtonGroup(props) {
    const { children, className } = props
    return (
        <div className={classNames('ui-buttons', className)}>
            <div>{children}</div>
        </div>
    )
    
}
export class Button extends React.Component {

    static ButtonGroup = ButtonGroup

    componentDidMount() {
        console.log('==button componentDidMounted')
    }

    render() {
        const { className, color, children, onClick } = this.props
    
        console.log('==button render')
    
        return (
            <button {...{
                className: classNames('ui-btn', 'ui-button-' + color, className),
                onClick,
                type: 'button'
            }}
                
            >{children}</button>
        )
    }
}

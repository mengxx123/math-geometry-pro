import React from 'react'
import classNames from 'classnames'

import './Input.scss'
// import Button

export class IconButton extends React.Component {

    state = {
        isHover: false,
    }

    render() {
        const { className, icon, href, target, onClick } = this.props
        const { isHover } = this.state
        const setState = data => this.setState(data)
    
        console.log('==input render')
    
        function handlerClick() {
            if (onClick) {
                onClick()
            } else if (href) {
                window.open(href, target)
            }
        }

        function handlerMouseEnter() {
            setState({
                isHover: true,
            })
        }

        function handlerMouseLeave() {
            setState({
                isHover: false,
            })
        }
    
        return (
            <button className={classNames('ui-icon', 'ui-icon-button', {'ui-hover': isHover}, className)} type="button"
                onMouseEnter={handlerMouseEnter}
                onMouseLeave={handlerMouseLeave}
                onClick={handlerClick}>
                <i className={classNames('ui-icon', 'material-icons')}>{icon}</i>
            </button>
        )
    }
}

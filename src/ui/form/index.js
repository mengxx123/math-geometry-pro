import React from 'react'
import './index.scss'
import classNames from 'classnames'

function Item(props) {
    const { label, children, className } = props
    return (
        <div className={classNames('ui-form-item', className)}>
            <div className="label">{label}</div>
            <div>
                {children}
            </div>
        </div>
    )
}

export class Form extends React.Component {

    static Item = Item

    render() {
        const { children, className } = this.props
        
        return (
            <form className={classNames('ui-form', className)}>
                {children}
            </form>
        )
    }
}

import React from 'react'
import classes from './index.module.scss'

function Item(props) {
    const { title, children } = props
    return (
        <div className={classes.attrItem}>
            <div className={classes.title}>{title}</div>
            <div>{children}</div>
        </div>
    )
}

export default class NumberValue extends React.Component {

    static Item = Item

    render() {
        const { children } = this.props
        // const { modalVisible } = this.state
        // const setState = data => this.setState(data)

        // function copyValue() {
        //     copy(value)
        //     toast.success('已复制')
        // }
        return (
            <div className={classes.attrList}>
                {children}
            </div>
        )
    }
}

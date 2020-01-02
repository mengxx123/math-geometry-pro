import React from 'react'
import classes from './index.module.scss'
import { Input } from '../../ui'

console.log('classes', classes)

export default class NumberValue extends React.Component {

    render() {
        const { value, onChange } = this.props
        // const { modalVisible } = this.state
        // const setState = data => this.setState(data)

        function setOrigin() {
            onChange('0, 0')
        }

        return (
            <div className={classes.box}>
                <div className={classes.input}>
                    <Input {...this.props} />
                </div>
                <div onClick={setOrigin}>
                    原点
                </div>
            </div>
        )
    }
}

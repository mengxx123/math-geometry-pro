import React from 'react'
import classes from './index.module.scss'
import { Dialog, toast } from '../../ui'
import copy from 'copy-to-clipboard'

export default class NumberValue extends React.Component {

    state = {
        modalVisible: false,
    }

    render() {
        const { value } = this.props
        const { modalVisible } = this.state
        const setState = data => this.setState(data)

        function copyValue() {
            copy(value)
            toast.success('已复制')
        }

        function simpleNum(num, dig) {
            let text = '' + num
            if (text.includes('.')) {
                return text.replace(/\.?0+$/, '')
            }
            return text
        }
        return (
            <div className={classes.value2}>
                <div className={classes.value} onClick={() => setState({ modalVisible: true })}>{simpleNum(parseFloat(value).toFixed(4))}</div>
                <Dialog
                    visible={modalVisible}
                    onCancel={() => setState({
                        modalVisible: false,
                    })}
                >
                    <Dialog.Title>数值</Dialog.Title>
                    <Dialog.Body>
                        <div className={classes.body}>
                            {value}
                        </div>
                    </Dialog.Body>
                    <Dialog.Action>
                        <Dialog.Button onClick={copyValue}>复制</Dialog.Button>
                    </Dialog.Action>
                </Dialog>
            </div>
        )
    }
}

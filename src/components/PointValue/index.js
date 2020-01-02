import React from 'react'
import classes from './index.module.scss'
import { Dialog, toast } from '../../ui'
import copy from 'copy-to-clipboard'

export default class PointValue extends React.Component {

    state = {
        modalVisible: false,
    }

    componentDidMount() {
        
        // const ClipboardJS = window.ClipboardJS
        // let clipboard = new ClipboardJS('.btn-copy', {
        //     // target(trigger) {
        //     //     return trigger
        //     // },
        //     // text: trigger => {
        //     //     return `${this.value}`
        //     // }
        // })
        // clipboard.on('success', e => {
        //     toast.success('已复制')
        //     e.clearSelection()
        // })
        // clipboard.on('error', e => {
        //     console.error('Action:', e.action)
        //     console.error('Trigger:', e.trigger)
        // })
    }

    render() {
        const { value } = this.props
        const { modalVisible } = this.state
        const setState = data => this.setState(data)

        let exp = `${value.x}, ${value.y}`

        function copyValue() {
            copy(exp)
            toast.success('已复制')
        }

        return (
            <div className={classes.value2}>
                <div className={classes.value} onClick={() => setState({ modalVisible: true })}>
                    {exp}
                </div>
                <Dialog
                    visible={modalVisible}
                    onCancel={() => setState({
                        modalVisible: false,
                    })}
                >
                    <Dialog.Title>点</Dialog.Title>
                    <Dialog.Body>
                        <div className={classes.body}>
                            ({exp})
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

import React from 'react'
import './index.scss'

function Title(props) {
    const { children } = props
    return (
        <div className="ui-dialog-title">
            {children}
        </div>
    )
}

function Body(props) {
    const { children } = props
    return (
        <div className="ui-dialog-body">
            {children}
        </div>
    )
}

function Action(props) {
    const { children } = props
    return (
        <div className="ui-dialog-action">
            {children}
        </div>
    )
}

export class Drawer extends React.Component {

    static Title = Title
    static Body = Body
    static Action = Action

    render() {
        const { children, visible, onCancel } = this.props
        if (!visible) {
            return <div></div>
        }
        
        function handlerClickContent(e) {
            e.stopPropagation()
        }

        return (
            <div className="ui-drawer" onClick={onCancel}>
                <div className="detail" onClick={handlerClickContent}>
                    {children}
                </div>
            </div>
        )
    }
}

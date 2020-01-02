import React from 'react'
import classNames from 'classnames'

import './Input.scss'

export class Input extends React.Component {

    state = {
        isFocus: false,
    }

    render() {
        const { className, defaultValue, hint, type= 'text', value, onChange } = this.props
        const { isFocus } = this.state
        const setState = data => this.setState(data)
    
        console.log('==input render')
    
        function handlerChange(e) {
            onChange && onChange(e.target.value)
        }
    
        function handlerFocus() {
            setState({
                isFocus: true
            })
            console.log('focus')
        }
    
        function handlerBlur() {
            setState({
                isFocus: false
            })
            console.log('handlerBlur')
        }
    
    
        return (
            <div {...{
                className: classNames('ui-input', className),
                // onClick
            }}
            >
                <input className={classNames('ui-input-input', {'ui-focus': isFocus})}
                    type={type}
                    placeholder={hint}
                    onFocus={handlerFocus}
                    onBlur={handlerBlur}
                    defaultValue={defaultValue} value={value} onChange={handlerChange} />
            </div>
        )
    }
}
// export

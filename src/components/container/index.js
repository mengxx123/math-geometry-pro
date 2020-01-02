import React from 'react'
import { Container as UIContainer } from '../../ui'
import './Input.scss'

export function Container(props) {
    const { children, maxWidth } = props

    const style = {}
    if (maxWidth) {
        style.maxWidth = maxWidth
    }

    return (
        <UIContainer {...{
            ...props,
            maxWidth: 1200
        }}
        >
            <div style={{padding: 16}}>
                {children}
            </div>
        </UIContainer>
    )
}

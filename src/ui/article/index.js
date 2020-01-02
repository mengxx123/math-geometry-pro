import React from 'react'
// import './index.scss'

export class Article extends React.Component {

    render() {
        const { children } = this.props
        
        return (
            <article className="ui-article">
                {children}
            </article>
        )
    }
}

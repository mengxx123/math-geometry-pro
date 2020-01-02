import React from 'react'

export class App extends React.Component {

    render() {
        const { children } = this.props
        
        return (
            <form className="ui-app">
                {children}
            </form>
        )
    }
}

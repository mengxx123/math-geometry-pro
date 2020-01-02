import React, { Component  } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { App as UIApp } from './ui'
// page
import Home from './pages/Home'
import About from './pages/About'
import Point from './pages/Point'
import Line from './pages/Line'
import Angle from './pages/Angle'

import './reset.css'
import './App.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <UIApp>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/point" component={Point} />
                    <Route path="/angle" component={Angle} />
                </UIApp>
                {/* <div className="ui-app">
                </div> */}
            </BrowserRouter>
        )
    }
}

export default App

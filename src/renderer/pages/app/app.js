import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import autobind from 'autobind-decorator'

import './app.scss'

@autobind
class App extends Component {
    static propTypes = {
    }

    state = {
        msg: '2'
    }

    async getList() {
        // this.setState({
        //     msg: 'haha12'
        // })
    }

    async componentDidMount() {
        await this.getList();
    }
    

    render() {
        return (
            <div className="app">
                1
                <br/>
                {this.state.msg}
            </div>
        )
    }
}

export default hot(module)(App)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import autobind from 'autobind-decorator'

// Components
import Nav from '../../components/nav/nav';
import Grid from '@material-ui/core/Grid';

import './app.scss'

@autobind
class App extends Component {
    static propTypes = {
    }

    state = {
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
                <Nav />
                <main className="main-content">
                    
                </main>
            </div>
        )
    }
}

export default hot(module)(App)

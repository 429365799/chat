import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom'
import classnames from 'classnames';
import autobind from 'autobind-decorator';

// Components
import UserStatePopover from './comps/user-state-popover/user-state-popover';
import { green, grey, yellow } from '@material-ui/core/colors';

import './nav.scss'

@autobind
class Nav extends Component {

    data = {
        onlineStatus: [
            {
                code: 'online',
                label: '在线',
                color: green,
            },
            {
                code: 'offline',
                label: '离线',
                color: grey,
            },
            {
                code: 'busy',
                label: '忙碌',
                color: yellow,
            }
        ]
    }

    state = {
        showUserStatePopover: false,
    }

    toggleUserState() {
        this.setState({
            showUserStatePopover: !this.state.showUserStatePopover
        })
    }

    onOnlineStateChange() {

    }

    render() {
        const {
            showUserStatePopover,
        } = this.state;

        return (
            <aside className="nav-container">
                <header className="user-portrait">
                    <div className="portrait-pic">
                        <img src={ require('../../assets/images/portrait.jpeg') } alt=""/>
                    </div>

                    <div className={ classnames("user-name", { closed: !showUserStatePopover }) } >
                        <span
                            className="name-text"
                            onClick={ this.toggleUserState }
                        >
                            喵神的蔑视-FuckOff
                        </span>
                        <i className="iconfont icon-xiajiantou"></i>

                        <UserStatePopover 
                            show={ showUserStatePopover }
                            onlineStatus={ this.data.onlineStatus }
                            onOnlineStateChange={ this.onOnlineStateChange }
                        />
                    </div>
                </header>
            </aside>
        );
    }
}

Nav.propTypes = {

};

export default Nav;
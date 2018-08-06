import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom'

// Components
import Grid from '@material-ui/core/Grid';

import './nav.scss'

class Nav extends Component {
    render() {
        return (
            <aside className="nav-container">
            </aside>
        );
    }
}

Nav.propTypes = {

};

export default Nav;
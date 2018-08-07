import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import OnlinePoint from '../online-point';

import './user-state-popover.scss'

const UserStatePopover = ({ show=false, onlineStatus=[] }) => {

    return (
        <CSSTransition
            in={ show }
            timeout={ 300 }
            classNames="user-state-popover"
            unmountOnExit
        >
            <aside className="user-state-popover">
                {
                    onlineStatus.map((item, index) => (
                        <span key={`status-label-${index}`} className="status-label">
                            <OnlinePoint color={ item.color[400] } />
                            { item.label }
                        </span>
                    ))
                }
            </aside>
        </CSSTransition>
    );
};

UserStatePopover.propTypes = {
    show: PropTypes.bool,
    onlineStatus: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string,
        label: PropTypes.string,
        color: PropTypes.object,
    })),
};

export default UserStatePopover;
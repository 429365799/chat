import React from 'react';
import PropTypes from 'prop-types';

const styles = (color="#00796B") => ({
    display: 'inline-block',
    width: 14,
    height: 14,
    borderRadius: '50%',
    backgroundColor: color,
})

const OnlinePoint = props => {
    return (
        <i style={ styles(props.color) }></i>
    );
};

OnlinePoint.propTypes = {
    color: PropTypes.string,
};

export default OnlinePoint;
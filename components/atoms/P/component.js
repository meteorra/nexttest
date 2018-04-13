import React from 'react';
import PropTypes from 'prop-types';

import StyledP from './styles';

const P = ({ children }) => <StyledP>{children}</StyledP>;

P.propTypes = {
    children: PropTypes.node.isRequired,
};

export default P;

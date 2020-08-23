/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './AppWrapper.scss';

export default function Wrapper({ children }) {
  return <div className="wrapper">{children && children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.any,
};

Wrapper.defaultProps = {
  children: <p>Default message</p>,
};

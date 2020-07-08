import React from 'react';
import PropTypes from 'prop-types';

export default function App({ message }) {
  return (
    <>
      {message}
      <p>dasd</p>
    </>
  );
}
App.propTypes = {
  message: PropTypes.string,
};

App.defaultProps = {
  message: 'laba diena su vistiena',
};

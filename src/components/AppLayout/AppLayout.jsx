import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Posts from '../posts/Posts';
import ThemeContext from '../../shared/ThemeContext';

const AppLayout = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Posts />
      <button type="button" onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default AppLayout;

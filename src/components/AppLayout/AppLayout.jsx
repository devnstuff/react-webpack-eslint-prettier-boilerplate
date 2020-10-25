import React, { useContext } from 'react';
import Posts from '../posts/Posts';
import ThemeContext from '../../shared/ThemeContext';
import './style.scss';

const AppLayout = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="layout">
      <Posts />
      <button type="button" onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default AppLayout;

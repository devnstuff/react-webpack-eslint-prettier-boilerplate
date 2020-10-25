import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { LIGHT_THEME, DARK_THEME } from '../constants/theme';

const ThemeContext = React.createContext({
  dark: false,
  toggleTheme: () => {},
});

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  };

  const toggleTheme = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .25s ease';

    setDark(!dark);
    window.localStorage.setItem('darkTheme', !dark);
  };

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme');

    if (lastTheme === 'true') {
      setDark(true);
      applyTheme(DARK_THEME);
    } else {
      setDark(false);
      applyTheme(LIGHT_THEME);
    }
  });

  return <ThemeContext.Provider value={{ dark, toggleTheme }}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

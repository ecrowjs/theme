import defaultTheme from './defaultTheme';
import React from 'react';

/**
 * Provides the theme for components.
 */
const ThemeContext = React.createContext(defaultTheme);

export default ThemeContext;

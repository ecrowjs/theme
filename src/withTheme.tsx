import React from 'react';
import ThemeContext from './ThemeContext';

/**
 * A higher order component that injects a component with the theme object.
 * @param Component The component to compose.
 */
function withTheme<C extends React.ComponentClass | React.FunctionComponent>(
  Component: C
): C {
  return (((props: any) => (
    <ThemeContext.Consumer>
      {(theme) => <Component {...props} theme={theme} />}
    </ThemeContext.Consumer>
  )) as any) as C;
}

export default () => (target: any) => withTheme(target);

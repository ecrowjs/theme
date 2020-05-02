<div align="center">@eCrowJS</div>
<h1 align="center">Theme</h1>

<div align="center">

[![npm package](https://img.shields.io/npm/v/@ecrowjs/theme/latest.svg)](https://www.npmjs.com/package/@ecrowjs/theme)
[![build](https://img.shields.io/travis/ecrowjs/theme/master)](https://travis-ci.org/github/ecrowjs/theme)

A structured TypeScript interface for common all-inclusive theming among JS components.

This package also comes with a default JSON object and ReactJS Context instance (Reducers & Actions in progress).

</div>

## Installation

eCrowJS Theme can be installed as an [npm package](https://www.npmjs.com/package/@ecrowjs/theme).

```bash
# Install with NPM
npm install @ecrowjs/theme
# Install with Yarn
yarn add @ecrowjs/theme
```

## Usage

### ReactJS

Basic example of using this package in a ReactJS project

```jsx
import React from 'react';
import { ThemeContext, defaultTheme } from '@ecrowjs/theme';

// Main application with theme provider.
function App(props) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <themedButton />
    </ThemeContext.Provider>
  );
}

// Component that consumes the theme object provided.
function themedButton(props) {
  return (
    <ThemeContext.Consumer>
      (theme) => (
      <button
        style={{
          backgroundColor: theme.color.base.background,
        }}
      />)
    </ThemeContext.Consumer>
  );
}
```

Alternatively, you can use the `withTheme` decorator on the React Component.

```jsx
const themedButton = withTheme()(Button);
```

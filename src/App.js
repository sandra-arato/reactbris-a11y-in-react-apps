import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';
import { Login } from './containers';
const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Login path="/" />
      </Router>
    </>
    
  );
}

export default App;

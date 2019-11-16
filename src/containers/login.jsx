import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const Img = styled.img`
  height: 3rem;
`

export const Login = () => (
    <main className="App">
      <header className="App-header">
        <Img src={logo} className="App-logo" alt="logo" />
        <h1>
          Login to Amazing App
        </h1>
      </header>
      <form>
        <span>
            Name
        </span>
        <input />
        <span>
          Your name
        </span>
        <input />
        <button>Sign in</button>
      </form>
    </main>
)
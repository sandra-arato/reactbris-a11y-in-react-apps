import React from 'react';
import styled from 'styled-components';
import { navigate }from '@reach/router';
import logo from '../logo.svg';
import { Input, Button } from '../components';

const Main = styled.main`
    display: flex;
    min-height: 100vh;
    background: #0e1075;
    flex-direction: column;
    justify-content: center;
`

const Img = styled.img`
    display: block;
    width: 8.5rem;
    margin: 2rem auto 1rem auto;
`

const Form = styled.form`
    display: flex;
    width: 100%;
    max-width: 25rem;
    flex-direction: column;
    margin: 2rem auto 0 auto;
`

const Heading = styled.h1`
    color: #e1f0ff;
    margin: 0 auto;
    text-align: center;
`

export const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.elements[0].value;
        event.target.reset();
        navigate(`/dashboard/${name}`, {state: { pwd: true }})
    }
    return (
      <Main className="App">
        <header>
          <Img src={logo} alt="logo" />
          <Heading>
            Login to Amazing App
          </Heading>
      </header>
      <Form onSubmit={handleSubmit}>
          <Input
              label="Your name"
              placeholder="Enter your name"
              id="name"
              required
          />
          <Input
              label="Your password"
              type="password"
              placeholder="Enter your password"
              id="pwd"
              required
          />
          <Button>Login</Button>
  
      </Form>
      </Main>
    )
}
import React from 'react';
import { Redirect, Link }from '@reach/router';
import styled from 'styled-components';
import logo from '../logo.svg';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #0e1075;
    min-height: 100vh;
`

const Nav = styled.nav`
    box-sizing: border-box;
    flex-direction: row;
    background: #090a52;
    color: #fff;
    padding: 1rem 2rem;
    align-items: center;
`
const Img = styled.img`
    display: inline-flex;
    width: 1.5rem;
    margin-right: 0.5rem;
`

const StyledLink = styled(Link)`
    display: inline-flex;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #07d3ac;

    &:focus, &:active, &:hover {
        color: #fff;
        outline: none;
    }
`

const Anchor = styled.a`
    color: #e1f0ff;
    text-decoration: none;

    &:focus, &:active, &:hover {
        color: #fff;
        outline: none;
        text-decoration: underline;
    }
`

const Copy = styled.p`
    font-size: 2.5rem;
    font-weight: 500;
    padding: 0 2rem;

    span {
        display: block;
    }
`

const Main = styled.main`
    box-sizing: border-box;
    padding: 2rem 1rem;
    color: #e1f0ff;
    text-align: center;
`
const calcDiff = now => {
    const nye = new Date('2020-01-01T00:00:00');
    const timestamptNow = now.getTime();
    const timestampNye = nye.getTime();
    
    const days = (timestampNye - timestamptNow)/ (1000 * 3600 * 24);
    const hours = (days - Math.floor(days)) * 24;
    const minutes = (hours - Math.floor(hours)) * 60;

    return `
        ${Math.floor(days)} days
        ${Math.floor(hours)} hours and
        ${Math.floor(minutes)} minutes
    `
}

export const Dashboard = (props) => {
    if (!props.location.state) {
        return <Redirect to="/" noThrow />
    }
    const now = new Date();
    return (
        <Wrapper>
            <Nav>
                <StyledLink to="/">
                    <Img src={logo} className="App-logo" alt="logo" />
                    Log out
                </StyledLink>
            </Nav>
            <Main>
                <h1>Hello {props.name}!</h1>
                <Copy>
                    There is
                    <span>{calcDiff(now)}</span>
                    left of this year.
                </Copy>
                <Anchor href="https://www.nye.com.au/brisbane/">View programs in Brisbane on New Years Eve</Anchor>
            </Main>
        </Wrapper>
    )
}
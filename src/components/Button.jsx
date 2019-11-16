import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: block;
    box-sizing: border-box;
    max-width: 24rem;
    width: calc(100% - 2rem);
    background: #95ded0;
    color: #0e1075;
    text-transform: uppercase;
    letter-spacing: 0.012rem;
    border: none;
    margin: 2.25rem auto;
    height: 2.5rem;
    font-size: 0.875rem;

    &:focus, &:active, &:hover {
        outline: none;
        background: #55efd1;
        outline: 1px solid rgba(209, 255, 239, 0.5);
        outline-offset: 0.125rem;
    }
`


export const Button = (props) => (
    <StyledButton {...props} />)
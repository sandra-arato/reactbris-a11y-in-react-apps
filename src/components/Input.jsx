import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
    display: flex;
    position: relative;
    box-sizing: border-box;
    max-width: ${props => props.small ? "14rem" : "26rem"};
    width: calc(100% - 2rem);
    flex-direction: ${props => props.small ? "row" : "column"};
    margin: 0.25rem auto 0.5rem auto;
    padding: 0.5rem 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
`

const InputField = styled.input`
    display: block;
    box-sizing: border-box;
    border: none;
    padding: 0.25rem 0.5rem;
    height: 2.75rem;
    line-height: 2.75rem;
    font-size: 1.25rem;
    width: 100%;
    color: #f7fbff;
    background: #696bb1;

    ::placeholder {
        color: #e1f0ff;
        opacity: 0.5;
    }
    &:focus, &:active {
        background: #4c4fc3;
        outline: 1px solid #fff;

        ::placeholder {
            opacity: 0.65;
        }
    }
`

const Label = styled.span`
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
    color: #e1efff;
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 0.25rem;
`

export const Input = ({label, small, id, onChange, ...rest}) => (
    <Wrapper htmlFor={id} small={small}>
        <Label>{label}</Label>
        <InputField id={id} name={id} onChange={onChange} {...rest} />
    </Wrapper>
)
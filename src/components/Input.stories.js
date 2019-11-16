import React from 'react';
import { addDecorator } from '@storybook/react';
import { Input } from './Input';
import { withA11y } from '@storybook/addon-a11y';
import styled from 'styled-components';

addDecorator(withA11y);

const Wrapper = styled.div`
    background: #0e1075;
    margin: 0;
    padding: 2rem 1rem;
    min-height: 100vh;
`

export default {
  title: 'Input',
};

export const input = () => (
    <Wrapper>
        <Input
            label="Label"
            id="textfield"
            placeholder="Put your text here"
        />
    </Wrapper>
  
);

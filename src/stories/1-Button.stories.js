import React from 'react';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '..'

const stories = storiesOf('Button', module)

stories
  .add('base', () => <Button onClick={action('clicked')}>Click Me!</Button>)
  .add('disabled', () => (
    <Button isDisabled onClick={action('clicked')}>
      Disabled
    </Button>
  ))

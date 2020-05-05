import { storiesOf } from '@storybook/react'
import React from 'react'

import EmptyBox from '..'

const stories = storiesOf('Box', module)

stories.add('default', () => <EmptyBox />)

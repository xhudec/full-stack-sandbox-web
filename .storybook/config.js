import { configure, addDecorator, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'
import { ThemeProvider } from 'styled-components'

import theme from '@theme'

// automatically import all files ending in *.stories.tsx
const req = require.context('../components', true, /.stories.tsx?$/)

function loadStories() {
  req.keys().forEach(req)
}

function withTheme(cb) {
  return <ThemeProvider theme={theme}>{cb()}</ThemeProvider>
}

addParameters({
  options: {
    theme: themes.light,
  },
})

addDecorator(withTheme)

configure(loadStories, module)

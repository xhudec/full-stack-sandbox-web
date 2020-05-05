import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme, { ITheme } from '@theme'

export default function renderWithTheme(
  ui: JSX.Element,
  theme: ITheme = defaultTheme
): RenderResult {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

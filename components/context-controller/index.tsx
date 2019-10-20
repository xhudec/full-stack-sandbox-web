import React from 'react'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'

import { ITheme } from '@theme'

export interface IContextControllerProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
  theme: ITheme
  children: JSX.Element
}

export default function ContextController({
  apolloClient,
  theme,
  children,
}: IContextControllerProps): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ApolloProvider>
  )
}

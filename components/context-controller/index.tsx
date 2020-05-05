import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import React from 'react'
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

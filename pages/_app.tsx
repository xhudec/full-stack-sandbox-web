import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import App, { AppProps } from 'next/app'
import React from 'react'

import ContextController from '@components/context-controller'

import withApollo from '@modules/graphql/with-apollo'
import theme from '@theme'

interface IMyAppProps extends AppProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

class MyApp extends App<IMyAppProps> {
  render(): JSX.Element {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <ContextController apolloClient={apolloClient} theme={theme}>
        <Component {...pageProps} />
      </ContextController>
    )
  }
}

export default withApollo(MyApp)

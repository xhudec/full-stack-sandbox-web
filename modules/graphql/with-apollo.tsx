import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import NextApp, { AppProps, AppContext, AppInitialProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import isBrowser from '@utils/is-browser'

import initializeApollo from './initialize-apollo'

interface IWithApolloProps extends AppProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
  apolloState: NormalizedCacheObject
}

interface IWithApolloInitialProps extends AppInitialProps {
  apolloState: NormalizedCacheObject
}

export default function withApollo(App: typeof NextApp): React.ComponentType<IWithApolloProps> {
  return class extends React.Component<IWithApolloProps> {
    static displayName = 'withApollo(App)'

    static async getInitialProps(ctx: AppContext): Promise<IWithApolloInitialProps> {
      const { AppTree, Component, router } = ctx
      let pageProps = {}

      if (App.getInitialProps) {
        pageProps = await App.getInitialProps(ctx)
      }

      const apolloClient = initializeApollo({})

      if (!isBrowser()) {
        try {
          await getDataFromTree(
            <AppTree
              Component={Component}
              router={router}
              pageProps={{ ...pageProps, apolloClient }}
            />
          )
        } catch (err) {
          console.error('🚨 [withApollo] Error:', err)
        }

        Head.rewind()
      }

      const apolloState = apolloClient.cache.extract()

      return {
        pageProps,
        apolloState,
      }
    }

    constructor(props: IWithApolloProps) {
      super(props)
      this.apolloClient = props.apolloClient || initializeApollo(props.apolloState)
    }

    apolloClient: ApolloClient<{}>

    render(): JSX.Element {
      return <App apolloClient={this.apolloClient} {...this.props} />
    }
  }
}

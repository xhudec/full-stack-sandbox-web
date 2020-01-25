import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from 'apollo-boost'
// eslint-disable-next-line no-shadow
import fetch from 'isomorphic-unfetch'

import isBrowser from '@utils/is-browser'

export default function createApolloClient(
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  const isBrowserEnv = isBrowser()

  return new ApolloClient({
    connectToDevTools: isBrowserEnv,
    ssrMode: !isBrowserEnv,
    link: new HttpLink({
      uri: process.env.GRAPHQL_SERVER_URL,
      credentials: 'same-origin',
      // eslint-disable-next-line no-undefined
      fetch: !isBrowserEnv ? fetch : undefined,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

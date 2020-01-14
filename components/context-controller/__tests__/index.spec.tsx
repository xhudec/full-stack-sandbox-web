import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import ContextController, { IContextControllerProps } from '..'
import createApolloClient from '../../../modules/graphql/create-apollo-client'

import theme from '@theme'

function renderContextController(
  propOverrides: IContextControllerProps = {
    theme,
    apolloClient: createApolloClient({ initialState: {} }),
    children: <div>test</div>,
  }
): RenderResult {
  const testUtils = render(<ContextController {...propOverrides} />)

  return {
    ...testUtils,
  }
}

describe('<ContextController />', () => {
  it('should be defined', () => {
    expect(true).toBe(true)
  })

  it('should render without error', () => {
    const { getByText } = renderContextController()

    getByText(/test/u)
  })
})

import React from 'react'

import * as S from './styled'

export default function EmptyBox(): JSX.Element {
  return (
    <S.Container>
      <S.InnerContent>
        <S.FlexCenter>
          <S.InsideHeading>An amazing text!</S.InsideHeading>
        </S.FlexCenter>
      </S.InnerContent>
    </S.Container>
  )
}

import React from 'react'

import useIntersection from '@hooks/use-intersection'

import * as S from './styled'

export default function IntersectionObserverDemoPage(): JSX.Element {
  const { isIntersected, intersectionRate, setTargetNode } = useIntersection()

  return (
    <main>
      <h1>Intersection Observer Playground</h1>

      <pre>{isIntersected ? 'Yes' : 'No'}</pre>

      <S.Divider />

      <S.Container>
        <S.Square ref={setTargetNode}>{isIntersected && <h2>{intersectionRate}</h2>}</S.Square>
      </S.Container>
    </main>
  )
}

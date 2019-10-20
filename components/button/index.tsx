import React from 'react'

import * as S from './styled'

export interface IButtonProps {
  children: React.ReactNode

  onClick: React.MouseEventHandler
  /**
   * @default false
   */
  isDisabled?: boolean
}

export default function Button({
  children,
  onClick,
  isDisabled = false,
}: IButtonProps): JSX.Element {
  return (
    <S.Button onClick={onClick} disabled={isDisabled}>
      {children}
    </S.Button>
  )
}

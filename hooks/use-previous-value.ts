import React from 'react'

export default function usePreviousValue<T>(value: T): T | null {
  const previousValue = React.useRef<T | null>(null)

  React.useEffect(() => {
    previousValue.current = value
  })

  return previousValue.current
}

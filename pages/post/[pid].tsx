import React from 'react'
import { useRouter } from 'next/router'

export default function Post(): JSX.Element {
  const router = useRouter()

  const { pid } = router.query

  return (
    <div>
      <h1>Page Header #{pid}</h1>
      <p>Page Content</p>
    </div>
  )
}

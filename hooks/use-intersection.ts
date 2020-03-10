import React from 'react'

const defaultThreshold = Array.from(Array(100)).map((_, index) => index / 100)

interface IUseIntersectionInput {
  threshold?: number | number[]
}

interface IUseIntersection {
  isIntersected: boolean
  intersectionRate: number
  setTargetNode: (node: Element | null) => void
}

export default function useIntersection({
  threshold = defaultThreshold,
}: IUseIntersectionInput = {}): IUseIntersection {
  const [targetNode, setTargetNode] = React.useState<Element | null>(null)
  const [isIntersected, setIntersected] = React.useState(false)
  const [intersectionRate, setIntersectionRate] = React.useState(0)

  const observer = React.useRef(
    typeof window !== 'undefined'
      ? new IntersectionObserver(
          ([entry]) => {
            setIntersected(entry.isIntersecting)
            setIntersectionRate(entry.intersectionRatio)
          },
          {
            threshold,
          }
        )
      : null
  )

  React.useEffect(() => {
    const { current: currentObserver } = observer

    if (currentObserver) {
      currentObserver.disconnect()

      if (targetNode) {
        currentObserver.observe(targetNode)
      }
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect()
      }
    }
  }, [targetNode])

  return {
    isIntersected,
    intersectionRate,
    setTargetNode,
  }
}

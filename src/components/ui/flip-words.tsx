import { useEffect, useState } from 'react'

interface FlipWordsProps {
  words: string[]
  duration: number
  className?: string
}

export const FlipWords: React.FC<FlipWordsProps> = ({ words, duration, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words.length, duration])

  return <span className={className}>{words[currentWordIndex]}</span>
}
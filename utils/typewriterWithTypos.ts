// utils/typewriterWithTypos.ts
import { useEffect, useRef, useState } from 'react'

interface TypewriterOptions {
  text: string
  typingSpeed?: number
  backspaceSpeed?: number
  typoProbability?: number
  maxTyposInRow?: number
  pauseAfterTypo?: number
}

export function useTypewriterWithTypos({
  text,
  typingSpeed = 60,
  backspaceSpeed = 40,
  typoProbability = 0.12,
  maxTyposInRow = 2,
  pauseAfterTypo = 800,
}: TypewriterOptions) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const typoStreakRef = useRef(0)
  const indexRef = useRef(0)

  useEffect(() => {
    // Reset everything when text changes
    setDisplayedText('')
    setIsTyping(true)
    indexRef.current = 0
    typoStreakRef.current = 0

    const typeChar = () => {
      const i = indexRef.current

      if (i >= text.length) {
        setIsTyping(false)
        return
      }

      const shouldTypo =
        Math.random() < typoProbability &&
        typoStreakRef.current < maxTyposInRow &&
        i < text.length - 1

      if (shouldTypo) {
        const code = text.charCodeAt(i)
        const typoChar = String.fromCharCode(code + (Math.random() > 0.5 ? 1 : -1) || 97) // fallback to 'a'
        setDisplayedText((prev) => prev + typoChar)
        typoStreakRef.current++

        timeoutRef.current = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1))

          timeoutRef.current = setTimeout(() => {
            setDisplayedText((prev) => prev + text[i])
            indexRef.current++
            typoStreakRef.current = Math.max(0, typoStreakRef.current - 1)

            timeoutRef.current = setTimeout(typeChar, typingSpeed)
          }, 200)
        }, pauseAfterTypo)
      } else {
        setDisplayedText((prev) => prev + text[i])
        indexRef.current++
        typoStreakRef.current = Math.max(0, typoStreakRef.current - 1)

        timeoutRef.current = setTimeout(typeChar, typingSpeed)
      }
    }

    timeoutRef.current = setTimeout(typeChar, 300)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [text, typingSpeed, backspaceSpeed, typoProbability, maxTyposInRow, pauseAfterTypo])

  return { displayedText, isTyping }
}
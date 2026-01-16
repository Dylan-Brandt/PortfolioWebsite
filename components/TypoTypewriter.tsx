// components/TypewriterTypo.tsx
'use client'

import { useTypewriterWithTypos } from '@/utils/typewriterWithTypos'
import { ReactNode, useMemo } from 'react'

interface TypewriterTypoProps {
  text: string
  className?: string
  typingSpeed?: number
  backspaceSpeed?: number
  typoProbability?: number
  maxTyposInRow?: number
  pauseAfterTypo?: number
  cursorClassName?: string
  children?: ReactNode
}

export default function TypewriterTypo({
  text,
  className = '',
  typingSpeed = 75,
  backspaceSpeed = 55,
  typoProbability = 0.08,
  maxTyposInRow = 2,
  pauseAfterTypo = 600,
  cursorClassName = 'animate-blink',
  children,
}: TypewriterTypoProps) {
  const options = useMemo(
    () => ({
      text,
      typingSpeed,
      backspaceSpeed,
      typoProbability,
      maxTyposInRow,
      pauseAfterTypo,
    }),
    [text, typingSpeed, backspaceSpeed, typoProbability, maxTyposInRow, pauseAfterTypo]
  )

  const { displayedText, isTyping } = useTypewriterWithTypos(options)

  return (
    <div className={`inline ${className}`}>
      {displayedText}
      {isTyping && (
        <span className={`inline-block w-0.5 h-6 bg-current align-middle ml-0.5 ${cursorClassName}`}>
          &nbsp;
        </span>
      )}
      {!isTyping && children}
    </div>
  )
}
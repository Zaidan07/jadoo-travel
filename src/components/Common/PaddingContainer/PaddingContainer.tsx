import React from 'react'

interface PaddingProps {
  children: React.ReactNode
}

export default function PaddingContainer({ children }: PaddingProps) {
  return (
    <div className="mx-auto max-w-full px-[20px] sm:max-w-[1440px] sm:px-[140px]">
      {children}
    </div>
  )
}

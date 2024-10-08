import React from 'react'

interface PaddingProps {
  children: React.ReactNode
}

export default function PaddingContainer({ children }: PaddingProps) {
  return (
    <div className="mx-auto max-w-full px-[30px] md:max-w-[1440px] md:px-[140px]">
      {children}
    </div>
  )
}


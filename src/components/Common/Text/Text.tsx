import React from 'react'

interface TextProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

const Text: React.FC<TextProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'p',
}) => {
  const variantClasses = {
    default: 'text-[#212832]',
    primary: 'text-[#14183E ]',
    secondary: 'text-[#5E6282]',
  }

  const sizeClasses = {
    h1: 'text-[84px] leading-[89px] font-bold',
    h2: 'text-[50px] leading-[64px]',
    h3: 'text-[30px] leading-[54px]',
    h4: 'text-[20px] leading-[29px]',
    h5: 'text-[18px] leading-[26px]',
    h6: 'text-[17px] leading-[24px]',
    p: 'text-[16px] leading-[30px]',
  }

  const combinedClasses = [
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].filter(Boolean).join('')

  const Component = size as keyof JSX.IntrinsicElements

  return <Component className={combinedClasses}>{children}</Component>
}

export default Text

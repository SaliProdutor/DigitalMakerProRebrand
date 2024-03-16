'use client'

import { useState } from "react"

interface ButtonProps {
  name: string
  variant?: 'primary' | 'outline'
  action?: string | any
  href?: string,
  tamanho: 'sm' | 'lg'
}
export function Button({ action, name, variant = 'primary', href, tamanho = 'sm'}: ButtonProps) {
  const [height, setHeight] = useState(tamanho === 'sm' ? '.5rem' : '2rem')
  return (
    <a
      onClick={action}
      href={href}
      className={
        variant === 'primary'
          ? `bg-digitalmaker-blue flex max-w-[20rem] justify-center items-center text-center hover:bg-digitalmaker-blue-200 py-[${height}] px-[2rem] rounded-[15px] text-digitalmaker-offwhite cursor-pointer transition-all duration-75`
          : `bg-transparent max-w-[20rem] justify-center items-center text-center hover:bg-digitalmaker-blue py-[${height}] px-[2rem] border-digitalmaker-blue border-[1px] rounded-[5px] cursor-pointer transition-all duration-75`
      }
    >
      {name}
    </a>
  )
}

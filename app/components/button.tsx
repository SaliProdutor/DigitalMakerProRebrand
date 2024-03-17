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
  const [height, setHeight] = useState(tamanho === 'sm' ? '4rem' : '8rem')
  return (
    <a
      onClick={action}
      href={href}
      className={tamanho === 'sm' ? 'bg-digitalmaker-blue hover:bg-digitalmaker-blue-200 h-[4rem] flex max-w-[20rem] justify-center items-center text-center px-[3rem] rounded-[5px] text-digitalmaker-offwhite cursor-pointer'
      : "bg-digitalmaker-blue hover:bg-digitalmaker-blue-200 h-[5rem] flex max-w-[15rem] justify-center items-center text-center px-[1rem] rounded-[10px] text-digitalmaker-offwhite cursor-pointer"
    }
    >
      {name}
    </a>
  )
}

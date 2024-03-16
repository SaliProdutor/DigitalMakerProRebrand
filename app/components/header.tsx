'use client'
import Logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import { Button } from './button'

export function Header() {
  return (
    <div className="flex flex-1 min-w-full bg-digitalmaker-gray h-[9rem] justify-center items-center py-[.9rem] fixed">
      <div className="flex max-w-[120rem] flex-1 justify-between items-center">
        <div>
          <Image
            src={Logo}
            alt="Logo Digital Maker Pro"
            className=" w-[19rem]"
          />
        </div>
        <div></div>
        <div>
          <Button name="Login" href="#" />
        </div>
      </div>
    </div>
  )
}

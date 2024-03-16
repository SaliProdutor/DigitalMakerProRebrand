import Image from 'next/image'

import Textura from '@/public/assets/TexturaSectionPorque.svg'

export function Porque() {
  return (
    <div className=" bg-digitalmaker-blue h-[70rem]">
      <Image src={Textura} alt="" />
    </div>
  )
}

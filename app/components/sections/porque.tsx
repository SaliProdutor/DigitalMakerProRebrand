import Image from 'next/image'

import Textura from '@/public/assets/TexturaSectionPorque.svg'
import { CardPorque } from '../cardPorque'

export function Porque() {
  return (
    <div className="porque bg-digitalmaker-blue h-[90rem] flex justify-center items-center">
      <div className='flex flex-col max-w-[120rem] w-full h-full gap-[4rem] items-center pt-[10rem]'>
        <h2 className=" text-[4rem] font-bold text-digitalmaker-offwhite">Por que contratar</h2>
        <h2 className=" text-[4rem] mt-[-5rem] font-regular text-digitalmaker-gray">nossa empresa</h2>
        <div className=' flex gap-[2rem]'>
          <CardPorque name="Experiência Comprovada" vetor="Experiencia"/>
          <CardPorque name="Soluções Personalizadas" vetor="Solucoes"/>
          <CardPorque name="Performance Garantida" vetor="Speed"/>
          <CardPorque name="Suporte Eficaz" vetor="Suport"/>
        </div>
      </div>
    </div>
  )
}

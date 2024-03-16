import Image from 'next/image'
import BackgroundHero from '@/public/assets/background-hero.jpg'

export function Hero() {
  return (
    <div className="w-screen h-[50rem] flex overflow-hidden bg-digitalmaker-blue bg-contain">
      <Image className="" src={BackgroundHero} sizes="cover" alt="" />
    </div>
  )
}

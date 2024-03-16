import { Hero } from '@/app/components/sections/hero'
import { Porque } from '@/app/components/sections/porque'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-[9rem]">
      <Hero />
      <Porque />
    </main>
  )
}

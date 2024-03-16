import { Button } from "../button";

export function Hero() {
  return (
    <div className="hero w-full flex h-[60rem] justify-center">
        <div className='flex flex-col max-w-[120rem] w-full h-full pt-[15rem] gap-[4rem]'>
            <h2 className=' text-[4rem] font-regular w-[50rem]'><span className='font-bold'>Soluções eficientes</span> para cada tipo de <span className='font-bold'>negócio</span></h2>
            <Button tamanho="lg" name="Entrar em contato"/>
        </div>    
    </div>
  )
}

import Image from "next/image";

interface ValueProps{
    vetor: string,
    name: string
}

export function CardPorque({vetor, name}:ValueProps){
    const Imagem:any = `/assets/${vetor}.svg`
    return(
        <div className=" bg-digitalmaker-gray/20 pb-[4rem] pt-[9rem] flex flex-col items-center w-[28rem] rounded-[15px] border-[.01rem] border-digitalmaker-offwhite/20">
            <div className="vetor w-[17.5rem] h-[19rem] flex items-center justify-center text-digitalmaker-gray">
                <Image className=" min-w-[10rem] min-h-[10rem]" width={40} height={40} src={Imagem} alt={vetor}/>
            </div>
            <h2 className="text-[3rem] w-[20rem] text-center leading-[3.5rem] font-bold mt-[3rem]">{name}</h2>
            <div className="w-[1rem] h-[1rem] bg-digitalmaker-green rotate-45 mt-[9rem]"/>
        </div>
    )
}
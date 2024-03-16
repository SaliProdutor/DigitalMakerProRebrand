'use client'

import { useState } from 'react'
import { Button } from './button'

export function Footer() {
  const anoAtual = new Date().getFullYear()
  const [ano, setAno] = useState(2023)
  return (
    <div className=" bg-digitalmaker-gray min-h-[55rem] w-screen flex flex-col items-center justify-between">
      <div className=" max-w-[47.3rem] mt-[15rem]">
        <h2 className=" text-center font-regular text-[4rem] leading-[4.5rem]">
          Seu negócio está pronto para o{' '}
          <span className="font-bold text-digitalmaker-blue">
            próximo nível?
          </span>
        </h2>
      </div>
      <Button tamanho='lg' name="Entrar em contato" />
      <ul className=" flex gap-[2rem]">
        <li>
          <a className="text-[1.4rem] cursor-pointer text-digitalmaker-offwhite hover:text-digitalmaker-blue">
            Início
          </a>
        </li>
        <li>
          <a className="text-[1.4rem] cursor-pointer text-digitalmaker-offwhite hover:text-digitalmaker-blue">
            Sobre Nós
          </a>
        </li>
        <li>
          <a className="text-[1.4rem] cursor-pointer text-digitalmaker-offwhite hover:text-digitalmaker-blue">
            Serviços
          </a>
        </li>
        <li>
          <a className="text-[1.4rem] cursor-pointer text-digitalmaker-offwhite hover:text-digitalmaker-blue">
            Case de Sucesso
          </a>
        </li>
        <li>
          <a className="text-[1.4rem] cursor-pointer text-digitalmaker-offwhite hover:text-digitalmaker-blue">
            Novidades
          </a>
        </li>
        <li>
          <a className="text-[1.4rem] cursor-pointer text-digitalmaker-offwhite hover:text-digitalmaker-blue">
            Contato
          </a>
        </li>
      </ul>

      <div className="flex w-full justify-center items-center text-center h-[4rem] border-t-[.02rem] border-digitalmaker-offwhite text-digitalmaker-offwhite text-[1.2rem]">
        <span>
          &copy; {anoAtual === ano ? ano : `${ano} - ${anoAtual}`} Digital Maker
          Pro. Todos os direitos reservados.{' '}
          <a
            href="/privacity"
            target="_blank"
            className="text-digitalmaker-blue hover:text-digitalmaker-blue-200 cursor-pointer"
          >
            Privacidade
          </a>{' '}
          |{' '}
          <a
            href="/terms"
            target="_blank"
            className="text-digitalmaker-blue hover:text-digitalmaker-blue-200 cursor-pointer"
          >
            Termos de Serviço
          </a>
        </span>
      </div>
    </div>
  )
}

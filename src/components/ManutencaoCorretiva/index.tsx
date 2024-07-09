import Image from "next/image"
import mb from "../../../public/dellMotherboard.svg"

export default function ManutencaoCorretiva() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        mx-auto
        justify-center
        items-center
        text-red-50
      `}
      id="manutencaoCorretiva"
    >
      <div className={`w-full flex justify-evenly items-center lg:pt-8`}>
        <Image src={mb} width={480} height={480} alt="" className={`w-full -rotate-6 overflow-hidden rounded-bl-full rounded-r-full hover:transition-transform hover:scale-110 hover:cursor-none`} priority />
        <div className={`flex flex-col`}>
          <p className={`text-5xl lg:text-8xl text-center font-caveat`}>
            Manutenção Corretiva
          </p>
          <p className={`text-lg lg:text-4xl text-center lg:pt-8 pr-4 lg:px-16`}>Este serviço tem como objetivo identificar, e corrigir problemas restaurando a operacionalidade do sistema, ou até mesmo substituindo os componentes danificados.</p>
        </div>
      </div>
    </div>
  )
}

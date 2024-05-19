import Image from "next/image"
import mb from "../../../public/dellMotherboard.svg"

export default function ManutencaoCorretiva() {
  return (
    <div
      className={`
        w-full
        min-h-screen
        flex
        flex-col
        mx-auto
        justify-center
        items-center
        lg:pt-8
        text-red-50
      `}
      id="manutencaoCorretiva"
    >
      <div className={`w-full flex justify-evenly items-center lg:pt-8`}>
        <Image src={mb} width={600} height={600} alt="" className={`w-full overflow-hidden rounded-r-full`} />
        <div className={`flex flex-col`}>
          <p className={`text-3xl lg:text-5xl text-center font-caveat`}>
            Manutenção Corretiva
          </p>
          <p className={`text-sm lg:text-2xl text-center lg:pt-8 px-4 lg:px-16`}>Este serviço tem como objetivo identificar, e corrigir problemas restaurando a operacionalidade do sistema, </p>
          <p className={`text-sm lg:text-2xl text-center lg:pt-8 px-4 lg:px-16`}>ou até mesmo substituindo os componentes danificados.</p>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"
import imgNotebook from "../../../public/notebook.svg"

export default function AcessoRemoto() {
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
      id="acessoRemoto"
    >
      <div className={`w-full flex justify-evenly items-center`}>
        <Image src={imgNotebook} width={600} height={600} alt="" className={`w-full overflow-hidden rounded-bl-full hover:transition-transform hover:scale-125 hover:cursor-none`} priority />
        <div className={`flex flex-col`}>
          <p className={`text-3xl lg:text-5xl text-center font-caveat`}>
            Acesso Remoto
          </p>
          <p className={`text-xs lg:text-2xl text-right lg:pt-8 px-4 lg:px-16`}>Neste modalidade de serviço é realizado o acesso remoto para a resolução de problemas relatados pelo usuário.</p>
          <p className={`text-xs lg:text-2xl text-right lg:pt-8 px-4 lg:px-16`}>Como a instalação de Softwares, impressoras e outros periféricos. onde haja conexão com a internet.</p>
        </div>
      </div>
    </div>
  )
}

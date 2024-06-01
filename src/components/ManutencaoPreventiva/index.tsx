import Image from "next/image"
import imgMotherboard from "../../../public/motherboard.svg"

export default function ManutencaoPreventiva() {
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
      id="manutencaoPreventiva"
    >
      <div className={`w-full flex justify-evenly items-center overflow-hidden`}>
        <div className={`flex flex-col`}>
          <p className={`text-3xl lg:text-8xl text-center font-caveat`}>
            Manutenção Preventiva
          </p>
          <p className={`text-xs lg:text-4xl text-left lg:pt-8 pl-4 lg:px-16`}>Neste serviço é realizado a limpeza e remoção de resíduos como poeira. Substituição de pasta térmica do processador e efetuado um check-up dos hardwares na tentativa de prever possíveis equipamentos defeituosos.</p>
        </div>
        <Image src={imgMotherboard} width={600} height={600} alt="" className={`w-full rotate-12 overflow-hidden rounded-bl-full hover:rounded-bl-full hover:transition-transform hover:scale-150 hover:cursor-none`} priority />
      </div>
    </div>
  )
}

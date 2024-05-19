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
          <p className={`text-3xl lg:text-5xl text-center font-caveat`}>
            Manutenção Preventiva
          </p>
          <p className={`text-sm lg:text-2xl text-center lg:pt-8 px-4 lg:px-16`}>Neste serviço é realizado a limpeza e remoção de resíduos como poeira. substituição de pasta térmica do processador.</p>
          <p className={`text-sm lg:text-2xl text-center lg:pt-8 px-4 lg:px-16`}>E efetuado um check up dos hardwares na tentativa de prever possíveis equipamentos defeituosos.</p>
        </div>
        <Image src={imgMotherboard} width={600} height={600} alt="" className={`w-full overflow-hidden rounded-bl-full hover:rounded-bl-full hover:transition-transform hover:scale-125 hover:cursor-none`} />
      </div>
    </div>
  )
}

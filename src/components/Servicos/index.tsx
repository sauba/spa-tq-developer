import AcessoRemoto from "../Acesso Remoto";
import ManutencaoCorretiva from "../ManutencaoCorretiva";
import ManutencaoPreventiva from "../ManutencaoPreventiva";

export default function About() {
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
        gap-6
      `}
      id="servicos"
    >
      <h1 className={`text-3xl lg:text-6xl font-caveat`}>Serviços</h1>
      <AcessoRemoto />
      <ManutencaoPreventiva />
      <ManutencaoCorretiva />
    </div>
  )
}

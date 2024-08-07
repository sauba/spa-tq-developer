import Image from "next/image"
import imgProfile from "../../../public/sauba.svg"

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
      `}
      id="aboutThiago"
    >
      <span
        className={`
            flex
            flex-col
            justify-center
            gap-1
          `}
      >
        <span
          className={`
              flex
              text-center
              text-2xl
              pt-5
              lg:pt-0
              xl:text-5xl
              font-bad-script
              hover:cursor-none
              justify-center
              items-center
            `}
        >
          Olá, eu sou <p className={`animate-pulse-slow-stop pl-4`}>Thiago José de Queiroz</p>
        </span>
      </span>

      <div className="w-full">
        <Image
          src={imgProfile}
          width={200}
          height={200}
          className={`mx-auto rounded-full hover:cursor-none hover:scale-125 hover:transition-transform hover:duration-500`}
          priority
          alt="Web Developer Thiago Jose de Queiroz"
        />
      </div>
      <p
        className={`
            px-2
            pt-8
            2xl:px-8
            xl:text-2xl
            2xl:text-3xl
            text-center
            tracking-widest
            leading-loose
            font-bad-script
          `}
      >
        Apaixonado por tecnologia e assumidamente um Usuário Linux...
        No momento, estou focando meu aprendizado em linguagens de programação como:
      </p>

      <span className={`text-3xl lg:text-5xl lg:pt-8 font-caveat leading-loose tracking-wider`}>Javascript, NodeJS, ReactJS.</span>

      <p
        className={`
            px-2
            lg:pt-8
            2xl:px-8
            xl:text-2xl
            2xl:text-3xl
            text-center
            tracking-widest
            leading-loose
            font-bad-script
          `}
      >
        Atualmente no processo de transição de carreira, buscando colaborar em projetos onde eu possa dedicar meu melhor para alcançar os objetivos, evoluindo assim meus conhecimentos.
      </p>

      <p
        className={`
            px-2
            lg:pt-8
            2xl:px-8
            xl:text-2xl
            2xl:text-3xl
            text-center
            tracking-widest
            leading-loose
            font-bad-script
          `}
      >
        Possuo experiência com suporte Helpdesk, Administração de Sistemas Windows & Linux, assim como manutenção de desktops, notebooks e servidores, além de dispositivos periféricos como impressoras e etc...
      </p>
    </div>
  )
}

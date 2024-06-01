import Image from "next/image";
import Link from "next/link";
import img01 from "../../../public/img01.svg";
import img02 from "../../../public/img02.svg";
import img03 from "../../../public/img03.svg";
import img04 from "../../../public/img04.svg";

export default function Projects() {
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
      id="projects"
    >
      <h1 className={`text-6xl lg:text-9xl font-bad-script`}>Projetos</h1>
      <p className={`font-bad-script text-xs text-center lg:text-4xl pt-12 pb-4`}>Confira abaixo alguns do projetos realizados</p>
      <div className={`w-full grid grid-cols-2 lg:grid-cols-4 overflow-hidden p-4`}>
        <span className={`mx-auto p-1`}>
          <Link
            href="https://danieleandrade.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={img01} width={180} height={180} className={`rounded-full hover:transition-transform hover:scale-110 hover:cursor-pointer overflow-hidden`} alt="" />
          </Link>
        </span>

        <span className={`mx-auto p-1`}>
          <Link
            href="https://pedrapretasurfmaster.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={img02} width={180} height={180} className={`rounded-full hover:transition-transform hover:scale-110 hover:cursor-pointer overflow-hidden`} alt="" />
          </Link>
        </span>

        <span className={`mx-auto p-1`}>
          <Link
            href="https://oreidapraiaitapuama.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={img03} width={180} height={180} className={`rounded-full hover:transition-transform hover:scale-110 hover:cursor-pointer overflow-hidden`} alt="" />
          </Link>
        </span>

        <span className={`mx-auto p-1`}>
          <Link
            href="https://levezaparaviver.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={img04} width={210} height={210} className={`rounded-full hover:transition-transform hover:scale-150 hover:cursor-pointer overflow-hidden`} alt="" />
          </Link>
        </span>
      </div>
    </div>
  )
}

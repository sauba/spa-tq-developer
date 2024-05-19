import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo
} from "@phosphor-icons/react"
import Link from "next/link"
import Logo from "../Logo"

export default function Footer() {
  return (
    <footer
      className={`w-full justify-center items-center text-center min-h-screen bg-dive`}
      id="contato"
    >
      <div
        className={`flex w-full justify-center items-center text-center text-red-50 min-h-screen`}
      >
        <Logo />
        <div className={`flex flex-col mt-4 font-pt-mono hover:cursor-none`}>
          <span
            className={`text-3xl lg:text-4xl text-center font-allura`}
          >
            Thiago José de Queiroz
          </span>

          <span className={`pb-1 tracking-wider flex-wrap`}>
            Web Developer
          </span>

          <span
            className={`text-md tracking-widest flex-wrap`}
          >
            Entre em Contato:
          </span>

          <div className={`flex justify-center items-center gap-6`}>
            <div className={`hover:animate-wiggle`}>
              <span className={`text-red-500`}>
                <Link
                  href="https://www.instagram.com/thiagosauba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={48} />
                </Link>
              </span>
            </div>

            <div className={`animate-wiggle`}>
              <span className={`text-green-600`}>
                <Link
                  href="https://wa.me/5581999895856"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={48} />
                </Link>
              </span>
            </div>

            <div className={`hover:animate-wiggle`}>
              <span className={`text-blue-500`}>
                <Link
                  href="https://www.linkedin.com/in/thiago-queiroz-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo size={48} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

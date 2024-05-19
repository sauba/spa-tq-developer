import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"https://queirozdeveloper.com.br"}>
        <Image
          src={logo}
          width={180}
          height={120}
          alt="Thiago José de Queiroz"
          priority
          className="mx-auto py-4 animate-wiggle"
        />
      </Link>
    </span>
  )
}

'use-client'
import About from "@/components/About"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import Servicos from "@/components/Servicos"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thiago J. Queiroz Developer",
  description: "This is SPA to Resume about myself",
}

export default function Home() {
  return (
    <main
      className={`
      flex
      flex-col
      w-full
      min-h-screen
      items-center
      justify-center
      bg-gradient-to-b
      from-indigo-800
      to-zinc-950
      `}
    >
      <Header />
      <About />
      <Servicos />
      <Projects />
      <Footer />
    </main>
  )
}

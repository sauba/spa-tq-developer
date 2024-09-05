'use client'

import FinancialControl from "@/components/ControleFinanceiro"
import Footer from "@/components/Footer"
import { HouseLine } from "@phosphor-icons/react"
import Link from "next/link"

export default function ControleFinancasPage() {
  return (
    <div className={`w-full justify-center items-center bg-gradient-to-b from-indigo-800 to-zinc-950`}>
      <div className={`w-full justify-center items-center`}>
        <Link href={`/`}>
          <span className={`w-full flex justify-center items-center gap-3`}><HouseLine weight="duotone" size={32} className={`z-20 font-pt-mono tracking-widest border-none outline-none`} /> Início</span>
        </Link>
      </div>
      <FinancialControl />
      <div className={`w-full min-h-screen justify-center items-center xl:pt-64`}>
        <Footer />
      </div>
    </div>

  )
}
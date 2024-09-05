'use client'

import FinancialControl from "@/components/ControleFinanceiro"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ControleFinancasPage() {
  return (
    <div>
      <div className={`w-full min-h-screen justify-center items-center xl:pt-64`}>
        <Header />
      </div>
      <FinancialControl />
      <div className={`w-full min-h-screen justify-center items-center bg-teal-700 xl:pt-64`}>
        <Footer />
      </div>
    </div>

  )
}
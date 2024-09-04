"use client"
import { CurrencyDollarSimple } from "@phosphor-icons/react"
import "./styles"
import { Container, HeaderControleFinanceiro as ControleFinanceiroHeader, Title } from "./styles"

export default function HeaderControleFinanceiro() {
  return (
    <Container>
      <ControleFinanceiroHeader>
        <CurrencyDollarSimple size={32} className={`xl:mt-6`} weight="duotone" />
        <Title className={`text-4xl xl:text-6xl`}>Controle Pessoal de Finanças</Title>
      </ControleFinanceiroHeader>
    </Container>
  )
}
'use client'
import { FaDollarSign, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa"
import ResumeItem from "../ResumeItem"
import { Container } from "./styles"

export default function Resume({ income, expense, total }) {
  return (
    <Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Container>
  )
}
'use client'
import { FaDollarSign, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import ResumeItem from "../ResumeItem";
import { Container } from "./styles";

interface ResumeProps {
  income: string;
  expense: string;
  total: string;
}


export default function Resume({ income, expense, total }: ResumeProps) {
  return (
    <Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Container>
  )
}
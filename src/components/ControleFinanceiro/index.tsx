'use client'

import FormControleFinanceiro from "@/components/FormControleFinanceiro";
import Resume from "@/components/Resume";
import { useEffect, useState } from "react";
import HeaderControleFinanceiro from "../HeaderControleFinanceiro";
import "./styles";

export default function FinancialControl() {
  const [transactionsList, setTransactionsList] = useState([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const data = localStorage.getItem("transactions")
    if (data) {
      setTransactionsList(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount))

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount))

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const total = (Number(income) - Number(expense)).toFixed(2)

    setIncome(`R$ ${Number(income).toFixed(2)}`)
    setExpense(`R$ ${Number(expense).toFixed(2)}`)
    setTotal(`R$ ${Number(total).toFixed(2)}`)
  }, [transactionsList])

  const handleTransaction = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction]
    setTransactionsList(newArrayTransactions)

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }

  return (
    <>
      <HeaderControleFinanceiro />
      <Resume income={income} expense={expense} total={total} />
      <FormControleFinanceiro handleTransaction={handleTransaction} />
    </>
  )
}

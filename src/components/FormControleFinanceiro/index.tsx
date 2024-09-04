import { useState } from "react";
import * as C from "./styles";

export default function FinancialControlForm({ handleTransaction }: { handleTransaction: (transaction: any) => void }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [isExpense, setExpense] = useState(false);
  const [invoiceDueDate, setInvoiceDueDate] = useState(new Date());

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!description || !amount) {
      alert("Informe a Descrição e o valor");
      return;
    } else if (amount < 1) {
      alert("O valor precisa ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      description: description,
      amount: amount,
      expense: isExpense,
      invoiceDueDate: isExpense ? invoiceDueDate : null,
    };

    handleTransaction(transaction);
    setDescription("");
    setAmount(0);
    setInvoiceDueDate(new Date());
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </C.InputContent>

        {isExpense && ( // Conditionally render the date input
          <C.Calendar>
            <C.Label>Vencimento</C.Label>
            <C.Input type="date" value={invoiceDueDate.toISOString().split('T')[0]} onChange={(e) => setInvoiceDueDate(new Date(e.target.value))} />
          </C.Calendar>
        )}

        <C.RadioGroup>
          <C.Input type="radio" id="radioIncome" defaultChecked name="group1" onChange={() => setExpense(false)} />
          <C.Label htmlFor="radioIncome">Entrada</C.Label>
          <C.Input type="radio" id="radioExpenses" name="group1" onChange={() => setExpense(true)} />
          <C.Label htmlFor="radioExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
    </>
  );
}

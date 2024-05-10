import React, {useState} from 'react';
import * as CForm from './style';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <CForm.Container>
                <CForm.InputContent>
                    <CForm.Label>Descrição</CForm.Label>
                    <CForm.Input value={desc} onChange={(e) => setDesc((e.target.value))}/>
                </CForm.InputContent>
                <CForm.InputContent>
                    <CForm.Label>Valor</CForm.Label>
                    <CForm.Input value={amount} type={"number"} onChange={(e) => setAmount(e.target.value)}/>
                </CForm.InputContent>
                <CForm.RadioGroup>
                    <CForm.Input type={"radio"} id={"rIncome"} defaultChecked name={"group1"} onChange={() => setExpense((!isExpense))}/>
                    <CForm.Label htmlFor={"rIncome"}>Entrada</CForm.Label>
                    <CForm.Input type={"radio"} id={"rIncome"} defaultChecked name={"group1"} onChange={() => setExpense((!isExpense))}/>
                    <CForm.Label htmlFor={"rIncome"}>Saída</CForm.Label>
                </CForm.RadioGroup>
                <CForm.Button onClick={handleSave}>ADICIONAR</CForm.Button>
            </CForm.Container>
        </>
    );
}

export default Form;
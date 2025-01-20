import { useState } from "react"
import Button from "./UI/Button"

function FormSplitBill ({ selectedFriend , onSubmit }) {
    const [billValue, setBillValue] = useState("")
    const [yourExpense, setYourExpense] = useState('')
    const [selectOption, setSelectOption] = useState('user')
    const friendExpense = billValue-yourExpense

    const submitHandler = (e) => {
        e.preventDefault()
        if (!billValue || !yourExpense) return
        onSubmit(selectOption === 'user' ? friendExpense : -yourExpense)
    }

    return (
        <form className="form-split-bill" onSubmit={submitHandler} >
            <h2>Split A Bill With {selectedFriend.name}</h2>
            <label>💰 Bill Value</label>
            <input type="number" 
            value={billValue} 
            onChange={(e)=>setBillValue(+e.target.value)} />
            <label>🧍🏻‍♂️ You're Expense</label>
            <input type="number" 
            value={yourExpense} 
            onChange={(e)=>setYourExpense(+e.target.value > billValue ? yourExpense : +e.target.value)} />
            <label>🧑‍🤝‍🧑 {selectedFriend.name}'s Expense</label>
            <input type="number" value={friendExpense} disabled />
            <label>🤑 Who's Paying The Bill</label>
            <select 
            value={selectOption} 
            onChange={(e)=>setSelectOption(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button type='submit'>Split Bill</Button>
        </form>
    )
}

export default FormSplitBill
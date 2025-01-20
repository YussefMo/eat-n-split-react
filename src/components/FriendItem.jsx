import { useState } from "react"
import Button from "./UI/Button"

function FriendItem({ data, onSelect, selectedFriend , onReset , onDelete }) {
    const isSelected = selectedFriend?.id === data.id;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={data.image} alt={data.name} />
            <h3>{data.name}</h3>
            {data.balance < 0 ?
            (
                <p className="red">you owe {data.name} {-(data.balance)}</p>
            ) : data.balance > 0 ?
            (
                <p className="green">{data.name} owes you {data.balance}</p>
            ) :
            (
                <p>you and {data.name} are even</p>
            )}
            {isSelected ? 
            (
                <Button onClick={()=>onReset()}>Cancel</Button>
            ):
            (
                <Button onClick={() => onSelect(data)}>Select</Button>
            )}
            {onDelete && <Button onClick={() => onDelete(data.id)}>Delete</Button>}
        </li>
    )
}

export default FriendItem
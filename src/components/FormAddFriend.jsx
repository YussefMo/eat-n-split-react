import { useState } from "react"
import Button from "./UI/Button"

function FormAddFriend ({ onSubmit , noInput }) {
    const [name , setName] = useState('')
    const [image , setImage] = useState('https://i.pravatar.cc/300')

    const SubmitHandler = (e) => {
        e.preventDefault()
        if (name.trim() === '') {
            noInput('Please enter a name')
        } else if (image.trim() === '') {
            noInput('Please enter an image URL')
        }else {
            const newFriend = {name , image , id : Date.now() , balance: 0}
            onSubmit(newFriend)
            setName('')
            setImage('https://i.pravatar.cc/300')
        }
    }

    return (
        <form className="form-add-friend" onSubmit={SubmitHandler}>
            <label>🧑‍🤝‍🧑Friend Name</label>
            <input type="text" 
            value={name} 
            onChange={(e)=>setName(e.target.value)} />
            <label>🏜️ Image URL</label>
            <input type="text" 
            value={image} 
            onChange={(e)=>setImage(e.target.value)} />
            <Button>Add</Button>
        </form>
    )
}

export default FormAddFriend
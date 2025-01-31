import ListOfFriend from "./ListOfFriend";
import FormAddFriend from "./FormAddFriend";
import Button from "./UI/Button";
import { useState } from "react";
import FormSplitBill from "./FormSplitBill";
import ErrorMessage from "./UI/ErrorMessage";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function Container () {
    const [friends , setFriends] = useState(initialFriends)
    const [isOpen , setIsOpen] = useState(false)
    const [selectedFriend , setSelectedFriend] = useState(null)
    const [error , setError] = useState(false)
    const [errorMessage , setErrorMessage] = useState('')
    
    
    const addFriend = (newFriend) => {
        setFriends([...friends, newFriend])
        setIsOpen(false)
    }

    function addFriendOpen () {
        setIsOpen(!isOpen)
        setSelectedFriend(null)
    }

    const selectFriend = (friend) => {
            setSelectedFriend(friend)
            setIsOpen(isOpen === true ? false : false)
    }

    function resetHandler  () {
        setSelectedFriend(null)
    }

    function deleteFriendHandler (id) {
        setFriends((prevItems)=> prevItems.filter((item)=> item.id !== id))
        setSelectedFriend(null)
    }

    function splitBillHandler (value) {
        setFriends(friends.map((friend)=> 
            friend.id === selectedFriend.id ? 
        {...friend , balance : friend.balance + value} : 
        friend))
        setSelectedFriend(null)
    }

    function triggerError (string){
        setErrorMessage(string)
        setError(true)
    }

    const closeError = () => {
        setError(false)
    }

    return (
        <div className="app">
            <div className="sidebar">
                <ListOfFriend 
                friend={friends} 
                onSelect={selectFriend}
                onReset={resetHandler}
                onDelete={deleteFriendHandler}
                selectedFriend={selectedFriend}
                />
                {isOpen === false ? (
                    <Button onClick={addFriendOpen}>Add Friend</Button>
                    ) : 
                    (
                        <>
                            <FormAddFriend onSubmit={addFriend} 
                            noInput={triggerError} />
                            <Button onClick={addFriendOpen}>Cancel</Button>
                        </>
                    )} 
            </div>
            {selectedFriend && 
            <FormSplitBill 
            selectedFriend={selectedFriend}
            onSubmit={splitBillHandler}
            noInput={triggerError}
            key={selectedFriend.id}
            />}
            {error &&
            <ErrorMessage onClose={closeError} 
            errorMessage={errorMessage} />}
        </div>
    );
}

export default Container;
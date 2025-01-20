import FriendItem from "./FriendItem";

function ListOfFriendContainer({ friend , onSelect , selectedFriend , onReset , onDelete}) {
    return(
        <ul>
            {friend.map((data) => (
                <FriendItem 
                data={data} 
                key={data.id}
                onSelect={onSelect}
                onReset={onReset}
                onDelete={onDelete}
                selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    )
}

export default ListOfFriendContainer
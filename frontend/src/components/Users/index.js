import UserCard from "../Usercard";

 const User = ({users}) => (
    <div>
    {users.map(user => (
      <UserCard
      key = {user._id}
      user = {user}
        />
      ))}
  </div>
)

export default User;
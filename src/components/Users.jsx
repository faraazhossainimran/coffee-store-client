import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)
  console.log(users);
  const handleDelete = (id) => {
    // make sure if user is confirmed to delete
    fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE"
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            console.log('Deleted successfully');
            const remainingUsers = users.filter(user=> user._id !== id)
            setUsers(remainingUsers)
        }

    })
  }
  return (
    <div className="container mx-auto w-[1200px]">
      <h1 className="text-3xl text-center my-8">Users: {loadedUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td></td>
                <td><button onClick={()=> handleDelete(user._id)} className="btn">X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

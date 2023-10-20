import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedUsers.map((loadedUser) => (
              <tr key={loadedUser._id}>
                <th>1</th>
                <td>{loadedUser.email}</td>
                <td>{loadedUser.createdAt}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

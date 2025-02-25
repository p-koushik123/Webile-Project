// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const userprofile = () => {
//   const { username } = useParams();
//   const [user, setUser] = useState(null);

  
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/users/getUser/${username}`);
//         setUser(response.data.users);
//       } catch (error) {
//         console.log(error.response?.data?.message || "Error fetching users");
//       }
//     };

//     fetchUsers();
//   }, []);


//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{user.username}'s Profile</h1>
//       <p>Email: {user.email}</p>
//       <p>Posts: {user.posts ?? 0}</p>
//       <p>Status: {user.isSuspended ? "Suspended" : "Active"}</p>
//     </div>
//   );
// };

// export default userprofile;


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const userprofile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Fetching user profile for:", username); // Debugging log
        const response = await axios.get(`http://localhost:5000/api/users/getUser/${username}`, {
          withCredentials: true,
        });
        setUser(response.data.user); // Ensure this matches backend response format
      } catch (error) {
        console.error("Error fetching user data:", error.response?.data?.message || error.message);
      }
    };

    fetchUser();
  }, [username]); // Add username as a dependency

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{user.username}'s Profile</h1>
      <p>Email: {user.email}</p>
      <p>Posts: {user.posts ?? 0}</p>
      <p>Status: {user.isSuspended ? "Suspended" : "Active"}</p>
    </div>
  );
};

export default userprofile;

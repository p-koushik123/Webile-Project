import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDash = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/getUsers", { withCredentials: true });
        setUsers(response.data.users);
      } catch (error) {
        console.log(error.response?.data?.message || "Error fetching users");
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSuspend = async (username) => {
    if (window.confirm(`Are you sure you want to suspend ${username}?`)) {
      try {
        const response = await axios.post(`/api/users/${username}/suspend`, {}, { withCredentials: true });
        if (response.status === 200) {
          alert(`User ${username} has been suspended.`);
        }
      } catch (error) {
        alert("Failed to suspend user. Please try again.");
      }
    }
  };

  return (
    <div className="flex-1 min-h-screen border-x border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-400">Manage users and their activities</p>
      </div>

      <div className="p-4">
        <input
          type="text"
          placeholder="Search users..."
          className="input input-bordered w-full max-w-xs mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Posts</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id || user.username}>
                  <td className="font-bold">{user.username}</td>
                  <td>{user.posts ?? 0}</td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link to={`/profile/${user.username}`} className="btn btn-sm btn-primary">
                        View Profile
                      </Link>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleSuspend(user.username)}
                      >
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;



























































// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Import axios

// const AdminDash = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers =     async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/users/getUsers",{withCredentials:true});
//         console.log(response.data.users);
//         setUsers(response.data.users);
//       } catch (error) {
//         console.log(error.response?.data?.message || "Error fetching users");
//       }
//     };


//     fetchUsers();
//   }, []); // Added dependency array to prevent infinite loops

//   const filteredUsers = users.filter((user) =>
//     user.username.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSuspend = (username) => {
//     if (window.confirm(`Are you sure you want to suspend ${username}?`)) {
//       console.log(`Suspending user: ${username}`);
//       // Call API or update state here
//     }
//   };

  
//   return (
//     <div className="flex-1 min-h-screen border-x border-gray-700">
//       <div className="p-4 border-b border-gray-700">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <p className="text-gray-400">Manage users and their activities</p>
//       </div>

//       <div className="p-4">
//         <input
//           type="text"
//           placeholder="Search users..."
//           className="input input-bordered w-full max-w-xs mb-6"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="overflow-x-auto">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 {/* <th>Username</th> */}
//                 <th>Posts</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//   {filteredUsers.map((user) => (
//     <tr key={user._id || user.username}> {/* Ensures a unique key */}
//       <td className="font-bold">{user.username}</td>
//       <td>{user.posts ?? 0}</td> {/* Default to 0 if undefined */}
//       <td>
//         <span className="badge badge-success">Active</span>
//       </td>
//       <td>
//         <div className="flex gap-2">
//           <Link to={`/admin/users/${user.username}`} className="btn btn-sm btn-primary">
//             View Profile
//           </Link>
//           <button
//             className="btn btn-sm btn-error"
//             onClick={() => handleSuspend(user.username)}
//           >
//             Suspend
//           </button>
//         </div>
//       </td>
//     </tr>
//   ))}
// </tbody>

//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDash;


//  {/* <td>@{user.username}</td> */}
//  <td>{user.posts}</td> {/* Dummy post count */}



// const fetchUsers =     async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/users/getUsers",{withCredentials:true});
//     console.log(response.data.users);
//     setUsers(response.data.users);
//   } catch (error) {
//     console.log(error.response?.data?.message || "Error fetching users");
//   }
// };


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios"; 

// const AdminDash = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/users/getUsers", {
//           withCredentials: true,
//         });
//         setUsers(response.data.users);
//       } catch (error) {
//         console.log(error.response?.data?.message || "Error fetching users");
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleAction = async (user) => {
//     let action = "";
//     let newStatus = "";

//     if (user.status === "Active") {
//       action = "suspend";
//       newStatus = "Suspended";
//     } else if (user.status === "Suspended") {
//       action = "restore";
//       newStatus = "Active";
//     } else if (user.status === "Pending") {
//       action = "approve";
//       newStatus = "Active";
//     }

//     if (window.confirm(`Are you sure you want to ${action} ${user.username}?`)) {
//       try {
//         await axios.post(`http://localhost:5000/api/users/${action}`, {
//           username: user.username,
//         });
//         setUsers((prevUsers) =>
//           prevUsers.map((u) =>
//             u.username === user.username ? { ...u, status: newStatus } : u
//           )
//         );
//       } catch (error) {
//         console.log(error.response?.data?.message || `Error updating user ${user.username}`);
//       }
//     }
//   };

//   const filteredUsers = users.filter((user) =>
//     user.username.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="flex-1 min-h-screen border-x border-gray-700">
//       <div className="p-4 border-b border-gray-700">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <p className="text-gray-400">Manage users and their activities</p>
//       </div>

//       <div className="p-4">
//         <input
//           type="text"
//           placeholder="Search users..."
//           className="input input-bordered w-full max-w-xs mb-6"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="overflow-x-auto">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Posts</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user) => (
//                 <tr key={user._id || user.username}>
//                   <td className="font-bold">{user.username}</td>
//                   <td>{user.posts ?? 0}</td>
//                   <td>
//                     <span
//                       className={`badge ${
//                         user.status === "Active"
//                           ? "badge-success"
//                           : user.status === "Suspended"
//                           ? "badge-error"
//                           : "badge-warning"
//                       }`}
//                     >
//                       {user.status}
//                     </span>
//                   </td>
//                   <td>
//                     <div className="flex gap-2">
//                       <Link
//                         to={`/admin/users/${user.username}`}
//                         className="btn btn-sm btn-primary"
//                       >
//                         View Profile
//                       </Link>
//                       {user.status === "Active" && (
//                         <button
//                           className="btn btn-sm btn-error"
//                           onClick={() => handleAction(user)}
//                         >
//                           Suspend
//                         </button>
//                       )}
//                       {user.status === "Suspended" && (
//                         <button
//                           className="btn btn-sm btn-success"
//                           onClick={() => handleAction(user)}
//                         >
//                           Restore
//                         </button>
//                       )}
//                       {user.status === "Pending" && (
//                         <button
//                           className="btn btn-sm btn-warning"
//                           onClick={() => handleAction(user)}
//                         >
//                           Approve
//                         </button>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDash;



//new one

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const AdminDash = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/users/getUsers", { withCredentials: true });
//         setUsers(response.data.users);
//       } catch (error) {
//         console.log(error.response?.data?.message || "Error fetching users");
//       }
//     };

//     fetchUsers();
//   }, []);

//   const filteredUsers = users.filter((user) =>
//     user.username.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSuspend = async (username) => {
//     if (window.confirm(`Are you sure you want to suspend ${username}?`)) {
//       try {
//         const response = await axios.post(`/api/users/${username}/suspend`, {}, { withCredentials: true });
//         if (response.status === 200) {
//           alert(`User ${username} has been suspended.`);
//         }
//       } catch (error) {
//         alert("Failed to suspend user. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="flex-1 min-h-screen border-x border-gray-700">
//       <div className="p-4 border-b border-gray-700">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <p className="text-gray-400">Manage users and their activities</p>
//       </div>

//       <div className="p-4">
//         <input
//           type="text"
//           placeholder="Search users..."
//           className="input input-bordered w-full max-w-xs mb-6"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="overflow-x-auto">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Posts</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user) => (
//                 <tr key={user._id || user.username}>
//                   <td className="font-bold">{user.username}</td>
//                   <td>{user.posts ?? 0}</td>
//                   <td>
//                     <span className="badge badge-success">Active</span>
//                   </td>
//                   <td>
//                     <div className="flex gap-2">
//                       <Link to={`/admin/users/${user.username}`} className="btn btn-sm btn-primary">
//                         View Profile
//                       </Link>
//                       <button
//                         className="btn btn-sm btn-error"
//                         onClick={() => handleSuspend(user.username)}
//                       >
//                         Suspend
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDash;

import { useState } from "react";
import { Link } from "react-router-dom";
// import PKLogo from "../../../components/svgs";
import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import PkLogo from "../../components/svgs/PKLogo";
import axios from "axios";


const adminlogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form data is : ",formData);
    try {
      const response = await axios.post("http://localhost:5000/api/admin/adminLogin",formData,{withCredentials:true});
      console.log("response is : ",response.data);
      window.location.href = '/admin';
    } catch (error) {
      console.log("error is : ",error.response.data);
    }
    // if (formData.username === 'admin' && formData.password === 'admin123') {
    //   window.location.href = '/admin';
    // } else {
    //   alert('Invalid admin credentials');
    // }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
//max-w-screen-xl mx-auto flex h-screen
  return (
    <div className='max-w-screen-xl mx-auto flex h-screen'>
      <div className='flex-1  lg:flex items-center justify-center bg-gray-900'>
        <PkLogo className='lg:w-2/3 fill-white' />
      </div>
      <div className='flex-1 flex flex-col justify-center items-center bg-black'>
        <form className='w-full max-w-md px-8 flex gap-4 flex-col' onSubmit={handleSubmit}>
          <PkLogo className='w-24 lg:hidden fill-white' />
          <div className="mb-4">
            <h1 className='text-4xl font-extrabold text-white mb-2'>Admin Login</h1>
            <p className="text-gray-400">Login to access admin dashboard</p>
          </div>
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdOutlineMail />
            <input
              type='text'
              className='grow'
              placeholder='Admin Username'
              name='username'
              onChange={handleInputChange}
              value={formData.username}
            />
          </label>

          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdPassword />
            <input
              type='password'
              className='grow'
              placeholder='Password'
              name='password'
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>
          <button className='btn rounded-full btn-primary text-white'>Login as Admin</button>
        </form>
        <div className='flex flex-col gap-2 mt-4'>
          <p className='text-white text-lg'>Are you a regular user?</p>
          <Link to='/login'>
            <button className='btn rounded-full btn-primary text-white btn-outline w-full'>
              Go to User Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default adminlogin;


// neww-recent-24

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { 
//   MdOutlineMail, 
//   MdPassword, 
//   MdVisibility, 
//   MdVisibilityOff 
// } from 'react-icons/md';
// import toast from 'react-hot-toast';
// import PkLogo from '../../components/svgs/PKLogo';

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const queryClient = useQueryClient();

//   const { mutate: loginMutation, isPending, isError, error } = useMutation({
//     mutationFn: async ({ username, password }) => {
//       if (username === 'admin' && password === 'admin123') {
//         window.location.href = '/admin';
//         return;
//       }
//       const res = await fetch('/api/auth/admin-login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Invalid admin credentials');
//       return data;
//     },
//     onSuccess: () => {
//       toast.success('Admin login successful!');
//       queryClient.invalidateQueries({ queryKey: ['authAdmin'] });
//       window.location.href = '/admin-dashboard';
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     loginMutation(formData);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto flex h-screen">
//       <div className="flex-1 lg:flex items-center justify-center bg-gray-900">
//         <PkLogo className="lg:w-2/3 fill-white" />
//       </div>
//       <div className="flex-1 flex flex-col justify-center items-center bg-black">
//         <form className="w-full max-w-md px-8 flex gap-4 flex-col" onSubmit={handleSubmit}>
//           <PkLogo className="w-24 lg:hidden fill-white" />
//           <div className="mb-4">
//             <h1 className="text-4xl font-extrabold text-white mb-2">Admin Login</h1>
//             <p className="text-gray-400">Login to access admin dashboard</p>
//           </div>
//           <label className="input input-bordered rounded flex items-center gap-2">
//             <MdOutlineMail />
//             <input
//               type="text"
//               className="grow"
//               placeholder="Admin Username"
//               name="username"
//               onChange={handleInputChange}
//               value={formData.username}
//               required
//             />
//           </label>

//           <label className="input input-bordered rounded flex items-center gap-2">
//             <MdPassword />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               className="grow"
//               placeholder="Password"
//               name="password"
//               onChange={handleInputChange}
//               value={formData.password}
//               required
//             />
//             <button 
//               type="button" 
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-500 focus:outline-none"
//             >
//               {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//             </button>
//           </label>
//           <button className="btn rounded-full btn-primary text-white" disabled={isPending}>
//             {isPending ? 'Logging in...' : 'Login as Admin'}
//           </button>
//           {isError && <p className="text-red-600 text-center">{error.message}</p>}
//         </form>
//         <div className="flex flex-col gap-2 mt-4">
//           <p className="text-white text-lg">Are you a regular user?</p>
//           <Link to='/login'>
//             <button className="btn rounded-full btn-primary text-white btn-outline w-full">
//               Go to User Login
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;
































































































































// new

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { MdOutlineMail } from "react-icons/md";
// import { MdPassword } from "react-icons/md";
// import PkLogo from "../../components/svgs/PKLogo";

// const adminlogin = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.username === 'admin' && formData.password === 'admin123') {
//       window.location.href = '/admin';
//     } else {
//       alert('Invalid admin credentials');
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className='w-screen h-screen flex'>
//       <div className='flex-1 hidden lg:flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black'>
//         <PkLogo className='w-16 fill-white' />
//       </div>
//       <div className='flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-gray-700 via-gray-900 to-black'>
//         <form className='w-full max-w-md px-8 flex gap-4 flex-col' onSubmit={handleSubmit}>
//           <PkLogo className='w-16 lg:hidden fill-white' />
//           <div className="mb-4">
//             <h1 className='text-4xl font-extrabold text-white mb-2'>Admin Login</h1>
//             <p className="text-gray-400">Login to access admin dashboard</p>
//           </div>
//           <label className='input input-bordered rounded flex items-center gap-2'>
//             <MdOutlineMail />
//             <input
//               type='text'
//               className='grow'
//               placeholder='Admin Username'
//               name='username'
//               onChange={handleInputChange}
//               value={formData.username}
//             />
//           </label>
//           <label className='input input-bordered rounded flex items-center gap-2'>
//             <MdPassword />
//             <input
//               type='password'
//               className='grow'
//               placeholder='Password'
//               name='password'
//               onChange={handleInputChange}
//               value={formData.password}
//             />
//           </label>
//           <button className='btn rounded-full btn-primary text-white'>Login as Admin</button>
//         </form>
//         <div className='flex flex-col gap-2 mt-4'>
//           <p className='text-white text-lg'>Are you a regular user?</p>
//           <Link to='/login'>
//             <button className='btn rounded-full btn-primary text-white btn-outline w-full'>
//               Go to User Login
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default adminlogin;





// new - recent

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { 
//   MdOutlineMail, 
//   MdPassword, 
//   MdVisibility, 
//   MdVisibilityOff 
// } from 'react-icons/md';
// import toast from 'react-hot-toast';
// import PkLogo from '../../components/svgs/PKLogo';

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const queryClient = useQueryClient();

//   const { mutate: loginMutation, isPending, isError, error } = useMutation({
//     mutationFn: async ({ username, password }) => {
//       const res = await fetch('/api/auth/admin-login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Invalid admin credentials');
//       return data;
//     },
//     onSuccess: () => {
//       toast.success('Admin login successful!');
//       queryClient.invalidateQueries({ queryKey: ['authAdmin'] });
//       window.location.href = '/admin-dashboard';
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     loginMutation(formData);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4">
//       <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg">
//         <div className="flex justify-center mb-8">
//           <PkLogo className="w-16" />
//         </div>
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Admin Login</h1>
//         <p className="text-gray-500 mb-8">Sign in to manage the admin panel</p>
//         <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//           <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md">
//             <MdOutlineMail className="text-xl text-gray-500" />
//             <input
//               type="text"
//               className="grow bg-transparent border-none outline-none placeholder-gray-400"
//               placeholder="Admin Username"
//               name="username"
//               onChange={handleInputChange}
//               value={formData.username}
//               required
//             />
//           </label>
//           <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md">
//             <MdPassword className="text-xl text-gray-500" />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               className="grow bg-transparent border-none outline-none placeholder-gray-400"
//               placeholder="Password"
//               name="password"
//               onChange={handleInputChange}
//               value={formData.password}
//               required
//             />
//             <button 
//               type="button" 
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-500 focus:outline-none"
//             >
//               {showPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
//             </button>
//           </label>
//           <button 
//             className="btn rounded-full text-white py-3 bg-gradient-to-r from-gray-800 to-gray-600"
//             disabled={isPending}
//           >
//             {isPending ? 'Logging in...' : 'Sign in as Admin'}
//           </button>
//           {isError && <p className="text-red-600 text-center">{error.message}</p>}
//         </form>
//         <p className="text-gray-600 mt-8 text-center">
//           Not an admin? <Link to="/login" className="text-gray-700 hover:underline">Go to User Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

// import { useState } from "react";
// import { Link } from "react-router-dom";

// import XSvg from "../../../components/svgs/X";

// import { MdOutlineMail } from "react-icons/md";
// import { MdPassword } from "react-icons/md";

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import PkLogo from "../../../components/svgs/PKLogo";

// const LoginPage = () => {
// 	const [formData, setFormData] = useState({
// 		username: "",
// 		password: "",
// 	});
// 	const queryClient = useQueryClient();

// 	const {
// 		mutate: loginMutation,
// 		isPending,
// 		isError,
// 		error,
// 	} = useMutation({
// 		mutationFn: async ({ username, password }) => {
// 			try {
// 				const res = await fetch("/api/auth/login", {
// 					method: "POST",
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 					body: JSON.stringify({ username, password }),
// 				});

// 				const data = await res.json();

// 				if (!res.ok) {
// 					throw new Error(data.error || "Something went wrong");
// 				}
// 			} catch (error) {
// 				throw new Error(error);
// 			}
// 		},
// 		onSuccess: () => {
// 			// refetch the authUser
// 			queryClient.invalidateQueries({ queryKey: ["authUser"] });
// 		},
// 	});

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		loginMutation(formData);
// 	};

// 	const handleInputChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	return (
// 		<div className='max-w-screen-xl mx-auto flex h-screen'>
// 			<div className='flex-1 hidden lg:flex items-center  justify-center'>
// 				<PkLogo className='w-1/2' />	
// 			</div>
// 			<div className='flex-1 flex flex-col justify-center items-center'>
// 				<form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
// 					<PkLogo className='w-1/6' />
// 					<h1 className='text-4xl font-extrabold text-white'>{"Let's"} go.</h1>
// 					<label className='input input-bordered rounded flex items-center gap-2'>
// 						<MdOutlineMail />
// 						<input
// 							type='text'
// 							className='grow'
// 							placeholder='username'
// 							name='username'
// 							onChange={handleInputChange}
// 							value={formData.username}
// 						/>
// 					</label>

// 					<label className='input input-bordered rounded flex items-center gap-2'>
// 						<MdPassword />
// 						<input
// 							type='password'
// 							className='grow'
// 							placeholder='Password'
// 							name='password'
// 							onChange={handleInputChange}
// 							value={formData.password}
// 						/>
// 					</label>
// 					<button className='btn rounded-full btn-primary text-white'>
// 						{isPending ? "Loading..." : "Login"}
// 					</button>
// 					{isError && <p className='text-red-500'>{error.message}</p>}
// 				</form>
// 				<div className='flex flex-col gap-2 mt-4'>
// 					<p className='text-white text-lg'>{"Don't"} have an account?</p>
// 					<Link to='/signup'>
// 						<button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign up</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default LoginPage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { 
//   MdOutlineMail, 
//   MdPassword,
//   MdVisibility,
//   MdVisibilityOff
// } from 'react-icons/md';
// import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
// import toast from 'react-hot-toast';
// import PkLogo from '../../../components/svgs/PKLogo';

// // Placeholder for the actual logo component
// <PkLogo className="w-24" />

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const queryClient = useQueryClient();

//   const {
//     mutate: loginMutation,
//     isPending,
//     isError,
//     error,
//   } = useMutation({
//     mutationFn: async ({ username, password }) => {
//       try {
//         const res = await fetch('/api/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, password }),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data.error || 'Something went wrong');
//         }
//         return data;
//       } catch (error) {
//         throw error;
//       }
//     },
//     onSuccess: () => {
//       toast.success('Successfully logged in!');
//       queryClient.invalidateQueries({ queryKey: ['authUser'] });
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
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
//       <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row w-full items-center">
//         {/* Logo Section - Left Side */}
//         <div className="flex-1 hidden lg:flex items-center justify-center p-12">
//           <div className="bg-white/10 backdrop-blur-lg p-16 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
//             <PkLogo className="w-full max-w-md" />
//             <div className="mt-12 text-white text-center">
//               <h2 className="text-3xl font-extrabold mb-4">Welcome Back!</h2>
//               <p className="text-lg opacity-90">Sign in to continue your journey with us</p>
//             </div>
//           </div>
//         </div>

//         {/* Login Form - Right Side */}
//         <div className="flex-1 w-full max-w-lg p-8">
//           <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
//             {/* Mobile Logo - Only visible on small screens */}
//             <div className="flex justify-center lg:hidden mb-8">
//               <PkLogo className="w-24" />
//             </div>

//             <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Let's go.</h1>
//             <p className="text-gray-500 mb-8">Access your account and continue where you left off</p>

//             {/* Login Form */}
//             <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//               {/* Username/Email Field */}
//               <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
//                 <MdOutlineMail className="text-xl text-gray-500" />
//                 <input
//                   type="text"
//                   className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
//                   placeholder="Username or Email"
//                   name="username"
//                   onChange={handleInputChange}
//                   value={formData.username}
//                   required
//                   autoFocus
//                 />
//               </label>

//               {/* Password Field */}
//               <div className="space-y-2">
//                 <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
//                   <MdPassword className="text-xl text-gray-500" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
//                     placeholder="Password"
//                     name="password"
//                     onChange={handleInputChange}
//                     value={formData.password}
//                     required
//                   />
//                   <button 
//                     type="button" 
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="text-gray-500 focus:outline-none"
//                   >
//                     {showPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
//                   </button>
//                 </label>
//                 <div className="flex justify-end">
//                   <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">
//                     Forgot password?
//                   </Link>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button 
//                 className="btn rounded-full text-white py-3 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-[1.02] font-semibold shadow-lg"
//                 disabled={isPending}
//               >
//                 {isPending ? (
//                   <div className="flex items-center justify-center">
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                     Logging in...
//                   </div>
//                 ) : 'Sign in'}
//               </button>

//               {/* Error Message */}
//               {isError && (
//                 <div className="p-3 bg-red-50 rounded-lg border border-red-100">
//                   <p className="text-red-600 text-center text-sm">{error.message}</p>
//                 </div>
//               )}
//             </form>

//             {/* Social Login Options */}
//             <div className="flex justify-center space-x-4 mt-4">
//   {/* Google Button */}
//   <a
//     href="https://accounts.google.com/signin"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200"
//   >
//     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#4285F4">
//       <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//       <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
//       <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
//       <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
//     </svg>
//   </a>
  
//   {/* Facebook Button */}
//   <a
//     href="https://www.facebook.com/login"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200"
//   >
//     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
//       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//     </svg>
//   </a>
  
//   {/* Twitter Button */}
//   <a
//     href="https://twitter.com/login"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200"
//   >
//     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
//       <path d="M22.1 18.3c-.5 1.5-1.2 2.9-2.1 4.1-.9 1.2-1.6 2-2.2 2.5-.9.8-1.8 1.2-2.8 1.3-1 0-1.7-.2-2.3-.6-.6-.4-1.2-.6-1.7-.6-.6 0-1.2.2-1.8.6-.6.4-1.1.6-1.6.6-1.1.1-2.1-.4-3-1.5-.6-.6-1.4-1.6-2.2-2.9-.9-1.4-1.6-3.1-2.1-4.9-.6-2-1.1-4-1.1-6 0-2.2.5-4.1 1.4-5.7.7-1.3 1.8-2.3 3-3 1.3-.8 2.6-1.2 4-1.2 1.1 0 2 .2 2.6.6.6.4 1.2.7 1.6.7.5 0 1.3-.3 2.3-.8 1-.5 1.8-.7 2.6-.7 1.2 0 2.3.3 3.2 1 .9.6 1.6 1.5 2 2.7-1.1.7-1.8 1.4-2.1 2.3-.4.9-.6 1.9-.6 3 0 1.3.3 2.4.9 3.4.6 1 1.4 1.6 2.4 2-.3.8-.7 1.6-1.1 2.4zM16.8 1c0 1-.3 2-.9 3-.7 1-1.6 1.7-2.6 1.8 0-1.5.4-2.7 1.1-3.5.7-1 1.7-1.5 3-1.6.1.1.1.2.1.3 0 0 .1 0 .1 0z" />
//     </svg>
//   </a>
// </div>

            

//             {/* Sign Up Link */}
//             <div className="flex flex-col items-center mt-8">
//               <p className="text-gray-600">Don't have an account?</p>
//               <Link to="/signup" className="mt-2 w-full">
//                 <button className="btn btn-outline rounded-full w-full py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition duration-300 font-semibold">
//                   Create an account
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


/////////////////////


// new -1

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { 
//   MdOutlineMail, 
//   MdPassword,
//   MdVisibility,
//   MdVisibilityOff
// } from 'react-icons/md';
// import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
// import toast from 'react-hot-toast';
// import PkLogo from '../../../components/svgs/PKLogo';

// // Placeholder for the actual logo component
// <PkLogo className="w-10" />

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const queryClient = useQueryClient();

//   const {
//     mutate: loginMutation,
//     isPending,
//     isError,
//     error,
//   } = useMutation({
//     mutationFn: async ({ username, password }) => {
//       try {
//         const res = await fetch('/api/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, password }),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data.error || 'Something went wrong');
//         }
//         return data;
//       } catch (error) {
//         throw error;
//       }
//     },
//     onSuccess: () => {
//       toast.success('Successfully logged in!');
//       queryClient.invalidateQueries({ queryKey: ['authUser'] });
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
//     <div className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center px-4">
//       <div className="flex flex-col lg:flex-row w-[1200px] max-w-full items-center">
//         {/* Logo Section - Left Side */}
        
//         <div className="flex-1 hidden lg:flex items-center justify-center p-8 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700">
//   <div className="bg-white/20 backdrop-blur-lg p-12 rounded-2xl shadow-lg transform hover:scale-[1.05] transition-all duration-500 ease-in-out">
//     {/* Logo Section */}
//     <div className="flex justify-center mb-8">
//       <PkLogo className="w-16 max-w-md" />
//     </div>

//     {/* Text Section */}
//     <div className="mt-8 text-white text-center space-y-4">
//       <h2 className="text-4xl font-extrabold mb-2">Welcome Back!</h2>
//       <p className="text-lg opacity-80">Sign in to continue your journey with us</p>
      
     
//     </div>
//   </div>
// </div>


//         {/* Login Form - Right Side */}
//         <div className="flex-1 w-full max-w-lg p-8">
//           <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
//             {/* Mobile Logo - Only visible on small screens */}
//             <div className="flex justify-center lg:hidden mb-8">
//               <PkLogo className="w-24" />
//             </div>

//             <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Let's go.</h1>
//             <p className="text-gray-500 mb-8">Access your account and continue where you left off</p>

//             {/* Login Form */}
//             <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//               {/* Username/Email Field */}
//               <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
//                 <MdOutlineMail className="text-xl text-gray-500" />
//                 <input
//                   type="text"
//                   className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
//                   placeholder="Username or Email"
//                   name="username"
//                   onChange={handleInputChange}
//                   value={formData.username}
//                   required
//                   autoFocus
//                 />
//               </label>

//               {/* Password Field */}
//               <div className="space-y-2">
//                 <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
//                   <MdPassword className="text-xl text-gray-500" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
//                     placeholder="Password"
//                     name="password"
//                     onChange={handleInputChange}
//                     value={formData.password}
//                     required
//                   />
//                   <button 
//                     type="button" 
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="text-gray-500 focus:outline-none"
//                   >
//                     {showPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
//                   </button>
//                 </label>
//                 <div className="flex justify-end">
//                   <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">
//                     Forgot password?
//                   </Link>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button 
//                 className="btn rounded-full text-white py-3 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-[1.02] font-semibold shadow-lg"
//                 disabled={isPending}
//               >
//                 {isPending ? (
//                   <div className="flex items-center justify-center">
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                     Logging in...
//                   </div>
//                 ) : 'Sign in'}
//               </button>

//               {/* Error Message */}
//               {isError && (
//                 <div className="p-3 bg-red-50 rounded-lg border border-red-100">
//                   <p className="text-red-600 text-center text-sm">{error.message}</p>
//                 </div>
//               )}
//             </form>

//             {/* Social Login Options */}
//             <div className="flex justify-center space-x-4 mt-4">
//               {/* Social buttons omitted for brevity */}
//             </div>

//             {/* Sign Up Link */}
//             <div className="flex flex-col items-center mt-8">
//               <p className="text-gray-600">Don't have an account?</p>
//               <Link to="/signup" className="mt-2 w-full">
//                 <button className="btn btn-outline rounded-full w-full py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition duration-300 font-semibold">
//                   Create an account
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


//recent 

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
// import PkLogo from '../../../components/svgs/PKLogo';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const queryClient = useQueryClient();

//   const { mutate: loginMutation, isPending, isError, error } = useMutation({
//     mutationFn: async ({ username, password }) => {
//       const res = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Something went wrong');
//       return data;
//     },
//     onSuccess: () => {
//       toast.success('Successfully logged in!');
//       queryClient.invalidateQueries({ queryKey: ['authUser'] });
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
//     <div className="fixed inset-0 w-full h-full flex items-center justify-center 
//     bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat 
//     bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4">
//       <div className="bg-white/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-white/20">
//         <div className="flex justify-center mb-8">
//           <PkLogo className="w-16" />
//         </div>
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Let's go.</h1>
//         <p className="text-gray-500 mb-8">Access your account and continue where you left off</p>
//         <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//           <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md">
//             <MdOutlineMail className="text-xl text-gray-500" />
//             <input
//               type="text"
//               className="grow bg-transparent border-none outline-none placeholder-gray-400"
//               placeholder="Username or Email"
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
//             className="btn rounded-full text-white py-3 bg-gradient-to-r from-purple-600 to-pink-600"
//             disabled={isPending}
//           >
//             {isPending ? 'Logging in...' : 'Sign in'}
//           </button>
//           {isError && <p className="text-red-600 text-center">{error.message}</p>}
//         </form>
//         <p className="text-gray-600 mt-8 text-center">
//           Don't have an account? <Link to="/signup" className="text-purple-600 hover:underline">Create an account</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;











//new -recent -4




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { 
//   MdOutlineMail, 
//   MdPassword, 
//   MdVisibility, 
//   MdVisibilityOff 
// } from 'react-icons/md';
// import toast from 'react-hot-toast';
// import PkLogo from '../../../components/svgs/PKLogo';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const { mutate: loginMutation, isPending, isError, error } = useMutation({
//     mutationFn: async ({ username, password }) => {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Invalid credentials');
//       return data;
//     },
//     onSuccess: (data) => {
//       toast.success('Successfully logged in!');
//       // localStorage.setItem('token', data.token);
//       queryClient.invalidateQueries({ queryKey: ['authUser'] });
//       setTimeout(() => navigate('/'), 1500);
//     },
//     onError: (error) => {
//       toast.error(error.message);
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
//     <div className="fixed inset-0 flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat bg-[url('/bg1.jpg')]">
//       <div className="w-full max-w-lg p-8 bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl">
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <PkLogo className="w-16 h-16 animate-bounce" />
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-gray-800 text-center">Welcome Back</h1>
//         <p className="text-gray-500 text-center mb-6">Sign in to continue</p>

//         {/* Form */}
//         <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
//           {/* Username / Email Input */}
//           <label className="relative flex items-center gap-3 p-4 border border-gray-300 rounded-full shadow-md focus-within:ring-2 focus-within:ring-purple-500">
//             <MdOutlineMail className="text-xl text-gray-500" />
//             <input
//               type="text"
//               className="flex-1 bg-transparent border-none outline-none placeholder-gray-400"
//               placeholder="Username or Email"
//               name="username"
//               onChange={handleInputChange}
//               value={formData.username}
//               required
//             />
//           </label>

//           {/* Password Input */}
//           <label className="relative flex items-center gap-3 p-4 border border-gray-300 rounded-full shadow-md focus-within:ring-2 focus-within:ring-purple-500">
//             <MdPassword className="text-xl text-gray-500" />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               className="flex-1 bg-transparent border-none outline-none placeholder-gray-400"
//               placeholder="Password"
//               name="password"
//               onChange={handleInputChange}
//               value={formData.password}
//               required
//             />
//             <button 
//               type="button" 
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-500 hover:text-purple-600 transition"
//             >
//               {showPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
//             </button>
//           </label>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50"
//             disabled={isPending}
//           >
//             {isPending ? 'Logging in...' : 'Sign in'}
//           </button>

//           {/* Error Message */}
//           {isError && <p className="text-red-600 text-center">{error.message}</p>}
//         </form>

//         {/* Signup Link */}
//         <p className="mt-6 text-center text-gray-600">
//           Don't have an account? <Link to="/signup" className="text-purple-600 hover:underline">Create one</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;








import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdOutlineMail, MdPassword, MdVisibility, MdVisibilityOff } from "react-icons/md";
import toast from "react-hot-toast";
import PkLogo from "./../../../components/svgs/PKLogo";

const LoginPage = () => {
	const [formData, setFormData] = useState({ username: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate: loginMutation, isPending, isError, error } = useMutation({
		mutationFn: async ({ username, password }) => {
			const res = await fetch("http://localhost:5000/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
				credentials: "include",
			});

			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Invalid credentials");
			return data;
		},
		onSuccess: (data) => {
			toast.success("Successfully logged in!");
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
			setTimeout(() => navigate("/"), 1500);
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		loginMutation(formData);
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat bg-[url('/bg1.jpg')]">
			<div className="w-full max-w-lg p-8 bg-white/30   shadow-xl border border-white/20">
				{/* Logo */}
				<div className="flex justify-center mb-6">
					<PkLogo className="w-16 h-16 animate-bounce" />
				</div>

				{/* Title */}
				<h1 className="text-3xl font-bold text-gray-800 text-center">Welcome Back</h1>
				<p className="text-gray-500 text-center mb-6">Sign in to continue</p>

				{/* Form */}
				<form className="flex flex-col gap-5 p-6 bg-white/300 backdrop-blur-lg shadow-lg rounded-xl " onSubmit={handleSubmit}>
					{/* Username / Email Input  flex items-center border rounded-lg p-3*/}

    
					<div className="relative flex items-center  border-gray-300 rounded-xl p-4  shadow-md transition-all 
hover:border-purple-500 focus-within:border-purple-600 focus-within:shadow-lg">
						<MdOutlineMail className="text-xl text-gray-600" />
						<input
							type="text"
							className="flex-1 bg-transparent border-none text-black outline-none px-3"
							placeholder="Username or Email"
							name="username"
							onChange={(e) => setFormData({ ...formData, username: e.target.value })}
							value={formData.username}
							required
						/>
					</div>

					{/* Password Input */}
					<div className="relative flex items-center  border-gray-300 rounded-xl p-4  shadow-md transition-all 
hover:border-purple-500 focus-within:border-purple-600 focus-within:shadow-lg">
						<MdPassword className="text-xl text-gray-500" />
						<input
							type={showPassword ? "text" : "password"}
							className="flex-1 text-black bg-transparent border-none outline-none px-3"
							placeholder="Password"
							name="password"
							onChange={(e) => setFormData({ ...formData, password: e.target.value })}
							value={formData.password}
							required
						/>
						<button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500">
							{showPassword ? <MdVisibilityOff /> : <MdVisibility />}
						</button>
					</div>

					{/* Login Button */}
					<button
						type="submit"
						className="w-full py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
						disabled={isPending}
					>
						{isPending ? "Logging in..." : "Sign in"}
					</button>

					{/* Error Message */}
					{isError && <p className="text-red-600 text-center">{error.message}</p>}
				</form>

				{/* Signup Link */}
				<p className="mt-6 text-center text-gray-600">
					Don't have an account? <Link to="/signup" className="text-purple-600 hover:text-green-700">Create one</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;







//relative flex items-center border-2 border-gray-300 rounded-xl p-4 bg-white shadow-md transition-all 
//hover:border-purple-500 focus-within:border-purple-600 focus-within:shadow-lg



// new -2

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
// import PkLogo from '../../../components/svgs/PKLogo';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const queryClient = useQueryClient();

//   const {
//     mutate: loginMutation,
//     isPending,
//     isError,
//     error,
//   } = useMutation({
//     mutationFn: async ({ username, password }) => {
//       // Check if user is admin
//       if (username === 'admin' && password === 'admin123') {
//         window.location.href = '/admin';
//         return;
//       }

//       try {
//         const res = await fetch('/api/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, password }),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data.error || 'Something went wrong');
//         }
//         return data;
//       } catch (error) {
//         throw error;
//       }
//     },
//     onSuccess: () => {
//       toast.success('Successfully logged in!');
//       queryClient.invalidateQueries({ queryKey: ['authUser'] });
//       window.location.href = '/';
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
//       <div className="flex flex-col lg:flex-row w-[1200px] max-w-full items-center">
//         {/* Logo Section */}
//         <div className="flex-1 hidden lg:flex items-center justify-center p-8 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700">
//           <div className="bg-white/20 backdrop-blur-lg p-12 rounded-2xl shadow-lg">
//             <div className="flex justify-center mb-8">
//               <PkLogo className="w-16" />
//             </div>
//             <h2 className="text-4xl font-extrabold text-white mb-2">Welcome Back!</h2>
//             <p className="text-lg text-white opacity-80">Sign in to continue your journey with us</p>
//           </div>
//         </div>

//         {/* Login Form */}
//         <div className="flex-1 w-full max-w-lg p-8">
//           <div className="bg-white p-8 rounded-3xl shadow-2xl">
//             <div className="flex justify-center lg:hidden mb-8">
//               <PkLogo className="w-24" />
//             </div>
//             <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Let's go.</h1>
//             <p className="text-gray-500 mb-8">Access your account and continue where you left off</p>
//             <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//               <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50">
//                 <MdOutlineMail className="text-xl text-gray-500" />
//                 <input type="text" className="grow bg-transparent border-none outline-none" placeholder="Username or Email" name="username" onChange={handleInputChange} value={formData.username} required />
//               </label>
//               <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50">
//                 <MdPassword className="text-xl text-gray-500" />
//                 <input type={showPassword ? "text" : "password"} className="grow bg-transparent border-none outline-none" placeholder="Password" name="password" onChange={handleInputChange} value={formData.password} required />
//                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500">
//                   {showPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
//                 </button>
//               </label>
//               <div className="flex justify-end">
//                 <Link to="/forgot-password" className="text-sm text-purple-600 hover:underline">Forgot password?</Link>
//               </div>
//               <button className="btn rounded-full text-white py-3 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" disabled={isPending}>
//                 {isPending ? 'Logging in...' : 'Sign in'}
//               </button>
//               {isError && <p className="text-red-600 text-center text-sm">{error.message}</p>}
//             </form>
//             <div className="flex flex-col items-center mt-8">
//               <p className="text-gray-600">Don't have an account?</p>
//               <Link to="/signup" className="mt-2 w-full">
//                 <button className="btn btn-outline rounded-full w-full py-3 border-2 border-purple-500 text-purple-600">Create an account</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


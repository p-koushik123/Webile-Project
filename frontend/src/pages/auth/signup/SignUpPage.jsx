// import { Link } from "react-router-dom";
// import { useState } from "react";

// import XSvg from "../../../components/svgs/X";

// import { MdOutlineMail } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { MdPassword } from "react-icons/md";
// import { MdDriveFileRenameOutline } from "react-icons/md";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import PkLogo from "../../../components/svgs/PKLogo";

// const SignUpPage = () => {
// 	const [formData, setFormData] = useState({
// 		email: "",
// 		username: "",
// 		fullName: "",
// 		password: "",
// 	});

// 	const queryClient = useQueryClient();

// 	const { mutate, isError, isPending, error } = useMutation({
// 		mutationFn: async ({ email, username, fullName, password }) => {
// 			try {
// 				const res = await fetch("/api/auth/signup", {
// 					method: "POST",
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 					body: JSON.stringify({ email, username, fullName, password }),
// 				});

// 				const data = await res.json();
// 				if (!res.ok) throw new Error(data.error || "Failed to create account");
// 				console.log(data);
// 				return data;
// 			} catch (error) {
// 				console.error(error);
// 				throw error;
// 			}
// 		},
// 		onSuccess: () => {
// 			toast.success("Account created successfully");

// 			{
// 				/* Added this line below, after recording the video. I forgot to add this while recording, sorry, thx. */
// 			}
// 			queryClient.invalidateQueries({ queryKey: ["authUser"] });
// 		},
// 	});

// 	const handleSubmit = (e) => {
// 		e.preventDefault(); // page won't reload
// 		mutate(formData);
// 	};

// 	const handleInputChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	return (
// 		<div className='max-w-screen-xl mx-auto flex h-screen px-10'>
// 			<div className='flex-1 hidden lg:flex items-center  justify-center'>
// 				<PkLogo className='w-1/2' />
// 			</div>
// 			<div className='flex-1 flex flex-col justify-center items-center'>
// 				<form className='lg:w-2/3  mx-auto md:mx-20 flex gap-4 flex-col' onSubmit={handleSubmit}>
					
// 					<PkLogo className='w-24' />
// 					<h1 className='text-4xl font-extrabold text-white'>Join today.</h1>
// 					<label className='input input-bordered rounded flex items-center gap-2'>
// 						<MdOutlineMail />
// 						<input
// 							type='email'
// 							className='grow'
// 							placeholder='Email'
// 							name='email'
// 							onChange={handleInputChange}
// 							value={formData.email}
// 						/>
// 					</label>
// 					<div className='flex gap-4 flex-wrap'>
// 						<label className='input input-bordered rounded flex items-center gap-2 flex-1'>
// 							<FaUser />
// 							<input
// 								type='text'
// 								className='grow '
// 								placeholder='Username'
// 								name='username'
// 								onChange={handleInputChange}
// 								value={formData.username}
// 							/>
// 						</label>
// 						<label className='input input-bordered rounded flex items-center gap-2 flex-1'>
// 							<MdDriveFileRenameOutline />
// 							<input
// 								type='text'
// 								className='grow'
// 								placeholder='Full Name'
// 								name='fullName'
// 								onChange={handleInputChange}
// 								value={formData.fullName}
// 							/>
// 						</label>
// 					</div>
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
// 						{isPending ? "Loading..." : "Sign up"}
// 					</button>
// 					{isError && <p className='text-red-500'>{error.message}</p>}
// 				</form>
// 				<div className='flex flex-col lg:w-2/3 gap-2 mt-4'>
// 					<p className='text-white text-lg'>Already have an account?</p>
// 					<Link to='/login'>
// 						<button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign in</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUpPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import toast from 'react-hot-toast';
// import { 
//   MdOutlineMail, 
//   MdPassword, 
//   MdDriveFileRenameOutline,
//   MdVisibility,
//   MdVisibilityOff
// } from 'react-icons/md';
// import { FaUser } from 'react-icons/fa';
// import PkLogo from '../../../components/svgs/PKLogo';

// // Placeholder for the actual logo component
// <PkLogo className="w-20 h-20 mb-4" />

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     fullName: '',
//     password: '',
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [step, setStep] = useState(1); // Form steps: 1 for email, 2 for details
  
//   const queryClient = useQueryClient();

//   const { mutate, isError, isPending, error } = useMutation({
//     mutationFn: async ({ email, username, fullName, password }) => {
//       try {
//         const res = await fetch('/api/auth/signup', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, username, fullName, password }),
//         });

//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || 'Failed to create account');
//         return data;
//       } catch (error) {
//         throw error;
//       }
//     },
//     onSuccess: () => {
//       toast.success('Account created successfully!');
//       queryClient.invalidateQueries({ queryKey: ['authUser'] });
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (step === 1) {
//       // Validate email before proceeding
//       if (!formData.email || !formData.email.includes('@')) {
//         toast.error('Please enter a valid email address');
//         return;
//       }
//       setStep(2);
//     } else {
//       // Validate form before submission
//       if (!formData.username || !formData.fullName || !formData.password) {
//         toast.error('Please fill in all fields');
//         return;
//       }
//       if (formData.password.length < 8) {
//         toast.error('Password must be at least 8 characters long');
//         return;
//       }
//       mutate(formData);
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 max-w-screen-xl mx-auto flex h-screen px-10">
//       <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg transition-all duration-300 transform hover:scale-[1.01]">
//         {/* Logo and Title */}
//         <div className="flex flex-col items-center mb-8">
//           <PkLogo className="w-20 h-20 mb-4" />
//           <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
//             {step === 1 ? 'Get Started' : 'Almost There!'}
//           </h1>
//           <p className="text-gray-500 text-center max-w-md">
//             {step === 1 ? 'Begin your journey by entering your email' : 'Complete your profile to join our community'}
//           </p>
//         </div>

//         {/* Progress Indicator */}
//         <div className="w-full flex justify-center mb-8">
//           <div className="flex items-center w-1/2">
//             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>1</div>
//             <div className={`h-1 flex-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
//             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>2</div>
//           </div>
//         </div>

//         {/* SignUp Form */}
//         <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//           {step === 1 ? (
//             // Step 1: Email
//             <div className="space-y-6">
//               <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
//                 <MdOutlineMail className="text-xl text-gray-500" />
//                 <input
//                   type="email"
//                   className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
//                   placeholder="Your email address"
//                   name="email"
//                   onChange={handleInputChange}
//                   value={formData.email}
//                   required
//                   autoFocus
//                 />
//               </label>
//               <p className="text-xs text-gray-500 text-center px-4">
//                 We'll send you verification and important updates
//               </p>
//             </div>
//           ) : (
//             // Step 2: User details
//             <div className="space-y-6">
//               {/* Username & Full Name */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Username */}
//                 <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
//                   <FaUser className="text-lg text-gray-500" />
//                   <input
//                     type="text"
//                     className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
//                     placeholder="Username"
//                     name="username"
//                     onChange={handleInputChange}
//                     value={formData.username}
//                     required
//                     autoFocus
//                   />
//                 </label>
//                 {/* Full Name */}
//                 <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
//                   <MdDriveFileRenameOutline className="text-lg text-gray-500" />
//                   <input
//                     type="text"
//                     className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
//                     placeholder="Full Name"
//                     name="fullName"
//                     onChange={handleInputChange}
//                     value={formData.fullName}
//                     required
//                   />
//                 </label>
//               </div>

//               {/* Password */}
//               <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
//                 <MdPassword className="text-lg text-gray-500" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
//                   placeholder="Create a password"
//                   name="password"
//                   onChange={handleInputChange}
//                   value={formData.password}
//                   required
//                   minLength={8}
//                 />
//                 <button 
//                   type="button" 
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-gray-500 focus:outline-none"
//                 >
//                   {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//                 </button>
//               </label>
              
//               <div className="text-xs text-gray-500 px-4">
//                 <p>Password must be at least 8 characters long</p>
//                 <p className="mt-1">By signing up, you agree to our <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a></p>
//               </div>
//             </div>
//           )}

//           {/* Submit Button */}
//           <button 
//             className="btn rounded-full text-white py-3 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-[1.02] font-semibold shadow-lg"
//             disabled={isPending}
//           >
//             {isPending ? (
//               <div className="flex items-center justify-center">
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                 Creating account...
//               </div>
//             ) : step === 1 ? 'Continue' : 'Create Account'}
//           </button>
          
//           {/* Error Message */}
//           {isError && (
//             <div className="p-3 bg-red-50 rounded-lg border border-red-100 mt-4">
//               <p className="text-red-600 text-center text-sm">{error.message}</p>
//             </div>
//           )}
//         </form>

//         {/* Sign In Link */}
//         <div className="flex flex-col items-center mt-8">
//           <p className="text-gray-600">Already have an account?</p>
//           <Link to="/login" className="mt-2 w-full">
//             <button className="btn btn-outline rounded-full w-full py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition duration-300 font-semibold">
//               Sign in instead
//             </button>
//           </Link>
//         </div>

//         {/* Step 1 only: Social sign-up options */}
//         {step === 1 && (
//           <div className="mt-8">
//             <div className="flex items-center justify-center">
//               <div className="flex-1 h-px bg-gray-200"></div>
//               <p className="px-3 text-gray-500 text-sm">or continue with</p>
//               <div className="flex-1 h-px bg-gray-200"></div>
//             </div>
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

//           </div>
//         )}

//         {/* Back button for step 2 */}
//         {step === 2 && (
//           <button
//             type="button"
//             onClick={() => setStep(1)}
//             className="mt-6 text-center w-full text-gray-500 hover:text-purple-600 transition duration-200"
//           >
//             ← Back to previous step
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { 
  MdOutlineMail, 
  MdPassword, 
  MdDriveFileRenameOutline,
  MdVisibility,
  MdVisibilityOff
} from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import PkLogo from '../../../components/svgs/PKLogo';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    fullName: '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // Form steps: 1 for email, 2 for details
  
  const queryClient = useQueryClient();

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({ email, username, fullName, password }) => {
      try {
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, username, fullName, password }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to create account');
        return data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: () => {
      toast.success('Account created successfully!');
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      // Validate email before proceeding
      if (!formData.email || !formData.email.includes('@')) {
        toast.error('Please enter a valid email address');
        return;
      }
      setStep(2);
    } else {
      // Validate form before submission
      if (!formData.username || !formData.fullName || !formData.password) {
        toast.error('Please fill in all fields');
        return;
      }
      if (formData.password.length < 8) {
        toast.error('Password must be at least 8 characters long');
        return;
      }
      mutate(formData);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg transition-all duration-300 transform hover:scale-[1.01] overflow-auto max-h-full">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <PkLogo className="w-16 h-16 mb-4" />
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
            {step === 1 ? 'Get Started' : 'Almost There!'}
          </h1>
          <p className="text-gray-500 text-center max-w-md">
            {step === 1 ? 'Begin your journey by entering your email' : 'Complete your profile to join our community'}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="w-full flex justify-center mb-6">
          <div className="flex items-center w-1/2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>1</div>
            <div className={`h-1 flex-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>2</div>
          </div>
        </div>

        {/* SignUp Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {step === 1 ? (
            // Step 1: Email
            <div className="space-y-5">
              <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
                <MdOutlineMail className="text-xl text-gray-500" />
                <input
                  type="email"
                  className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
                  placeholder="Your email address"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  required
                  autoFocus
                />
              </label>
              <p className="text-xs text-gray-500 text-center px-4">
                We'll send you verification and important updates
              </p>
            </div>
          ) : (
            // Step 2: User details
            <div className="space-y-5">
              {/* Username & Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Username */}
                <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
                  <FaUser className="text-lg text-gray-500" />
                  <input
                    type="text"
                    className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
                    placeholder="Username"
                    name="username"
                    onChange={handleInputChange}
                    value={formData.username}
                    required
                    autoFocus
                  />
                </label>
                {/* Full Name */}
                <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
                  <MdDriveFileRenameOutline className="text-lg text-gray-500" />
                  <input
                    type="text"
                    className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
                    placeholder="Full Name"
                    name="fullName"
                    onChange={handleInputChange}
                    value={formData.fullName}
                    required
                  />
                </label>
              </div>

              {/* Password */}
              <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
                <MdPassword className="text-lg text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
                  placeholder="Create a password"
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  required
                  minLength={8}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 focus:outline-none"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </label>
              
              <div className="text-xs text-gray-500 px-4">
                <p>Password must be at least 8 characters long</p>
                <p className="mt-1">By signing up, you agree to our <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a></p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button 
            className="btn rounded-full text-white py-3 mt-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-[1.02] font-semibold shadow-lg"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Creating account...
              </div>
            ) : step === 1 ? 'Continue' : 'Create Account'}
          </button>
          
          {/* Error Message */}
          {isError && (
            <div className="p-3 bg-red-50 rounded-lg border border-red-100 mt-3">
              <p className="text-red-600 text-center text-sm">{error.message}</p>
            </div>
          )}
        </form>

        {/* Sign In Link */}
        <div className="flex flex-col items-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/login" className="mt-2 w-full">
            <button className="btn btn-outline rounded-full w-full py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition duration-300 font-semibold">
              Sign in instead
            </button>
          </Link>
        </div>

        {/* Step 1 only: Social sign-up options */}
        {step === 1 && (
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gray-200"></div>
              <p className="px-3 text-gray-500 text-sm">or continue with</p>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              {/* Google Button */}
              <a
                href="https://accounts.google.com/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </a>
              
              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              
              {/* Twitter Button */}
              <a
                href="https://twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
                  <path d="M22.1 18.3c-.5 1.5-1.2 2.9-2.1 4.1-.9 1.2-1.6 2-2.2 2.5-.9.8-1.8 1.2-2.8 1.3-1 0-1.7-.2-2.3-.6-.6-.4-1.2-.6-1.7-.6-.6 0-1.2.2-1.8.6-.6.4-1.1.6-1.6.6-1.1.1-2.1-.4-3-1.5-.6-.6-1.4-1.6-2.2-2.9-.9-1.4-1.6-3.1-2.1-4.9-.6-2-1.1-4-1.1-6 0-2.2.5-4.1 1.4-5.7.7-1.3 1.8-2.3 3-3 1.3-.8 2.6-1.2 4-1.2 1.1 0 2 .2 2.6.6.6.4 1.2.7 1.6.7.5 0 1.3-.3 2.3-.8 1-.5 1.8-.7 2.6-.7 1.2 0 2.3.3 3.2 1 .9.6 1.6 1.5 2 2.7-1.1.7-1.8 1.4-2.1 2.3-.4.9-.6 1.9-.6 3 0 1.3.3 2.4.9 3.4.6 1 1.4 1.6 2.4 2-.3.8-.7 1.6-1.1 2.4zM16.8 1c0 1-.3 2-.9 3-.7 1-1.6 1.7-2.6 1.8 0-1.5.4-2.7 1.1-3.5.7-1 1.7-1.5 3-1.6.1.1.1.2.1.3 0 0 .1 0 .1 0z" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Back button for step 2 */}
        {step === 2 && (
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-4 text-center w-full text-gray-500 hover:text-purple-600 transition duration-200"
          >
            ← Back to previous step
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
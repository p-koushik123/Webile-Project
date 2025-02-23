// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { useRef, useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// const CreatePost = () => {
// 	const [text, setText] = useState("");
// 	const [img, setImg] = useState(null);
// 	const imgRef = useRef(null);

// 	const { data: authUser } = useQuery({ queryKey: ["authUser"] });
// 	const queryClient = useQueryClient();

// 	const {
// 		mutate: createPost,
// 		isPending,
// 		isError,
// 		error,
// 	} = useMutation({
// 		mutationFn: async ({ text, img }) => {
// 			try {
// 				const res = await fetch("/api/posts/create", {
// 					method: "POST",
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 					body: JSON.stringify({ text, img }),
// 				});
// 				const data = await res.json();
// 				if (!res.ok) {
// 					throw new Error(data.error || "Something went wrong");
// 				}
// 				return data;
// 			} catch (error) {
// 				throw new Error(error);
// 			}
// 		},

// 		onSuccess: () => {
// 			setText("");
// 			setImg(null);
// 			toast.success("Post created successfully");
// 			queryClient.invalidateQueries({ queryKey: ["posts"] });
// 		},
// 	});

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		createPost({ text, img });
// 	};

// 	const handleImgChange = (e) => {
// 		const file = e.target.files[0];
// 		if (file) {
// 			const reader = new FileReader();
// 			reader.onload = () => {
// 				setImg(reader.result);
// 			};
// 			reader.readAsDataURL(file);
// 		}
// 	};

// 	return (
// 		<div className='flex p-4 items-start gap-4 border-b border-gray-700'>
// 			<div className='avatar'>
// 				<div className='w-8 rounded-full'>
// 					<img src={authUser.profileImg || "/avatar-placeholder.png"} />
// 				</div>
// 			</div>
// 			<form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
// 				<textarea
// 					className='textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800'
// 					placeholder='What is happening?!'
// 					value={text}
// 					onChange={(e) => setText(e.target.value)}
// 				/>
// 				{img && (
// 					<div className='relative w-72 mx-auto'>
// 						<IoCloseSharp
// 							className='absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
// 							onClick={() => {
// 								setImg(null);
// 								imgRef.current.value = null;
// 							}}
// 						/>
// 						<img src={img} className='w-full mx-auto h-72 object-contain rounded' />
// 					</div>
// 				)}

// 				<div className='flex justify-between border-t py-2 border-t-gray-700'>
// 					<div className='flex gap-1 items-center'>
// 						<CiImageOn
// 							className='fill-primary w-6 h-6 cursor-pointer'
// 							onClick={() => imgRef.current.click()}
// 						/>
// 						<BsEmojiSmileFill className='fill-primary w-5 h-5 cursor-pointer' />
// 					</div>
// 					<input type='file' accept='image/*' hidden ref={imgRef} onChange={handleImgChange} />
// 					<button className='btn btn-primary rounded-full btn-sm text-white px-4'>
// 						{isPending ? "Posting..." : "Post"}
// 					</button>
// 				</div>
// 				{isError && <div className='text-red-500'>{error.message}</div>}
// 			</form>
// 		</div>
// 	);
// };
// export default CreatePost;





// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { useRef, useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// const CreatePost = () => {
// 	const [text, setText] = useState("");
// 	const [img, setImg] = useState(null);
// 	const imgRef = useRef(null);

// 	const { data: authUser } = useQuery({ queryKey: ["authUser"] });
// 	const queryClient = useQueryClient();

// 	const {
// 		mutate: createPost,
// 		isPending,
// 		isError,
// 		error,
// 	} = useMutation({
// 		mutationFn: async ({ text, img }) => {
// 			try {
// 				const res = await fetch("/api/posts/create", {
// 					method: "POST",
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 					body: JSON.stringify({ text, img }),
// 				});
// 				const data = await res.json();
// 				if (!res.ok) {
// 					throw new Error(data.error || "Something went wrong");
// 				}
// 				return data;
// 			} catch (error) {
// 				throw new Error(error);
// 			}
// 		},

// 		onSuccess: () => {
// 			setText("");
// 			setImg(null);
// 			toast.success("Post created successfully");
// 			queryClient.invalidateQueries({ queryKey: ["posts"] });
// 		},
// 	});

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		createPost({ text, img });
// 	};

// 	const handleImgChange = (e) => {
// 		const file = e.target.files[0];
// 		if (file) {
// 			const reader = new FileReader();
// 			reader.onload = () => {
// 				setImg(reader.result);
// 			};
// 			reader.readAsDataURL(file);
// 		}
// 	};

// 	return (
// 		<div className='flex p-4 items-start gap-4 border-b border-gray-700'>
// 			<div className='avatar'>
// 				<div className='w-8 rounded-full'>
// 					<img src={authUser.profileImg || "/avatar-placeholder.png"} />
// 				</div>
// 			</div>
// 			<form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
// 				<textarea
// 					className='textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800'
// 					placeholder='What is happening?!'
// 					value={text}
// 					onChange={(e) => setText(e.target.value)}
// 				/>
// 				{img && (
// 					<div className='relative w-72 mx-auto'>
// 						<IoCloseSharp
// 							className='absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
// 							onClick={() => {
// 								setImg(null);
// 								imgRef.current.value = null;
// 							}}
// 						/>
// 						<img src={img} className='w-full mx-auto h-72 object-contain rounded' />
// 					</div>
// 				)}

// 				<div className='flex justify-between border-t py-2 border-t-gray-700'>
// 					<div className='flex gap-1 items-center'>
// 						<CiImageOn
// 							className='fill-primary w-6 h-6 cursor-pointer'
// 							onClick={() => imgRef.current.click()}
// 						/>
// 						<BsEmojiSmileFill className='fill-primary w-5 h-5 cursor-pointer' />
// 					</div>
// 					<input type='file' accept='image/*' hidden ref={imgRef} onChange={handleImgChange} />
// 					<button className='btn btn-primary rounded-full btn-sm text-white px-4'>
// 						{isPending ? "Posting..." : "Post"}
// 					</button>
// 				</div>
// 				{isError && <div className='text-red-500'>{error.message}</div>}
// 			</form>
// 		</div>
// 	);
// };
// export default CreatePost;







// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { useRef, useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// const CreatePost = () => {
//   const [text, setText] = useState("");
//   const [img, setImg] = useState(null);
//   const imgRef = useRef(null);

//   const { data: authUser } = useQuery({ queryKey: ["authUser"] });
//   const queryClient = useQueryClient();

//   const {
//     mutate: createPost,
//     isPending,
//     isError,
//     error,
//   } = useMutation({
//     mutationFn: async ({ text, img }) => {
//       try {
//         const res = await fetch("/api/posts/create", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ text, img }),
//         });
//         const data = await res.json();
//         if (!res.ok) {
//           throw new Error(data.error || "Something went wrong");
//         }
//         return data;
//       } catch (error) {
//         throw new Error(error);
//       }
//     },
//     onSuccess: () => {
//       setText("");
//       setImg(null);
//       toast.success("Post created successfully");
//       queryClient.invalidateQueries({ queryKey: ["posts"] });
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost({ text, img });
//   };

//   const handleImgChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImg(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="bg-gray-500 text-white p-5 rounded-xl shadow-lg max-w-lg mx-auto">
//       <div className="flex gap-3 items-start">
//         <img
//           src={authUser?.profileImg || "/avatar-placeholder.png"}
//           alt="User Avatar"
//           className="w-12 h-12 rounded-full object-cover border border-gray-00"
//         />
//         <form className="w-full space-y-3" onSubmit={handleSubmit}>
//           <textarea
//             className="w-full p-3 text-lg bg-gray-300 rounded-lg focus:ring focus:ring-primary outline-none"
//             placeholder="What's on your mind?"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             rows={3}
//           />

//           {img && (
//             <div className="relative group mt-2 rounded-xl overflow-hidden w-full h-56 border border-gray-700">
//               <IoCloseSharp
//                 className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full cursor-pointer hidden group-hover:block"
//                 onClick={() => {
//                   setImg(null);
//                   imgRef.current.value = null;
//                 }}
//               />
//               <img src={img} className="w-full h-full object-cover" alt="Preview" />
//             </div>
//           )}

//           <div className="flex justify-between items-center border-t pt-3 border-gray-700">
//             <div className="flex gap-3 items-center">
//               <CiImageOn
//                 className="text-blue-500 w-7 h-7 cursor-pointer hover:scale-110 transition"
//                 onClick={() => imgRef.current.click()}
//               />
//               <BsEmojiSmileFill className="text-yellow-500 w-6 h-6 cursor-pointer hover:scale-110 transition" />
//             </div>
//             <input type="file" accept="image/*" hidden ref={imgRef} onChange={handleImgChange} />
//             <button
//               className="bg-blue-600 px-5 py-2 rounded-full text-white font-semibold hover:bg-blue-500 transition disabled:opacity-50"
//               disabled={isPending}
//             >
//               {isPending ? "Posting..." : "Post"}
//             </button>
//           </div>
//           {isError && <p className="text-red-400 text-sm">{error.message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };
// export default CreatePost;




// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { useRef, useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// const CreatePost = () => {
//   const [text, setText] = useState("");
//   const [img, setImg] = useState(null);
//   const imgRef = useRef(null);

//   const { data: authUser } = useQuery({ queryKey: ["authUser"] });
//   const queryClient = useQueryClient();

//   const {
//     mutate: createPost,
//     isPending,
//     isError,
//     error,
//   } = useMutation({
//     mutationFn: async ({ text, img }) => {
//       try {
//         const res = await fetch("/api/posts/create", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ text, img }),
//         });
//         const data = await res.json();
//         if (!res.ok) {
//           throw new Error(data.error || "Something went wrong");
//         }
//         return data;
//       } catch (error) {
//         throw new Error(error);
//       }
//     },
//     onSuccess: () => {
//       setText("");
//       setImg(null);
//       toast.success("Post created successfully");
//       queryClient.invalidateQueries({ queryKey: ["posts"] });
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost({ text, img });
//   };

//   const handleImgChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImg(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
// //bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] p-6 shadow-lg   text-white
//   return (
//     <div className="bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] text-white p-5 rounded-lg shadow-md max-w-md mx-auto border border-gray-700">
//       <div className="flex gap-3 items-start">
//         <img
//           src={authUser?.profileImg || "/avatar-placeholder.png"}
//           alt="User Avatar"
//           className="w-12 h-12 rounded-full object-cover border border-gray-700"
//         />
//         <form className="w-full space-y-3" onSubmit={handleSubmit}>
//           <textarea
//             className="w-full p-3 text-lg bg-gray-900 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//             placeholder="Write a caption..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             rows={3}
//           />

//           {img && (
//             <div className="relative group mt-2 rounded-md overflow-hidden w-full border border-gray-700">
//               <IoCloseSharp
//                 className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full cursor-pointer hidden group-hover:block"
//                 onClick={() => {
//                   setImg(null);
//                   imgRef.current.value = null;
//                 }}
//               />
//               <img src={img} className="w-full object-cover" alt="Preview" />
//             </div>
//           )}

//           <div className="flex justify-between items-center py-2 border-t border-gray-700">
//             <div className="flex gap-4 items-center">
//               <CiImageOn
//                 className="text-white-500 w-7 h-7 cursor-pointer hover:scale-110 transition"
//                 onClick={() => imgRef.current.click()}
//               />
//               <BsEmojiSmileFill className="text-yellow-400 w-6 h-6 cursor-pointer hover:scale-110 transition" />
//             </div>
//             <input type="file" accept="image/*" hidden ref={imgRef} onChange={handleImgChange} />
//             <button
//               className="bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-500 transition disabled:opacity-50"
//               disabled={isPending}
//             >
//               {isPending ? "Posting..." : "Share"}
//             </button>
//           </div>
//           {isError && <p className="text-red-400 text-sm">{error.message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };
// export default CreatePost;



// import { useRef, useState } from "react";
// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { IoCloseSharp } from "react-icons/io5";
// import { FaUserTag, FaGlobe, FaLock, FaUsers } from "react-icons/fa";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// const CreatePost = () => {
//   const [text, setText] = useState("");
//   const [img, setImg] = useState(null);
//   const [visibility, setVisibility] = useState("public");
//   const imgRef = useRef(null);
//   const queryClient = useQueryClient();
  
//   const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  
//   const { mutate: createPost, isPending, isError, error } = useMutation({
//     mutationFn: async ({ text, img, visibility }) => {
//       try {
//         const res = await fetch("/api/posts/create", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ text, img, visibility }),
//         });
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || "Something went wrong");
//         return data;
//       } catch (err) {
//         throw new Error(err.message);
//       }
//     },
//     onSuccess: () => {
//       setText("");
//       setImg(null);
//       toast.success("Post created successfully!");
//       queryClient.invalidateQueries({ queryKey: ["posts"] });
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost({ text, img, visibility });
//   };

//   const handleImgChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setImg(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-5 max-w-md mx-auto border border-gray-300">
//       <div className="flex gap-3 items-start">
//         <img
//           src={authUser?.profileImg || "/avatar-placeholder.png"}
//           alt="User Avatar"
//           className="w-12 h-12 rounded-full object-cover border border-gray-300"
//         />
//         <form className="w-full space-y-3" onSubmit={handleSubmit}>
//           <textarea
//             className="w-full p-3 text-lg bg-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//             placeholder="What's on your mind?"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             rows={3}
//             maxLength={280}
//           />
//           <p className="text-right text-sm text-gray-500">{text.length}/280</p>

//           {img && (
//             <div className="relative group rounded-md overflow-hidden w-full border border-gray-300">
//               <IoCloseSharp
//                 className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full cursor-pointer hidden group-hover:block"
//                 onClick={() => {
//                   setImg(null);
//                   imgRef.current.value = null;
//                 }}
//               />
//               <img src={img} className="w-full object-cover" alt="Preview" />
//             </div>
//           )}

//           <div className="flex justify-between items-center py-2 border-t border-gray-300">
//             <div className="flex gap-4 items-center">
//               <CiImageOn className="text-gray-500 w-7 h-7 cursor-pointer hover:scale-110 transition" onClick={() => imgRef.current.click()} />
//               <BsEmojiSmileFill className="text-yellow-400 w-6 h-6 cursor-pointer hover:scale-110 transition" />
//               <FaUserTag className="text-blue-500 w-6 h-6 cursor-pointer hover:scale-110 transition" />
//             </div>
//             <input type="file" accept="image/*" hidden ref={imgRef} onChange={handleImgChange} />

//             <div className="relative">
//               <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 focus:outline-none" onClick={(e) => e.preventDefault()}>
//                 {visibility === "public" ? <FaGlobe /> : visibility === "friends" ? <FaUsers /> : <FaLock />} {visibility}
//               </button>
//               <div className="absolute mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
//                 <button onClick={() => setVisibility("public")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">🌍 Public</button>
//                 <button onClick={() => setVisibility("friends")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">👥 Friends</button>
//                 <button onClick={() => setVisibility("private")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">🔒 Private</button>
//               </div>
//             </div>
//             <button
//               className="bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-500 transition disabled:opacity-50"
//               disabled={isPending}
//             >
//               {isPending ? "Posting..." : "Share"}
//             </button>
//           </div>
//           {isError && <p className="text-red-400 text-sm">{error.message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };
// export default CreatePost;





// import { useRef, useState } from "react";
// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { IoCloseSharp } from "react-icons/io5";
// import { FaUserTag, FaGlobe, FaLock, FaUsers } from "react-icons/fa";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// const CreatePost = () => {
//   const [text, setText] = useState("");
//   const [img, setImg] = useState(null);
//   const [visibility, setVisibility] = useState("public");
//   const [showVisibilityOptions, setShowVisibilityOptions] = useState(false);
//   const imgRef = useRef(null);
//   const queryClient = useQueryClient();
  
//   const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  
//   const { mutate: createPost, isPending, isError, error } = useMutation({
//     mutationFn: async ({ text, img, visibility }) => {
//       try {
//         const res = await fetch("/api/posts/create", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ text, img, visibility }),
//         });
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || "Something went wrong");
//         return data;
//       } catch (err) {
//         throw new Error(err.message);
//       }
//     },
//     onSuccess: () => {
//       setText("");
//       setImg(null);
//       toast.success("Post created successfully!");
//       queryClient.invalidateQueries({ queryKey: ["posts"] });
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost({ text, img, visibility });
//   };

//   const handleImgChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setImg(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded- p-5  mx-auto ">
//       <div className="flex gap-3 items-start">
//         <img
//           src={authUser?.profileImg || "/avatar-placeholder.png"}
//           alt="User Avatar"
//           className="w-12 h-12 rounded-full object-cover border border-gray-300 "
//         />
//         <form className="w-full space-y-3" onSubmit={handleSubmit}>
//           <textarea
//             className="w-full p-3 text-lg bg-gray-00 rounded-md  focus:ring-blue-500 outline-none"
//             placeholder="What's on your mind?"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             rows={3}
//             maxLength={280}
//           />
//           <p className="text-right text-sm text-black">{text.length}/280</p>

//           {img && (
//             <div className="relative group rounded-md overflow-hidden w-full border border-gray-300">
//               <IoCloseSharp
//                 className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full cursor-pointer hidden group-hover:block"
//                 onClick={() => {
//                   setImg(null);
//                   imgRef.current.value = null;
//                 }}
//               />
//               <img src={img} className="w-full object-cover" alt="Preview" />
//             </div>
//           )}

//           <div className="flex justify-between items-center py-2 border-t border-gray-300">
//             <div className="flex gap-4 items-center">
//               <CiImageOn className="text-gray-500 w-7 h-7 cursor-pointer hover:scale-110 transition" onClick={() => imgRef.current.click()} />
//               <BsEmojiSmileFill className="text-yellow-400 w-6 h-6 cursor-pointer hover:scale-110 transition" />
//               <FaUserTag className="text-blue-500 w-6 h-6 cursor-pointer hover:scale-110 transition" />
//             </div>
//             <input type="file" accept="image/*" hidden ref={imgRef} onChange={handleImgChange} />

//             <div className="relative">
//               <button 
//                 className="flex items-center gap-2 text-gray-600 hover:text-gray-900 focus:outline-none"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setShowVisibilityOptions(!showVisibilityOptions);
//                 }}
//               >
//                 {visibility === "public" ? <FaGlobe /> : visibility === "friends" ? <FaUsers /> : <FaLock />} {visibility}
//               </button>
//               {showVisibilityOptions && (
//                 <div className="absolute mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg">
//                   <button onClick={() => { setVisibility("public"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-500 w-full text-left">🌍 Public</button>
//                   <button onClick={() => { setVisibility("friends"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-500 w-full text-left">👥 Friends</button>
//                   <button onClick={() => { setVisibility("private"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-500 w-full text-left">🔒 Private</button>
//                 </div>
//               )}
//             </div>
//             <button
//               className="bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-500 transition disabled:opacity-50"
//               disabled={isPending || text.length === 0}
//             >
//               {isPending ? "Posting..." : "Share"}
//             </button>
//           </div>
//           {isError && <p className="text-red-400 text-sm">{error.message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };
// export default CreatePost;









// import { useRef, useState } from "react";
// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { IoCloseSharp } from "react-icons/io5";
// import { FaUserTag, FaGlobe, FaLock, FaUsers } from "react-icons/fa";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// const CreatePost = () => {
//   const [text, setText] = useState("");
//   const [img, setImg] = useState(null);
//   const [visibility, setVisibility] = useState("public");
//   const [showVisibilityOptions, setShowVisibilityOptions] = useState(false);
//   const imgRef = useRef(null);
//   const queryClient = useQueryClient();
  
//   const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  
//   const { mutate: createPost, isPending, isError, error } = useMutation({
//     mutationFn: async ({ text, img, visibility }) => {
//       try {
//         const res = await fetch("/api/posts/create", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ text, img, visibility }),
//         });
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || "Something went wrong");
//         return data;
//       } catch (err) {
//         throw new Error(err.message);
//       }
//     },
//     onSuccess: () => {
//       setText("");
//       setImg(null);
//       toast.success("Post created successfully!");
//       queryClient.invalidateQueries({ queryKey: ["posts"] });
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost({ text, img, visibility });
//   };

//   const handleImgChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setImg(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded p-5 mx-auto mb-6"> 
//       <div className="flex gap-3 items-start">
//         <img
//           src={authUser?.profileImg || "/avatar-placeholder.png"}
//           alt="User Avatar"
//           className="w-12 h-12 rounded-full object-cover border border-gray-300"
//         />
//         <form className="w-full space-y-3" onSubmit={handleSubmit}>
//           <textarea
//             className="w-full p-3 text-lg bg-gray-100 rounded-md focus:ring-blue-500 outline-none"
//             placeholder="What's on your mind?"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             rows={3}
//             maxLength={280}
//           />
//           <p className="text-right text-sm text-black">{text.length}/280</p>

//           {img && (
//             <div className="relative group rounded-md overflow-hidden w-full border border-gray-300">
//               <IoCloseSharp
//                 className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full cursor-pointer hidden group-hover:block"
//                 onClick={() => {
//                   setImg(null);
//                   imgRef.current.value = null;
//                 }}
//               />
//               <img src={img} className="w-full object-cover" alt="Preview" />
//             </div>
//           )}

//           <div className="flex justify-between items-center py-2 border-">
//             <div className="flex gap-4 items-center">
//               <CiImageOn className="text-blue-600 w-7 h-7 cursor-pointer hover:scale-110 transition" onClick={() => imgRef.current.click()} />
//               <BsEmojiSmileFill className="text-yellow-400 w-6 h-6 cursor-pointer hover:scale-110 transition" />
//               <FaUserTag className="text-blue-500 w-6 h-6 cursor-pointer hover:scale-110 transition" />
//             </div>
//             <input type="file" accept="image/*" hidden ref={imgRef} onChange={handleImgChange} />

//             <div className="relative">
//               <button 
//                 className="flex items-center gap-2 text-gray-600 hover:text-gray-900 focus:outline-none"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setShowVisibilityOptions(!showVisibilityOptions);
//                 }}
//               >
//                 {visibility === "public" ? <FaGlobe /> : visibility === "friends" ? <FaUsers /> : <FaLock />} {visibility}
//               </button>
//               {showVisibilityOptions && (
//                 <div className="absolute mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg">
//                   <button onClick={() => { setVisibility("public"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">🌍 Public</button>
//                   <button onClick={() => { setVisibility("friends"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">👥 Friends</button>
//                   <button onClick={() => { setVisibility("private"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">🔒 Private</button>
//                 </div>
//               )}
//             </div>
//             <button
//               className="bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-500 transition disabled:opacity-50"
//               disabled={isPending || text.length === 0}
//             >
//               {isPending ? "Posting..." : "Share"}
//             </button>
//           </div>
//           {isError && <p className="text-red-400 text-sm">{error.message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;



import { useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { FaUserTag, FaGlobe, FaLock, FaUsers } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import EmojiPicker from "emoji-picker-react"; // Importing emoji picker (you need to install it)

const CreatePost = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [visibility, setVisibility] = useState("public");
  const [showVisibilityOptions, setShowVisibilityOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showTagInput, setShowTagInput] = useState(false);
  const [taggedUsers, setTaggedUsers] = useState([]);
  const imgRef = useRef(null);
  const queryClient = useQueryClient();
  
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  const { mutate: createPost, isPending, isError, error } = useMutation({
    mutationFn: async ({ text, img, visibility, taggedUsers }) => {
      try {
        const res = await fetch("/api/posts/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, img, visibility, taggedUsers }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Something went wrong");
        return data;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    onSuccess: () => {
      setText("");
      setImg(null);
      setTaggedUsers([]);
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ text, img, visibility, taggedUsers });
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setText((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleTagClick = () => {
    setShowTagInput(!showTagInput);
  };

  return (
    <div className="bg-white shadow-lg rounded p-5 mx-auto mb-6 my-4"> 
      <div className="flex gap-3 items-start">
        <img
          src={authUser?.profileImg || "/avatar-placeholder.png"}
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <form className="w-full space-y-3" onSubmit={handleSubmit}>
          <textarea
            className="w-full p-5 text-lg text-black bg-gray-100 rounded-md focus:ring-blue-500 outline-none"
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            maxLength={280}
          />
          <p className="text-right text-sm text-black">{text.length}/280</p>

          {img && (
            <div className="relative group rounded-md overflow-hidden w-full border border-gray-300">
              <IoCloseSharp
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full cursor-pointer hidden group-hover:block"
                onClick={() => {
                  setImg(null);
                  imgRef.current.value = null;
                }}
              />
              <img src={img} className="w-full object-cover" alt="Preview" />
            </div>
          )}

          <div className="flex justify-between items-center py-2 border">
            <div className="flex gap-4 items-center">
              <CiImageOn
                className="text-gray-500 w-7 h-7 cursor-pointer hover:scale-110 transition"
                onClick={() => imgRef.current.click()}
              />
              <BsEmojiSmileFill
                className="text-yellow-400 w-6 h-6 cursor-pointer hover:scale-100
                transition"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              />
              <FaUserTag
                className="text-blue-500 w-6 h-6 cursor-pointer hover:scale-110 transition"
                onClick={handleTagClick}
              />
            </div>
            <input type="file" accept="image/*" hidden ref={imgRef} onChange={handleImgChange} />

            <div className="relative">
              <button 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  setShowVisibilityOptions(!showVisibilityOptions);
                }}
              >
                {visibility === "public" ? <FaGlobe /> : visibility === "friends" ? <FaUsers /> : <FaLock />} {visibility}
              </button>
              {showVisibilityOptions && (
                <div className="absolute mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg">
                  <button onClick={() => { setVisibility("public"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">🌍 Public</button>
                  <button onClick={() => { setVisibility("friends"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">👥 Friends</button>
                  <button onClick={() => { setVisibility("private"); setShowVisibilityOptions(false); }} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">🔒 Private</button>
                </div>
              )}
            </div>
            <button
              className="bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-500 transition disabled:opacity-50"
              disabled={isPending || text.length === 0}
            >
              {isPending ? "Posting..." : "Share"}
            </button>
          </div>
          {isError && <p className="text-red-400 text-sm">{error.message}</p>}
        </form>
      </div>

      {showEmojiPicker && (
        <div className="absolute bg-white shadow-lg rounded-lg p-2 mt-2">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}

      {showTagInput && (
        <div className="mt-2">
          <input
            type="text"
            placeholder="Tag friends..."
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setTaggedUsers(e.target.value.split(","))}
          />
          <p className="text-sm text-gray-600 mt-1">Separate names with commas.</p>
        </div>
      )}
    </div>
  );
};

export default CreatePost;

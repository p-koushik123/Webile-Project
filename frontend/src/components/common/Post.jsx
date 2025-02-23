// import { FaRegComment } from "react-icons/fa";
// import { BiRepost } from "react-icons/bi";
// import { FaRegHeart } from "react-icons/fa";
// import { FaRegBookmark } from "react-icons/fa6";
// import { FaTrash } from "react-icons/fa";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// import LoadingSpinner from "./LoadingSpinner";
// import { formatPostDate } from "../../utils/date";

// const Post = ({ post }) => {
// 	const [comment, setComment] = useState("");
// 	const { data: authUser } = useQuery({ queryKey: ["authUser"] });
// 	const queryClient = useQueryClient();
// 	const postOwner = post.user;
// 	const isLiked = post.likes.includes(authUser._id);

// 	const isMyPost = authUser._id === post.user._id;

// 	const formattedDate = formatPostDate(post.createdAt);

// 	const { mutate: deletePost, isPending: isDeleting } = useMutation({
// 		mutationFn: async () => {
// 			try {
// 				const res = await fetch(`/api/posts/${post._id}`, {
// 					method: "DELETE",
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
// 			toast.success("Post deleted successfully");
// 			queryClient.invalidateQueries({ queryKey: ["posts"] });
// 		},
// 	});

// 	const { mutate: likePost, isPending: isLiking } = useMutation({
// 		mutationFn: async () => {
// 			try {
// 				const res = await fetch(`/api/posts/like/${post._id}`, {
// 					method: "POST",
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
// 		onSuccess: (updatedLikes) => {
// 			// this is not the best UX, bc it will refetch all posts
// 			// queryClient.invalidateQueries({ queryKey: ["posts"] });

// 			// instead, update the cache directly for that post
// 			queryClient.setQueryData(["posts"], (oldData) => {
// 				return oldData.map((p) => {
// 					if (p._id === post._id) {
// 						return { ...p, likes: updatedLikes };
// 					}
// 					return p;
// 				});
// 			});
// 		},
// 		onError: (error) => {
// 			toast.error(error.message);
// 		},
// 	});

// 	const { mutate: commentPost, isPending: isCommenting } = useMutation({
// 		mutationFn: async () => {
// 			try {
// 				const res = await fetch(`/api/posts/comment/${post._id}`, {
// 					method: "POST",
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 					body: JSON.stringify({ text: comment }),
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
// 			toast.success("Comment posted successfully");
// 			setComment("");
// 			queryClient.invalidateQueries({ queryKey: ["posts"] });
// 		},
// 		onError: (error) => {
// 			toast.error(error.message);
// 		},
// 	});

// 	const handleDeletePost = () => {
// 		deletePost();
// 	};

// 	const handlePostComment = (e) => {
// 		e.preventDefault();
// 		if (isCommenting) return;
// 		commentPost();
// 	};

// 	const handleLikePost = () => {
// 		if (isLiking) return;
// 		likePost();
// 	};

// 	return (
// 		<>
// 			<div className='flex gap-2 items-start p-4 border-b border-gray-700'>
// 				<div className='avatar'>
// 					<Link to={`/profile/${postOwner.username}`} className='w-8 rounded-full overflow-hidden'>
// 						<img src={postOwner.profileImg || "/avatar-placeholder.png"} />
// 					</Link>
// 				</div>
// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-2 items-center'>
// 						<Link to={`/profile/${postOwner.username}`} className='font-bold'>
// 							{postOwner.fullName}
// 						</Link>
// 						<span className='text-gray-700 flex gap-1 text-sm'>
// 							<Link to={`/profile/${postOwner.username}`}>@{postOwner.username}</Link>
// 							<span>·</span>
// 							<span>{formattedDate}</span>
// 						</span>
// 						{isMyPost && (
// 							<span className='flex justify-end flex-1'>
// 								{!isDeleting && (
// 									<FaTrash className='cursor-pointer hover:text-red-500' onClick={handleDeletePost} />
// 								)}

// 								{isDeleting && <LoadingSpinner size='sm' />}
// 							</span>
// 						)}
// 					</div>
// 					<div className='flex flex-col gap-3 overflow-hidden'>
// 						<span>{post.text}</span>
// 						{post.img && (
// 							<img
// 								src={post.img}
// 								className='h-80 object-contain rounded-lg border border-gray-700'
// 								alt=''
// 							/>
// 						)}
// 					</div>
// 					<div className='flex justify-between mt-3'>
// 						<div className='flex gap-4 items-center w-2/3 justify-between'>
// 							<div
// 								className='flex gap-1 items-center cursor-pointer group'
// 								onClick={() => document.getElementById("comments_modal" + post._id).showModal()}
// 							>
// 								<FaRegComment className='w-4 h-4  text-slate-500 group-hover:text-sky-400' />
// 								<span className='text-sm text-slate-500 group-hover:text-sky-400'>
// 									{post.comments.length}
// 								</span>
// 							</div>
// 							{/* We're using Modal Component from DaisyUI */}
// 							<dialog id={`comments_modal${post._id}`} className='modal border-none outline-none'>
// 								<div className='modal-box rounded border border-gray-600'>
// 									<h3 className='font-bold text-lg mb-4'>COMMENTS</h3>
// 									<div className='flex flex-col gap-3 max-h-60 overflow-auto'>
// 										{post.comments.length === 0 && (
// 											<p className='text-sm text-slate-500'>
// 												No comments yet 🤔 Be the first one 😉
// 											</p>
// 										)}
// 										{post.comments.map((comment) => (
// 											<div key={comment._id} className='flex gap-2 items-start'>
// 												<div className='avatar'>
// 													<div className='w-8 rounded-full'>
// 														<img
// 															src={comment.user.profileImg || "/avatar-placeholder.png"}
// 														/>
// 													</div>
// 												</div>
// 												<div className='flex flex-col'>
// 													<div className='flex items-center gap-1'>
// 														<span className='font-bold'>{comment.user.fullName}</span>
// 														<span className='text-gray-700 text-sm'>
// 															@{comment.user.username}
// 														</span>
// 													</div>
// 													<div className='text-sm'>{comment.text}</div>
// 												</div>
// 											</div>
// 										))}
// 									</div>
// 									<form
// 										className='flex gap-2 items-center mt-4 border-t border-gray-600 pt-2'
// 										onSubmit={handlePostComment}
// 									>
// 										<textarea
// 											className='textarea w-full p-1 rounded text-md resize-none border focus:outline-none  border-gray-800'
// 											placeholder='Add a comment...'
// 											value={comment}
// 											onChange={(e) => setComment(e.target.value)}
// 										/>
// 										<button className='btn btn-primary rounded-full btn-sm text-white px-4'>
// 											{isCommenting ? <LoadingSpinner size='md' /> : "Post"}
// 										</button>
// 									</form>
// 								</div>
// 								<form method='dialog' className='modal-backdrop'>
// 									<button className='outline-none'>close</button>
// 								</form>
// 							</dialog>
// 							<div className='flex gap-1 items-center group cursor-pointer'>
// 								<BiRepost className='w-6 h-6  text-slate-500 group-hover:text-green-500' />
// 								<span className='text-sm text-slate-500 group-hover:text-green-500'>0</span>
// 							</div>
// 							<div className='flex gap-1 items-center group cursor-pointer' onClick={handleLikePost}>
// 								{isLiking && <LoadingSpinner size='sm' />}
// 								{!isLiked && !isLiking && (
// 									<FaRegHeart className='w-4 h-4 cursor-pointer text-slate-500 group-hover:text-pink-500' />
// 								)}
// 								{isLiked && !isLiking && (
// 									<FaRegHeart className='w-4 h-4 cursor-pointer text-pink-500 ' />
// 								)}

// 								<span
// 									className={`text-sm  group-hover:text-pink-500 ${
// 										isLiked ? "text-pink-500" : "text-slate-500"
// 									}`}
// 								>
// 									{post.likes.length}
// 								</span>
// 							</div>
// 						</div>
// 						<div className='flex w-1/3 justify-end gap-2 items-center'>
// 							<FaRegBookmark className='w-4 h-4 text-slate-500 cursor-pointer' />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
// export default Post;





// import { FaRegComment, FaRegHeart, FaRegBookmark, FaTrash } from "react-icons/fa";
// import { BiRepost } from "react-icons/bi";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
// import LoadingSpinner from "./LoadingSpinner";
// import { formatPostDate } from "../../utils/date";

// const Post = ({ post }) => {
//     const [comment, setComment] = useState("");
//     const [isSaved, setIsSaved] = useState(false);
//     const { data: authUser } = useQuery({ queryKey: ["authUser"] });
//     const queryClient = useQueryClient();

//     if (!post || !authUser) {
//         return <div className="text-gray-500 text-center p-4">Loading post...</div>;
//     }

//     const postOwner = post.user || {};
//     const isLiked = post.likes?.includes(authUser?._id);
//     const isMyPost = authUser?._id === postOwner?._id;
//     const formattedDate = formatPostDate(post.createdAt);

//     const { mutate: deletePost, isPending: isDeleting } = useMutation({
//         mutationFn: async () => {
//             const res = await fetch(`/api/posts/${post._id}`, { method: "DELETE" });
//             if (!res.ok) throw new Error("Error deleting post");
//             return res.json();
//         },
//         onSuccess: () => {
//             toast.success("Post deleted successfully");
//             queryClient.invalidateQueries({ queryKey: ["posts"] });
//         },
//     });

//     const { mutate: toggleLike, isPending: isLiking } = useMutation({
//         mutationFn: async () => {
//             const res = await fetch(`/api/posts/like/${post._id}`, { method: "POST" });
//             if (!res.ok) throw new Error("Error liking/unliking post");
//             return res.json();
//         },
//         onSuccess: (updatedLikes) => {
//             queryClient.setQueryData(["posts"], (oldData) => 
//                 oldData?.map((p) => (p._id === post._id ? { ...p, likes: updatedLikes } : p))
//             );
//         },
//         onError: (error) => toast.error(error.message),
//     });

//     const { mutate: commentPost, isPending: isCommenting } = useMutation({
//         mutationFn: async () => {
//             const res = await fetch(`/api/posts/comment/${post._id}`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ text: comment }),
//             });
//             if (!res.ok) throw new Error("Error posting comment");
//             return res.json();
//         },
//         onSuccess: () => {
//             toast.success("Comment posted successfully");
//             setComment("");
//             queryClient.invalidateQueries({ queryKey: ["posts"] });
//         },
//         onError: (error) => toast.error(error.message),
//     });

//     const toggleSavePost = () => {
//         setIsSaved(!isSaved);
//         if(isSaved)
//         {
//             toast.success("Post saved");

//         }
//         else
//         {
//             toast.error("Post unsaved");
//         }
        
//     };

//     return (
//         <div className="flex gap-2 items-start bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] p-6 shadow-lg text-white">
//             <div className="avatar">
//                 <Link to={`/profile/${postOwner.username}`} className="w-8 rounded-full overflow-hidden">
//                     <img src={postOwner.profileImg || "/avatar-placeholder.png"} alt="Profile" />
//                 </Link>
//             </div>
//             <div className="flex flex-col flex-1">
//                 <div className="flex gap-2 items-center">
//                     <Link to={`/profile/${postOwner.username}`} className="font-bold">
//                         {postOwner.fullName || "Unknown User"}
//                     </Link>
//                     <span className="text-gray-700 flex gap-1 text-sm">
//                         <Link to={`/profile/${postOwner.username}`}>@{postOwner.username}</Link>
//                         <span>·</span>
//                         <span>{formattedDate}</span>
//                     </span>
//                     {isMyPost && (
//                         <span className="flex justify-end flex-1">
//                             {!isDeleting && (
//                                 <FaTrash className="cursor-pointer hover:text-red-500" onClick={() => deletePost()} />
//                             )}
//                             {isDeleting && <LoadingSpinner size="sm" />}
//                         </span>
//                     )}
//                 </div>
//                 <div className="flex flex-col gap-3 overflow-hidden">
//                     <span>{post.text}</span>
//                     {post.img && <img src={post.img} className="h-80 object-contain rounded-lg" alt="Post" />}
//                 </div>
//                 <div className="flex justify-between mt-3">
//                     <div className="flex gap-4 items-center">
//                         <div className="flex gap-1 items-center cursor-pointer group" onClick={() => setComment("")}> 
//                             <FaRegComment className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
//                             <span className="text-sm text-slate-500 group-hover:text-sky-400">
//                                 {post.comments?.length || 0}
//                             </span>
//                         </div>
//                         <div className="flex gap-1 items-center group cursor-pointer">
//                             <BiRepost className="w-6 h-6 text-slate-500 group-hover:text-green-500" />
//                             <span className="text-sm text-slate-500 group-hover:text-green-500">0</span>
//                         </div>
                        
//                         <div className="flex gap-1 items-center group cursor-pointer" onClick={() => toggleLike()}>
//                             {isLiking ? <LoadingSpinner size="sm" /> : <FaRegHeart className={`w-4 h-4 ${isLiked ? "text-red-500" : "text-slate-500"}`} />}
//                             <span className="text-sm text-slate-500">{post.likes?.length || 0}</span>
//                         </div>

//                         <div className="flex gap-1 items-center group cursor-pointer" onClick={toggleSavePost}>
//                             <FaRegBookmark className={`w-4 h-4 ${isSaved ? "text-red-500" : "text-slate-500"}`} />

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Post;





//current
// import { FaRegComment, FaRegHeart, FaRegBookmark, FaTrash } from "react-icons/fa";
// import { BiRepost } from "react-icons/bi";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
// import LoadingSpinner from "./LoadingSpinner";
// import { formatPostDate } from "../../utils/date";

// const Post = ({ post }) => {
//     const [comment, setComment] = useState("");
//     const [isSaved, setIsSaved] = useState(false);
//     const { data: authUser } = useQuery({ queryKey: ["authUser"] });
//     const queryClient = useQueryClient();

//     if (!post || !authUser) {
//         return <div className="text-gray-500 text-center p-4">Loading post...</div>;
//     }

//     const postOwner = post.user || {};
//     const isLiked = post.likes?.includes(authUser?._id);
//     const isMyPost = authUser?._id === postOwner?._id;
//     const formattedDate = formatPostDate(post.createdAt);

//     const { mutate: deletePost, isPending: isDeleting } = useMutation({
//         mutationFn: async () => {
//             const res = await fetch(`/api/posts/${post._id}`, { method: "DELETE" });
//             if (!res.ok) throw new Error("Error deleting post");
//             return res.json();
//         },
//         onSuccess: () => {
//             toast.success("Post deleted successfully");
//             queryClient.invalidateQueries({ queryKey: ["posts"] });
//         },
//     });

//     const { mutate: toggleLike, isPending: isLiking } = useMutation({
//         mutationFn: async () => {
//             const res = await fetch(`/api/posts/like/${post._id}`, { method: "POST" });
//             if (!res.ok) throw new Error("Error liking/unliking post");
//             return res.json();
//         },
//         onSuccess: (updatedLikes) => {
//             queryClient.setQueryData(["posts"], (oldData) => 
//                 oldData?.map((p) => (p._id === post._id ? { ...p, likes: updatedLikes } : p))
//             );
//         },
//         onError: (error) => toast.error(error.message),
//     });


//     const { mutate: commentPost, isPending: isCommenting } = useMutation({
//         mutationFn: async () => {
//             const res = await fetch(`/api/posts/comment/${post._id}`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ text: comment }),
//             });
    
//             if (!res.ok) {
//                 const errorData = await res.json();
//                 throw new Error(errorData.message || "Error posting comment");
//             }
    
//             return res.json();
//         },
//         onSuccess: () => {
//             toast.success("Comment posted successfully");
//             setComment("");
//             queryClient.invalidateQueries(["posts"]);
//         },
//         onError: (error) => {
//             toast.error(error.message || "Failed to post comment");
//         },
//     });
    
//     // Fixing toggleSavePost function
//     const toggleSavePost = () => {
//         setIsSaved((prevState) => {
//             const newSavedState = !prevState;
    
//             if (newSavedState) {
//                 toast.success("Post saved");
//             } else {
//                 toast.error("Post unsaved");
//             }
    
//             return newSavedState; // Correctly updating state
//         });
//     };
    

//     return (
//         <div className="flex gap-2 items-start bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] p-6 shadow-lg text-white gap-2">
//             <div className="avatar">
//                 <Link to={`/profile/${postOwner.username}`} className="w-8 rounded-full overflow-hidden">
//                     <img src={postOwner.profileImg || "/avatar-placeholder.png"} alt="Profile" />
//                 </Link>
//             </div>
//             <div className="flex flex-col flex-1">
//                 <div className="flex gap-2 items-center">
//                     <Link to={`/profile/${postOwner.username}`} className="font-bold">
//                         {postOwner.fullName || "Unknown User"}
//                     </Link>
//                     <span className="text-gray-300 flex gap-1 text-sm">
//                         <Link to={`/profile/${postOwner.username}`}>@{postOwner.username}</Link>
//                         <span>·</span>
//                         <span>{formattedDate}</span>
//                     </span>
//                     {isMyPost && (
//                         <span className="flex justify-end flex-1">
//                             {!isDeleting && (
//                                 <FaTrash className="cursor-pointer hover:text-red-500" onClick={() => deletePost()} />
//                             )}
//                             {isDeleting && <LoadingSpinner size="sm" />}
//                         </span>
//                     )}
//                 </div>
//                 <div className="flex flex-col gap-7 overflow-hidden my-6 mx-4 ">
//                     <span>{post.text}</span>
//                     {post.img && <img src={post.img} className="h-80 object-contain rounded-lg " alt="Post" />}
//                 </div>

//                 <div className="flex justify-between mt-3">
                    
//                     <div className="flex gap-4 items-center">
//                         <div className="flex gap-1 items-center cursor-pointer group" onClick={(
//                         ) => setComment("")}> 
//                             <FaRegComment className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
//                             <span className="text-sm text-slate-500 group-hover:text-sky-400">
//                                 {post.comments?.length || 0}
//                             </span>
//                         </div>
//                         <div className="flex gap-1 items-center group cursor-pointer">
//                             <BiRepost className="w-6 h-6 text-slate-500 group-hover:text-green-500" />
//                             <span className="text-sm text-slate-500 group-hover:text-green-500">0</span>
//                         </div>
                        
//                         <div className="flex gap-1 items-center group cursor-pointer" onClick={() => toggleLike()}>
//                             {isLiking ? <LoadingSpinner size="sm" /> : <FaRegHeart className={`w-4 h-4 ${isLiked ? "text-red-500" : "text-slate-500"}`} />}
//                             <span className="text-sm text-slate-500">{post.likes?.length || 0}</span>
//                         </div>

//                         <div className="flex gap-1 items-center group cursor-pointer" onClick={toggleSavePost}>
//                             <FaRegBookmark className={`w-4 h-4 ${isSaved ? "text-red-500" : "text-slate-500"}`} />

//                         </div>
//                     </div>


//                 </div>



//             </div>
//         </div>
//     );
// };

// export default Post;















// import { FaRegComment, FaRegHeart, FaRegBookmark, FaTrash } from "react-icons/fa";
// import { BiRepost } from "react-icons/bi";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
// import LoadingSpinner from "./LoadingSpinner";
// import { formatPostDate } from "../../utils/date";

// const Post = ({ post }) => {
//     const [comment, setComment] = useState("");
//     const [isSaved, setIsSaved] = useState(false);
//     const { data: authUser } = useQuery({ queryKey: ["authUser"] });
//     const queryClient = useQueryClient();

//     if (!post || !authUser) {
//         return <div className="text-gray-500 text-center p-4">Loading post...</div>;
//     }

//     const postOwner = post.user || {};
//     const isLiked = post.likes?.includes(authUser?._id);
//     const isMyPost = authUser?._id === postOwner?._id;
//     const formattedDate = formatPostDate(post.createdAt);

//     const { mutate: commentPost, isPending: isCommenting } = useMutation({
//         mutationFn: async () => {
//             try {
//                 const res = await fetch(`/api/posts/comment/${post._id}`, {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ text: comment }),
//                 });
//                 const data = await res.json();

//                 if (!res.ok) {
//                     throw new Error(data.error || "Something went wrong");
//                 }
//                 return data;
//             } catch (error) {
//                 throw new Error(error);
//             }
//         },
//         onSuccess: () => {
//             toast.success("Comment posted successfully");
//             setComment("");
//             queryClient.invalidateQueries({ queryKey: ["posts"] });
//         },
//         onError: (error) => {
//             toast.error(error.message);
//         },
//     });

//     const handlePostComment = (e) => {
//         e.preventDefault();
//         if (isCommenting) return;
//         commentPost();
//     };

//     return (
//         <div className='flex gap-2 items-start p-4 border-b border-gray-700'>
//             <div className='avatar'>
//                 <Link to={`/profile/${postOwner.username}`} className='w-8 rounded-full overflow-hidden'>
//                     <img src={postOwner.profileImg || "/avatar-placeholder.png"} />
//                 </Link>
//             </div>
//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-2 items-center'>
//                     <Link to={`/profile/${postOwner.username}`} className='font-bold'>
//                         {postOwner.fullName}
//                     </Link>
//                     <span className='text-gray-700 flex gap-1 text-sm'>
//                         <Link to={`/profile/${postOwner.username}`}>@{postOwner.username}</Link>
//                         <span>·</span>
//                         <span>{formattedDate}</span>
//                     </span>
//                 </div>
//                 <div className='flex flex-col gap-3 overflow-hidden'>
//                     <span>{post.text}</span>
//                 </div>
//                 <form className='flex gap-2 items-center mt-2' onSubmit={handlePostComment}>
//                     <textarea
//                         className='textarea w-full p-1 rounded text-md resize-none border focus:outline-non'
//                         placeholder='Add a comment...'
//                         value={comment}
//                         onChange={(e) => setComment(e.target.value)}
//                     />
//                     <button className='btn btn-primary rounded-full btn-sm text-white px-4' disabled={isCommenting}>
//                         {isCommenting ? <LoadingSpinner size='md' /> : "Post"}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Post;






//new-current-modified
import { FaComment, FaRegComment, FaRegHeart, FaTrash } from "react-icons/fa";

import { GoBookmarkFill } from "react-icons/go";

import { FcLike } from "react-icons/fc";
import { BiRepost } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";
import { formatPostDate } from "../../utils/date";

const Post = ({ post }) => {
    const [comment, setComment] = useState("");
    const [isSaved, setIsSaved] = useState(false);
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false); // New state for comment box
    const { data: authUser } = useQuery({ queryKey: ["authUser"] });
    const queryClient = useQueryClient();

    if (!post || !authUser) {
        return <div className="text-gray-500 text-center p-4">Loading post...</div>;
    }

    const postOwner = post.user || {};
    const isLiked = post.likes?.includes(authUser?._id);
    const isMyPost = authUser?._id === postOwner?._id;
    const formattedDate = formatPostDate(post.createdAt);

    const { mutate: deletePost, isPending: isDeleting } = useMutation({
        mutationFn: async () => {
            const res = await fetch(`/api/posts/${post._id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Error deleting post");
            return res.json();
        },
        onSuccess: () => {
            toast.success("Post deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });

    const { mutate: toggleLike, isPending: isLiking } = useMutation({
        mutationFn: async () => {
            const res = await fetch(`/api/posts/like/${post._id}`, { method: "POST" });
            if (!res.ok) throw new Error("Error liking/unliking post");
            return res.json();
        },
        onSuccess: (updatedLikes) => {
            queryClient.setQueryData(["posts"], (oldData) => 
                oldData?.map((p) => (p._id === post._id ? { ...p, likes: updatedLikes } : p))
            );
        },
        onError: (error) => toast.error(error.message),
    });

    const { mutate: commentPost, isPending: isCommenting } = useMutation({
        mutationFn: async () => {
            const res = await fetch(`/api/posts/comment/${post._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: comment }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error posting comment");
            }

            return res.json();
        },
        onSuccess: () => {
            toast.success("Comment posted successfully");
            setComment("");
            setIsCommentBoxOpen(false); // Close the comment box after submitting
            queryClient.invalidateQueries(["posts"]);
        },
        onError: (error) => {
            toast.error(error.message || "Failed to post comment");
        },
    });

    const toggleSavePost = () => {
        setIsSaved((prevState) => {
            const newSavedState = !prevState;

            if (newSavedState) {
                toast.success("Post saved");
            } else {
                toast.error("Post unsaved");
            }

            return newSavedState;
        });
    };

    return (
        <div className="flex gap-2 items-start bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] p-6 shadow-lg text-white">
            <div className="avatar">
                <Link to={`/profile/${postOwner.username}`} className="w-8 rounded-full overflow-hidden">
                    <img src={postOwner.profileImg || "/avatar-placeholder.png"} alt="Profile" />
                </Link>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-2 items-center">
                    <Link to={`/profile/${postOwner.username}`} className="font-bold">
                        {postOwner.fullName || "Unknown User"}
                    </Link>
                    <span className="text-gray-300 flex gap-1 text-sm">
                        <Link to={`/profile/${postOwner.username}`}>@{postOwner.username}</Link>
                        <span>·</span>
                        <span>{formattedDate}</span>
                    </span>
                    {isMyPost && (
                        <span className="flex justify-end flex-1">
                            {!isDeleting && (
                                <FaTrash className="cursor-pointer hover:text-red-500" onClick={() => deletePost()} />
                            )}
                            {isDeleting && <LoadingSpinner size="sm" />}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-7 overflow-hidden my-6 mx-4">
                    <span>{post.text}</span>
                    {post.img && <img src={post.img} className="h-80 object-contain rounded-lg" alt="Post" />}
                </div>

                <div className="flex justify-between mt-3  mx-1 my-1 ">
                    <div className="flex gap-4 items-center">
                        {/* Comment Button */}
                        <div
                            className="flex gap-1 items-center cursor-pointer group"
                            onClick={() => setIsCommentBoxOpen(!isCommentBoxOpen)}
                        >
                            <FaComment className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
                            <span className="text-sm text-slate-500 group-hover:text-sky-400">
                                {post.comments?.length || 0}
                            </span>
                        </div>

                        <div className="flex gap-1 items-center group cursor-pointer">
                            <BiRepost className="w-6 h-6 text-slate-500 group-hover:text-green-500" />
                            <span className="text-sm text-slate-500 group-hover:text-green-500">0</span>
                        </div>

                        <div className="flex gap-1 items-center group cursor-pointer" onClick={() => toggleLike()}>
                            {isLiking ? (
                                <LoadingSpinner size="sm" />
                            ) : (
                                <FcLike className={`w-4 h-4 ${isLiked ? "text-red-500" : "text-slate-500"}`} />
                            )}
                            <span className="text-sm text-slate-500">{post.likes?.length || 0}</span>
                        </div>

                        <div className="flex gap-1 items-center group cursor-pointer" onClick={toggleSavePost}>
                            <GoBookmarkFill className={`w-4 h-4 ${isSaved ? "text-red-500" : "text-slate-500"}`} />
                        </div>
                    </div>
                </div>

                {/* Comment Box */}
                {isCommentBoxOpen && (
                    <div className="mt-4 p-3 rounded-md 
                
                    bg-blue-600
                    ">
                        <textarea
                            className="w-full p-2 border rounded-md"
                            placeholder="Write your comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                            onClick={() => commentPost()}
                        >
                            {isCommenting ? "Posting..." : "Submit"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post;

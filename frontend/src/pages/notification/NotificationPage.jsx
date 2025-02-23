// import { Link } from "react-router-dom";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// import LoadingSpinner from "../../components/common/LoadingSpinner";

// import { IoSettingsOutline } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa6";

// const NotificationPage = () => {
// 	const queryClient = useQueryClient();
// 	const { data: notifications, isLoading } = useQuery({
// 		queryKey: ["notifications"],
// 		queryFn: async () => {
// 			try {
// 				const res = await fetch("/api/notifications");
// 				const data = await res.json();
// 				if (!res.ok) throw new Error(data.error || "Something went wrong");
// 				return data;
// 			} catch (error) {
// 				throw new Error(error);
// 			}
// 		},
// 	});

// 	const { mutate: deleteNotifications } = useMutation({
// 		mutationFn: async () => {
// 			try {
// 				const res = await fetch("/api/notifications", {
// 					method: "DELETE",
// 				});
// 				const data = await res.json();

// 				if (!res.ok) throw new Error(data.error || "Something went wrong");
// 				return data;
// 			} catch (error) {
// 				throw new Error(error);
// 			}
// 		},
// 		onSuccess: () => {
// 			toast.success("Notifications deleted successfully");
// 			queryClient.invalidateQueries({ queryKey: ["notifications"] });
// 		},
// 		onError: (error) => {
// 			toast.error(error.message);
// 		},
// 	});

// 	return (
// 		<>
// 			<div className='flex-[4_4_0] border-l border-r border-gray-700 min-h-screen'>
// 				<div className='flex justify-between items-center p-4 border-b border-gray-700'>
// 					<p className='font-bold'>Notifications</p>
// 					<div className='dropdown '>
// 						<div tabIndex={0} role='button' className='m-1'>
// 							<IoSettingsOutline className='w-4' />
// 						</div>
// 						<ul
// 							tabIndex={0}
// 							className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
// 						>
// 							<li>
// 								<a onClick={deleteNotifications}>Delete all notifications</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 				{isLoading && (
// 					<div className='flex justify-center h-full items-center'>
// 						<LoadingSpinner size='lg' />
// 					</div>
// 				)}
// 				{notifications?.length === 0 && <div className='text-center p-4 font-bold'>No notifications 🤔</div>}
// 				{notifications?.map((notification) => (
// 					<div className='border-b border-gray-700' key={notification._id}>
// 						<div className='flex gap-2 p-4'>
// 							{notification.type === "follow" && <FaUser className='w-7 h-7 text-primary' />}
// 							{notification.type === "like" && <FaHeart className='w-7 h-7 text-red-500' />}
// 							<Link to={`/profile/${notification.from.username}`}>
// 								<div className='avatar'>
// 									<div className='w-8 rounded-full'>
// 										<img src={notification.from.profileImg || "/avatar-placeholder.png"} />
// 									</div>
// 								</div>
// 								<div className='flex gap-1'>
// 									<span className='font-bold'>@{notification.from.username}</span>{" "}
// 									{notification.type === "follow" ? "followed you" : "liked your post"}
// 								</div>
// 							</Link>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);
// };
// export default NotificationPage;


import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import LoadingSpinner from "../../components/common/LoadingSpinner";

import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaUser, FaRegComment } from "react-icons/fa";
import { FaHeart, FaRetweet } from "react-icons/fa6";

const NotificationPage = () => {
	const queryClient = useQueryClient();
	const { data: notifications, isLoading } = useQuery({
		queryKey: ["notifications"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/notifications");
				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "Something went wrong");
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const { mutate: deleteNotifications, isPending } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch("/api/notifications", {
					method: "DELETE",
				});
				const data = await res.json();

				if (!res.ok) throw new Error(data.error || "Something went wrong");
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			toast.success("Notifications cleared successfully");
			queryClient.invalidateQueries({ queryKey: ["notifications"] });
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const getNotificationIcon = (type) => {
		switch (type) {
			case "follow":
				return <FaUser className="w-5 h-5 text-blue-500" />;
			case "like":
				return <FaHeart className="w-5 h-5 text-red-500" />;
			case "comment":
				return <FaRegComment className="w-5 h-5 text-green-500" />;
			case "retweet":
				return <FaRetweet className="w-5 h-5 text-purple-500" />;
			default:
				return <IoNotificationsOutline className="w-5 h-5 text-primary" />;
		}
	};

	const getActionText = (type) => {
		switch (type) {
			case "follow":
				return "started following you";
			case "like":
				return "liked your post";
			case "comment":
				return "commented on your post";
			case "retweet":
				return "shared your post";
			default:
				return "interacted with you";
		}
	};

	const getTimeAgo = (createdAt) => {
		if (!createdAt) return "";
		
		const now = new Date();
		const past = new Date(createdAt);
		const diffMs = now - past;
		
		// Convert to seconds
		const diffSec = Math.floor(diffMs / 1000);
		if (diffSec < 60) return `${diffSec} seconds ago`;
		
		// Convert to minutes
		const diffMin = Math.floor(diffSec / 60);
		if (diffMin < 60) return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
		
		// Convert to hours
		const diffHour = Math.floor(diffMin / 60);
		if (diffHour < 24) return `${diffHour} hour${diffHour !== 1 ? 's' : ''} ago`;
		
		// Convert to days
		const diffDay = Math.floor(diffHour / 24);
		if (diffDay < 30) return `${diffDay} day${diffDay !== 1 ? 's' : ''} ago`;
		
		// Convert to months
		const diffMonth = Math.floor(diffDay / 30);
		if (diffMonth < 12) return `${diffMonth} month${diffMonth !== 1 ? 's' : ''} ago`;
		
		// Convert to years
		const diffYear = Math.floor(diffMonth / 12);
		return `${diffYear} year${diffYear !== 1 ? 's' : ''} ago`;
	};

	return (
		<div className="flex-[4_4_0] border-l border-r border-gray-700 min-h-screen
		bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] mx-2 rounded-lg">
			<div className="sticky top-0 z-10 backdrop-blur-sm  border-b border-gray-700 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]">
				<div className="flex justify-between items-center p-5">
					<h1 className="font-bold text-xl text-gray-100">Notifications</h1>
					<div className="dropdown dropdown-end">
						<button 
							tabIndex={0} 
							className="btn btn-ghost btn-sm btn-circle hover:bg-gray-800"
							aria-label="Notification settings"
						>
							<IoSettingsOutline className="w-5 h-5 text-gray-300" />
						</button>
						<ul
							tabIndex={0}
							className="dropdown-content z-[1] menu p-2 shadow-lg bg-gray-800 rounded-box w-56 mt-1"
						>
							<li>
								<button 
									onClick={deleteNotifications} 
									disabled={isPending}
									className="text-gray-200 hover:text-red-400 hover:bg-gray-700"
								>
									{isPending ? (
										<>
											<span className="loading loading-spinner loading-xs"></span>
											Clearing...
										</>
									) : (
										"Clear all notifications"
									)}
								</button>
							</li>
						</ul>
					</div>
				</div>

				{!isLoading && notifications?.length > 0 && (
					<div className="flex justify-between px-4 py-2 border-t border-gray-800">
						<div className="flex space-x-2">
							<button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-200 text-sm font-medium transition">
								All
							</button>
							
						</div>
						<button 
							className="text-secondary text-sm hover:bg-white-200
							font-medium transition"
							onClick={deleteNotifications}
							disabled={isPending}
						>
							{isPending ? "Clearing..." : "Clear all"}
						</button>
					</div>
				)}
			</div>
			
			{isLoading && (
				<div className="flex justify-center items-center h-64">
					<LoadingSpinner size="lg" />
				</div>
			)}

			{!isLoading && notifications?.length === 0 && (
				<div className="flex flex-col items-center justify-center h-64 text-center p-4">
					<div className="bg-gray-800 p-4 rounded-full mb-4">
						<IoNotificationsOutline className="w-12 h-12 text-gray-400" />
					</div>
					<h2 className="text-xl font-bold text-gray-200 mb-2">No notifications yet</h2>
					<p className="text-gray-400 max-w-sm">
						When someone follows you or interacts with your posts, you'll see it here.
					</p>
				</div>
			)}

			{!isLoading && notifications?.length > 0 && (
				<div className="divide-y divide-gray-800">
					{notifications.map((notification) => (
						<div 
							key={notification._id} 
							className="p-4 hover:bg-gray-800/50 transition duration-150"
						>
							<div className="flex items-start gap-3">
								<div className="flex-shrink-0 p-2 bg-gray-800 rounded-full">
									{getNotificationIcon(notification.type)}
								</div>
								
								<div className="flex-grow">
									<div className="flex items-center gap-2 mb-1">
										<Link to={`/profile/${notification.from.username}`} className="flex-shrink-0">
											<div className="avatar">
												<div className="w-10 h-10 rounded-full ring-2 ring-gray-700 ring-offset-2 ring-offset-gray-900">
													<img 
														src={notification.from.profileImg || "/avatar-placeholder.png"}
														alt={notification.from.username}
														className="object-cover"
													/>
												</div>
											</div>
										</Link>
										
										<div className="flex-grow">
											<Link 
												to={`/profile/${notification.from.username}`}
												className="font-medium text-gray-200 hover:underline"
											>
												{notification.from.fullName || `@${notification.from.username}`}
											</Link>
											<span className="text-gray-400 ml-1">{getActionText(notification.type)}</span>
											
											{notification.post && (
												<Link 
													to={`/posts/${notification.post._id}`}
													className="text-primary hover:underline ml-1"
												>
													→ View post
												</Link>
											)}
										</div>
									</div>
									
									{notification.text && (
										<p className="text-gray-300 ml-12 mt-1">{notification.text}</p>
									)}
									
									<div className="text-xs text-gray-500 mt-2 ml-12">
										{getTimeAgo(notification.createdAt)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
export default NotificationPage;
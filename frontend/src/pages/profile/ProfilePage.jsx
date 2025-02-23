import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Posts from "../../components/common/Posts";
import ProfileHeaderSkeleton from "../../components/skeletons/ProfileHeaderSkeleton";
import EditProfileModal from "./EditProfileModal";

import { POSTS } from "../../utils/db/dummy";
import { formatMemberSinceDate } from "../../utils/date";

import { FaArrowLeft, FaLink } from "react-icons/fa";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { MdEdit, MdPhotoCamera } from "react-icons/md";

import useFollow from "../../hooks/useFollow";
import useUpdateUserProfile from "../../hooks/useUpdateUserProfile";

const ProfilePage = () => {
	const [coverImg, setCoverImg] = useState(null);
	const [profileImg, setProfileImg] = useState(null);
	const [feedType, setFeedType] = useState("posts");

	const coverImgRef = useRef(null);
	const profileImgRef = useRef(null);

	const { username } = useParams();

	const { follow, isPending } = useFollow();
	const { data: authUser } = useQuery({ queryKey: ["authUser"] });

	const {
		data: user,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["userProfile"],
		queryFn: async () => {
			try {
				const res = await fetch(`/api/users/profile/${username}`);
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const { isUpdatingProfile, updateProfile } = useUpdateUserProfile();

	const isMyProfile = authUser?._id === user?._id;
	const memberSinceDate = formatMemberSinceDate(user?.createdAt);
	const amIFollowing = authUser?.following?.includes(user?._id);

	const handleImgChange = (e, state) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				state === "coverImg" && setCoverImg(reader.result);
				state === "profileImg" && setProfileImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	useEffect(() => {
		refetch();
	}, [username, refetch]);

	return (
		<div className="flex-[4_4_0]   min-h-screen ">
			{/* HEADER */}
			{(isLoading || isRefetching) && <ProfileHeaderSkeleton />}
			{!isLoading && !isRefetching && !user && (
				<div className="flex items-center justify-center h-64">
					<div className="text-center">
						<h2 className="text-2xl font-bold text-gray-200">User not found</h2>
						<p className="text-gray-400 mt-2">The profile you're looking for doesn't exist</p>
						<Link to="/" className="btn btn-primary mt-4 rounded-full">
							Back to Home
						</Link>
					</div>
				</div>
			)}
			<div className="flex flex-col bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] mx-2 rounded-lg">
				{!isLoading && !isRefetching && user && (
					<>
						<div className="flex items-center gap-4 px-6 py-3 backdrop-blur-sm bg-gray-900/80 sticky top-0 z-10 ">
							<Link to="/" className="p-2 hover:bg-gray-800 rounded-full transition">
								<FaArrowLeft className="w-4 h-4 text-gray-200" />
							</Link>
							<div className="flex flex-col">
								<h1 className="font-bold text-xl text-gray-100">{user?.fullName}</h1>
								<span className="text-sm text-gray-400">{POSTS?.length} posts</span>
							</div>
						</div>
						{/* COVER IMG */}
						<div className="relative group/cover">
							<div className="h-64 w-full overflow-hidden">
								<img
									src={coverImg || user?.coverImg || "/cover.png"}
									className="h-full w-full object-cover transform hover:scale-105 transition duration-700"
									alt="cover image"
								/>
							</div>
							{isMyProfile && (
								<div
									className="absolute bottom-4 right-4 rounded-full p-3 bg-gray-800 bg-opacity-75 cursor-pointer opacity-0 group-hover/cover:opacity-100 transition duration-200 hover:bg-primary"
									onClick={() => coverImgRef.current.click()}
								>
									<MdPhotoCamera className="w-5 h-5 text-white" />
								</div>
							)}

							<input
								type="file"
								hidden
								accept="image/*"
								ref={coverImgRef}
								onChange={(e) => handleImgChange(e, "coverImg")}
							/>
							<input
								type="file"
								hidden
								accept="image/*"
								ref={profileImgRef}
								onChange={(e) => handleImgChange(e, "profileImg")}
							/>
							{/* USER AVATAR */}
							<div className="avatar absolute -bottom-16 left-8">
								<div className="w-32 h-32 rounded-full relative group/avatar ring-4 ring-gray-900 overflow-hidden">
									<img 
										src={profileImg || user?.profileImg || "/avatar-placeholder.png"}
										className="w-full h-full object-cover"
									/>
									{isMyProfile && (
										<div 
											className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition duration-300 cursor-pointer"
											onClick={() => profileImgRef.current.click()}
										>
											<MdEdit className="w-6 h-6 text-white" />
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="flex justify-end px-8 mt-5">
							{isMyProfile && <EditProfileModal authUser={authUser} />}
							{!isMyProfile && (
								<button
									className={`btn rounded-full px-6 ${
										amIFollowing 
											? 'btn-outline border-gray-600 hover:bg-gray-800 hover:border-gray-500' 
											: 'btn-primary text-white'
									}`}
									onClick={() => follow(user?._id)}
									disabled={isPending}
								>
									{isPending ? (
										<span className="loading loading-spinner loading-xs mr-2"></span>
									) : null}
									{!isPending && amIFollowing && "Unfollow"}
									{!isPending && !amIFollowing && "Follow"}
								</button>
							)}
							{(coverImg || profileImg) && (
								<button
									className="btn btn-primary rounded-full text-white px-6 ml-3"
									onClick={async () => {
										await updateProfile({ coverImg, profileImg });
										setProfileImg(null);
										setCoverImg(null);
									}}
									disabled={isUpdatingProfile}
								>
									{isUpdatingProfile ? (
										<>
											<span className="loading loading-spinner loading-xs mr-2"></span>
											Updating
										</>
									) : "Save Changes"}
								</button>
							)}
						</div>

						<div className="flex flex-col gap-6 mt-16 px-8">
							<div className="flex flex-col">
								<h2 className="font-bold text-2xl text-gray-100">{user?.fullName}</h2>
								<span className="text-gray-400">@{user?.username}</span>
								{user?.bio && (
									<p className="text-gray-200 my-3 leading-relaxed max-w-xl">{user?.bio}</p>
								)}
							</div>

							<div className="flex gap-6 flex-wrap text-gray-300">
								{user?.location && (
									<div className="flex gap-2 items-center">
										<IoLocationOutline className="w-4 h-4 text-gray-400" />
										<span>{user.location}</span>
									</div>
								)}
								{user?.link && (
									<div className="flex gap-2 items-center">
										<FaLink className="w-3 h-3 text-gray-400" />
										<a
											href={user?.link}
											target="_blank"
											rel="noreferrer"
											className="text-blue-400 hover:text-blue-300 hover:underline transition"
										>
											{user?.link.replace(/^https?:\/\/(www\.)?/, '')}
										</a>
									</div>
								)}
								<div className="flex gap-2 items-center">
									<IoCalendarOutline className="w-4 h-4 text-gray-400" />
									<span className="text-gray-400">Joined {memberSinceDate}</span>
								</div>
							</div>
							<div className="flex gap-6 text-gray-200">
								<div className="flex gap-1 items-center group cursor-pointer">
									<span className="font-bold">{user?.following?.length || 0}</span>
									<span className="text-gray-400 group-hover:underline transition">Following</span>
								</div>
								<div className="flex gap-1 items-center group cursor-pointer">
									<span className="font-bold">{user?.followers?.length || 0}</span>
									<span className="text-gray-400 group-hover:underline transition">Followers</span>
								</div>
							</div>
						</div>
						<div className="flex w-full border-b border-gray-700 mt-8">
							<div
								className={`flex justify-center flex-1 py-4 font-medium transition duration-300 cursor-pointer ${
									feedType === "posts" 
										? "text-primary border-b-2 border-primary" 
										: "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
								}`}
								onClick={() => setFeedType("posts")}
							>
								Posts
							</div>
							<div
								className={`flex justify-center flex-1 py-4 font-medium transition duration-300 cursor-pointer ${
									feedType === "likes" 
										? "text-primary border-b-2 border-primary" 
										: "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
								}`}
								onClick={() => setFeedType("likes")}
							>
								Likes
							</div>
							<div
								className={`flex justify-center flex-1 py-4 font-medium transition duration-300 cursor-pointer ${
									feedType === "media" 
										? "text-primary border-b-2 border-primary" 
										: "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
								}`}
								onClick={() => setFeedType("media")}
							>
								Media
							</div>
						</div>
					</>
				)}

				<Posts feedType={feedType} username={username} userId={user?._id} />
			</div>
		</div>
	);
};
export default ProfilePage;
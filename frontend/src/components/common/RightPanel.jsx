// import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

// import useFollow from "../../hooks/useFollow";

// import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
// import LoadingSpinner from "./LoadingSpinner";

// const RightPanel = () => {
// 	const { data: suggestedUsers, isLoading } = useQuery({
// 		queryKey: ["suggestedUsers"],
// 		queryFn: async () => {
// 			try {
// 				const res = await fetch("/api/users/suggested");
// 				const data = await res.json();
// 				if (!res.ok) {
// 					throw new Error(data.error || "Something went wrong!");
// 				}
// 				return data;
// 			} catch (error) {
// 				throw new Error(error.message);
// 			}
// 		},
// 	});

// 	const { follow, isPending } = useFollow();

// 	if (suggestedUsers?.length === 0) return <div className='md:w-64 w-0'></div>;

// 	return (
// 		<div className='hidden lg:block my-4 mx-2'>
// 			<div className='bg-[#16181C] p-4 rounded-md sticky top-2'>
// 				<p className='font-bold'>Who to follow</p>
// 				<div className='flex flex-col gap-4'>
// 					{/* item */}
// 					{isLoading && (
// 						<>
// 							<RightPanelSkeleton />
// 							<RightPanelSkeleton />
// 							<RightPanelSkeleton />
// 							<RightPanelSkeleton />
// 						</>
// 					)}
// 					{!isLoading &&
// 						suggestedUsers?.map((user) => (
// 							<Link
// 								to={`/profile/${user.username}`}
// 								className='flex items-center justify-between gap-4'
// 								key={user._id}
// 							>
// 								<div className='flex gap-2 items-center'>
// 									<div className='avatar'>
// 										<div className='w-8 rounded-full'>
// 											<img src={user.profileImg || "/avatar-placeholder.png"} />
// 										</div>
// 									</div>
// 									<div className='flex flex-col'>
// 										<span className='font-semibold tracking-tight truncate w-28'>
// 											{user.fullName}
// 										</span>
// 										<span className='text-sm text-slate-500'>@{user.username}</span>
// 									</div>
// 								</div>
// 								<div>
// 									<button
// 										className='btn bg-white text-black hover:bg-white hover:opacity-90 rounded-full btn-sm'
// 										onClick={(e) => {
// 											e.preventDefault();
// 											follow(user._id);
// 										}}
// 									>
// 										{isPending ? <LoadingSpinner size='sm' /> : "Follow"}
// 									</button>
// 								</div>
// 							</Link>
// 						))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default RightPanel;


import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useFollow from "../../hooks/useFollow";
import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
import LoadingSpinner from "./LoadingSpinner";

const RightPanel = () => {
    const { data: suggestedUsers, isLoading } = useQuery({
        queryKey: ["suggestedUsers"],
        queryFn: async () => {
            try {
                const res = await fetch("/api/users/suggested");
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong!");
                }
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    });

    const { follow, isPending } = useFollow();

    if (suggestedUsers?.length === 0) return <div className='md:w-64 w-0'></div>;

    return (
        <div className='hidden lg:block my-4 mx-2'>
            <div className='bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] p-6 rounded-2xl shadow-lg sticky top-2 text-white'>
                <p className='font-bold text-lg mb-4'>Who to follow</p>
                <div className='flex flex-col gap-4'>
                    {isLoading && (
                        <>
                            <RightPanelSkeleton />
                            <RightPanelSkeleton />
                            <RightPanelSkeleton />
                            <RightPanelSkeleton />
                        </>
                    )}
                    {!isLoading &&
                        suggestedUsers?.map((user) => (
                            <Link
                                to={`/profile/${user.username}`}
                                className='flex items-center justify-between gap-4 bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all'
                                key={user._id}
                            >
                                <div className='flex gap-3 items-center'>
                                    <div className='avatar'>
                                        <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-white'>
                                            <img src={user.profileImg || "/avatar-placeholder.png"} alt='User Avatar' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold tracking-tight truncate w-32 text-white'>
                                            {user.fullName}
                                        </span>
                                        <span className='text-sm text-gray-200'>@{user.username}</span>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className='px-4 py-2 bg-white text-blue-600 font-medium rounded-full shadow-md hover:bg-gray-200 transition-all flex items-center justify-center'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            follow(user._id);
                                        }}
                                    >
                                        {isPending ? <LoadingSpinner size='sm' /> : "Follow"}
                                    </button>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RightPanel;
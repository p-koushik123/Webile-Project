// const PostSkeleton = () => {
// 	return (
// 		<div className='flex flex-col gap-6 w-full p-4'>
// 			<div className='flex gap-5 items-center'>
// 				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
// 				<div className='flex flex-col gap-2'>
// 					<div className='skeleton h-2 w-12 rounded-full'></div>
// 					<div className='skeleton h-2 w-24 rounded-full'></div>
// 				</div>
// 			</div>
// 			<div className='skeleton h-40 w-full'></div>
// 		</div>
// 	);
// };
// export default PostSkeleton;

const PostSkeleton = () => {
	return (
		<div className="flex flex-col gap-6 w-full p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg animate-pulse">
			{/* Header Section */}
			<div className="flex gap-4 items-center">
				<div className="bg-gray-300/30 backdrop-blur-md w-12 h-12 rounded-full"></div>
				<div className="flex flex-col gap-2 w-full max-w-[150px]">
					<div className="bg-gray-300/30 backdrop-blur-md h-3 w-20 rounded-full"></div>
					<div className="bg-gray-300/30 backdrop-blur-md h-3 w-32 rounded-full"></div>
				</div>
			</div>

			{/* Content Section */}
			<div className="bg-gray-300/30 backdrop-blur-md h-40 w-full rounded-lg"></div>

			{/* Footer Actions */}
			<div className="flex justify-between items-center">
				<div className="bg-gray-300/30 backdrop-blur-md h-4 w-16 rounded-full"></div>
				<div className="bg-gray-300/30 backdrop-blur-md h-4 w-20 rounded-full"></div>
				<div className="bg-gray-300/30 backdrop-blur-md h-4 w-12 rounded-full"></div>
			</div>
		</div>
	);
};

export default PostSkeleton;

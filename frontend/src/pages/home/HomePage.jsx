import { useState } from "react";

import Posts from "../../components/common/Posts";
import CreatePost from "./CreatePost";

const HomePage = () => {
	const [feedType, setFeedType] = useState("forYou");

	return (
		<>
			<div className='flex-[4_4_0] mr-auto min-h-screen 
			my-1 mx-3
			bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] p-6 rounded-2xl shadow-lg sticky top-2 text-white'>
				{/* Header */}
				<div className='flex w-full  border-gray-700'>
					<div
						className={
							"flex justify-center flex-1 p-3  transition duration-300 cursor-pointer relative "
						}
						onClick={() => setFeedType("forYou")}
					>
						For you
						{feedType === "forYou" && (
							<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
						)}
					</div>
					<div
						className='flex justify-center flex-1 p-3  transition duration-300 cursor-pointer relative'
						onClick={() => setFeedType("following")}
					>
						Following
						{feedType === "following" && (
							<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
						)}
					</div>
				</div>

				{/*  CREATE POST INPUT */}
				<CreatePost />

				{/* POSTS */}
				<Posts feedType={feedType} />
			</div>
		</>
	);
};
export default HomePage;






// import { useState } from "react";
// import { Bell, Home, Users, Settings } from "lucide-react";
// import Posts from "../../components/common/Posts";
// import CreatePost from "./CreatePost";

// const HomePage = () => {
//   const [feedType, setFeedType] = useState("forYou");
  
//   const navItems = [
//     { icon: <Home size={20} />, label: "Home" },
//     { icon: <Bell size={20} />, label: "Notifications" },
//     { icon: <Users size={20} />, label: "Community" },
//     { icon: <Settings size={20} />, label: "Settings" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Sidebar Navigation */}
//       <nav className="fixed top-0 left-0 h-full w-16 md:w-64 bg-gray-800 border-r border-gray-700">
//         <div className="flex flex-col h-full">
//           <div className="p-4">
//             <h1 className="hidden md:block text-xl font-bold text-white">MyApp</h1>
//           </div>
          
//           <div className="flex-1">
//             {navItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
//               >
//                 {item.icon}
//                 <span className="hidden md:block ml-4">{item.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="ml-16 md:ml-64">
//         <div className="max-w-4xl mx-auto">
//           {/* Feed Type Selector */}
//           <div className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 shadow-lg">
//             <div className="flex">
//               {["forYou", "following"].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => setFeedType(type)}
//                   className={`flex-1 py-4 px-6 text-center transition-all ${
//                     feedType === type
//                       ? "text-blue-500 border-b-2 border-blue-500 font-semibold"
//                       : "text-gray-400 hover:text-gray-100 hover:bg-gray-700"
//                   }`}
//                 >
//                   {type === "forYou" ? "For You" : "Following"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Create Post Section */}
//           <div className="p-4 bg-gray-800 border-b border-gray-700 shadow-md">
//             <div className="max-w-2xl mx-auto">
//               <CreatePost />
//             </div>
//           </div>

//           {/* Posts Feed */}
//           <div className="max-w-2xl mx-auto p-4">
//             <Posts feedType={feedType} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;



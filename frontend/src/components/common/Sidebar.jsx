
// import { MdHomeFilled } from "react-icons/md";
// import { IoNotifications } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { BiLogOut } from "react-icons/bi";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import PkLogo from "../svgs/PKLogo";

// const Sidebar = () => {
// 	const queryClient = useQueryClient();
// 	const { mutate: logout } = useMutation({
// 		mutationFn: async () => {
// 			try {
// 				const res = await fetch("/api/auth/logout", {
// 					method: "POST",
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
// 			queryClient.invalidateQueries({ queryKey: ["authUser"] });
// 		},
// 		onError: () => {
// 			toast.error("Logout failed");
// 		},
// 	});
// 	const { data: authUser } = useQuery({ queryKey: ["authUser"] });

// 	return (
// 		<div className='md:flex-[2_2_0] w-18 max-w-52'>
// 			<div className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'>
// 				<Link to='/' className='flex justify-center md:justify-start'>
// 					<PkLogo className='w-20 h-20 md:w-24 md:h-24' />
// 				</Link>
// 				<ul className='flex flex-col gap-3 mt-4'>
// 					<li className='flex justify-center md:justify-start'>
// 						<Link
// 							to='/'
// 							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
// 						>
// 							<MdHomeFilled className='w-8 h-8' />
// 							<span className='text-lg hidden md:block'>Home</span>
// 						</Link>
// 					</li>
// 					<li className='flex justify-center md:justify-start'>
// 						<Link
// 							to='/notifications'
// 							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
// 						>
// 							<IoNotifications className='w-6 h-6' />
// 							<span className='text-lg hidden md:block'>Notifications</span>
// 						</Link>
// 					</li>

// 					<li className='flex justify-center md:justify-start'>
// 						<Link
// 							to={`/profile/${authUser?.username}`}
// 							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
// 						>
// 							<FaUser className='w-6 h-6' />
// 							<span className='text-lg hidden md:block'>Profile</span>
// 						</Link>
// 					</li>
// 				</ul>
// 				{authUser && (
// 					<Link
// 						to={`/profile/${authUser.username}`}
// 						className='mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#181818] py-2 px-4 rounded-full'
// 					>
// 						<div className='avatar hidden md:inline-flex'>
// 							<div className='w-8 rounded-full'>
// 								<img src={authUser?.profileImg || "/avatar-placeholder.png"} />
// 							</div>
// 						</div>
// 						<div className='flex justify-between flex-1'>
// 							<div className='hidden md:block'>
// 								<p className='text-white font-bold text-sm w-20 truncate'>{authUser?.fullName}</p>
// 								<p className='text-slate-500 text-sm'>@{authUser?.username}</p>
// 							</div>
// 							<BiLogOut
// 								className='w-5 h-5 cursor-pointer'
// 								onClick={(e) => {
// 									e.preventDefault();
// 									logout();
// 								}}
// 							/>
// 						</div>
// 					</Link>
// 				)}
// 		</div>
// 		</div>
// 	);
// };
// export default Sidebar;



// import { MdHomeFilled } from "react-icons/md";
// import { IoNotifications } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { BiLogOut } from "react-icons/bi";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import PkLogo from "../svgs/PKLogo";

// const Sidebar = () => {
// 	const queryClient = useQueryClient();
// 	const { mutate: logout } = useMutation({
// 		mutationFn: async () => {
// 			try {
// 				const res = await fetch("/api/auth/logout", {
// 					method: "POST",
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
// 			queryClient.invalidateQueries({ queryKey: ["authUser"] });
// 		},
// 		onError: () => {
// 			toast.error("Logout failed");
// 		},
// 	});
// 	const { data: authUser } = useQuery({ queryKey: ["authUser"] });

// 	return (
// 		<div className="md:flex-[2_2_0] w-18 max-w-52">
// 			<div className="sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
// 				{/* Logo Section */}
// 				<Link to="/" className="flex justify-center md:justify-start p-4">
// 					<PkLogo className="w-20 h-20 md:w-24 md:h-24" />
// 				</Link>

// 				{/* Navigation Links */}
// 				<ul className="flex flex-col gap-6 mt-6">
// 					{/* Home Link */}
// 					<li className="flex justify-center md:justify-start">
// 						<Link
// 							to="/"
// 							className="flex gap-3 items-center hover:bg-[#333333] transition-all rounded-lg px-3 py-2 max-w-fit cursor-pointer"
// 						>
// 							<MdHomeFilled className="w-7 h-7" />
// 							<span className="text-lg hidden md:block">Home</span>
// 						</Link>
// 					</li>

// 					{/* Notifications Link */}
// 					<li className="flex justify-center md:justify-start">
// 						<Link
// 							to="/notifications"
// 							className="flex gap-3 items-center hover:bg-[#333333] transition-all rounded-lg px-3 py-2 max-w-fit cursor-pointer"
// 						>
// 							<IoNotifications className="w-7 h-7" />
// 							<span className="text-lg hidden md:block">Notifications</span>
// 						</Link>
// 					</li>

// 					{/* Profile Link */}
// 					<li className="flex justify-center md:justify-start">
// 						<Link
// 							to={`/profile/${authUser?.username}`}
// 							className="flex gap-3 items-center hover:bg-[#333333] transition-all rounded-lg px-3 py-2 max-w-fit cursor-pointer"
// 						>
// 							<FaUser className="w-7 h-7" />
// 							<span className="text-lg hidden md:block">Profile</span>
// 						</Link>
// 					</li>
// 				</ul>

// 				{/* Profile Section with Logout */}
// 				{authUser && (
// 					<Link
// 						to={`/profile/${authUser.username}`}
// 						className="mt-auto mb-10 flex gap-3 items-center p-3 rounded-lg transition-all hover:bg-[#181818]"
// 					>
// 						{/* Avatar */}
// 						<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700">
// 							<img src={authUser?.profileImg || "/avatar-placeholder.png"} alt="User Avatar" className="w-full h-full object-cover" />
// 						</div>

// 						{/* User Info */}
// 						<div className="flex flex-col ml-3">
// 							<p className="text-white font-semibold text-sm truncate w-20">{authUser?.fullName}</p>
// 							<p className="text-slate-500 text-xs">@{authUser?.username}</p>
// 						</div>

// 						{/* Logout Icon */}
// 						<BiLogOut
// 							className="w-6 h-6 text-white cursor-pointer ml-auto"
// 							onClick={(e) => {
// 								e.preventDefault();
// 								logout();
// 							}}
// 						/>
// 					</Link>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Sidebar;

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import PkLogo from "../svgs/PKLogo";

const Sidebar = () => {
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "POST",
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast.success("Logged out successfully");
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  return (
    <div className="md:flex-[2_2_0] w-20 md:w-60">
      <div className="sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] shadow-xl p-4 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] p-6 rounded-2xl shadow-lg sticky top-2 text-white">
        {/* Logo Section */}
        <Link to="/" className="flex justify-center md:justify-start p-4">
          <PkLogo className="w-16 h-16 md:w-20 md:h-20" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4 mt-6">
          {[
            { to: "/", icon: <MdHomeFilled />, label: "Home" },
            { to: "/notifications", icon: <IoNotifications />, label: "Notifications" },
            { to: `/profile/${authUser?.username}`, icon: <FaUser />, label: "Profile" },
          ].map(({ to, icon, label }) => (
            <li key={label} className="flex justify-center md:justify-start">
              <Link
                to={to}
                className="flex gap-4 items-center hover:bg-gray-700/50 transition-all rounded-lg px-4 py-3 w-full md:max-w-[90%] text-white"
              >
                <div className="w-7 h-7">{icon}</div>
                <span className="text-lg hidden md:block">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile Section with Logout */}
        {authUser && (
          <div className="mt-auto mb-6 flex  items-center p-1   hover:bg-gray-800/50 transition-all cursor-pointer w-full md:max-w-[100%]">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700">
              <img
                src={authUser?.profileImg || "/avatar-placeholder.png"}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="flex flex-col ml-3">
              <p className="text-white font-semibold text-sm truncate w-20">{authUser?.fullName}</p>
              <p className="text-gray-400 text-xs">@{authUser?.username}</p>
            </div>

            {/* Logout Icon */}
            <BiLogOut
              className="w-6 h-6 text-red-400 hover:text-red-500 cursor-pointer ml-auto"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

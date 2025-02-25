// import { Navigate, Route, Routes } from "react-router-dom";

// import HomePage from "./pages/home/HomePage";
// import LoginPage from "./pages/auth/login/LoginPage";
// import SignUpPage from "./pages/auth/signup/SignUpPage";
// import NotificationPage from "./pages/notification/NotificationPage";
// import ProfilePage from "./pages/profile/ProfilePage";

// import Sidebar from "./components/common/Sidebar";
// import RightPanel from "./components/common/RightPanel";

// import { Toaster } from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "./components/common/LoadingSpinner";


// import AdminDashboard from "./pages/admin/AdminDashboard";
// // import AdminRoute from "./components/common/AdminRoute";
// import AdminLayout from "./pages/admin/AdminLayout";
// import AdminLogin from "./pages/admin/AdminLogin";











// function App() {
// 	const { data: authUser, isLoading } = useQuery({
// 		// we use queryKey to give a unique name to our query and refer to it later
// 		queryKey: ["authUser"],
// 		queryFn: async () => {
// 			try {
// 				const res = await fetch("/api/auth/me");
// 				const data = await res.json();
// 				if (data.error) return null;
// 				if (!res.ok) {
// 					throw new Error(data.error || "Something went wrong");
// 				}
// 				console.log("authUser is here:", data);
// 				return data;
// 			} catch (error) {
// 				throw new Error(error);
// 			}
// 		},
// 		retry: false,
// 	});

// 	if (isLoading) {
// 		return (
// 			<div className='h-screen flex justify-center items-center'>
// 				<LoadingSpinner size='lg' />
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className='flex max-w-6xl mx-auto'>
// 			{/* Common component, bc it's not wrapped with Routes */}
// 			{authUser && <Sidebar />}
// 			<Routes>
// 				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
// 				<Route path='/admin' element={authUser?.isAdmin ? <AdminDashboard /> : <Navigate to='/' />} />

// 				<Route path='/admin/dashboard' element={<AdminLayout />}>
// 					<Route index element={<AdminDashboard />} />
// 				</Route>
// 				<Route path='/admin' element={<Navigate to='/admin/dashboard' />} />
// 				<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
// 				<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
// 				<Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to='/login' />} />
// 				<Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
// 			</Routes>
// 			{authUser && <RightPanel />}
// 			<Toaster />
// 		</div>
// 	);
// }

// export default App;


import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";
import AdminLogin from "./pages/admin/adminlogin"
// import AdminUserProfile from "./pages/admin/adminuserprofile"
import UserProfile from "./pages/admin/userprofile"

import AdminDashboard from "./pages/admin/admindash"

function App() {
	const { data: authUser, isLoading } = useQuery({
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/me");
				const data = await res.json();
				if (data.error) return null;
				if (!res.ok) throw new Error(data.error || "Something went wrong");

				console.log("Authenticated User:", data);
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		retry: false,
	});

	if (isLoading) {
		return (
			<div className='h-screen flex justify-center items-center'>
				<LoadingSpinner size='lg' />
			</div>
		);
	}

	return (
		<div className='flex max-w-6xl mx-auto'>
			{authUser && <Sidebar />}
			<Routes>
				{/* Public Routes */}
				<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
				<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/login' />} />

				{/* User Routes */}
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
				<Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to='/login' />} />
				<Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />

				{/* Admin Routes */}
				{/* <Route path="/admin/login" element={<AdminLogin />} />
				<Route path="admin/dashboard" element={<AdminDashboard />} /> */}
				{/* <Route path='/admin' element={<AdminDashboard />} />
				<Route path='/admin/users/:username' element={<AdminUserProfile />} /> */}
				<Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/users/:username' element={<UserProfile />} />
				
			</Routes>
			{authUser && <RightPanel />}
			<Toaster />
		</div>
	);
}

export default App;

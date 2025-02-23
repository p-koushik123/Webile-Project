import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineMail, MdPassword, MdVisibility, MdVisibilityOff } from "react-icons/md";
import toast from "react-hot-toast";
// import PkLogo from "../../../components/svgs/PKLogo";
import PkLogo from "../../components/svgs/PKLogo";
const adminlogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", formData);
      localStorage.setItem("adminToken", res.data.token);
      toast.success("Admin logged in successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex justify-center mb-6">
          <PkLogo className="w-16" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">Admin Login</h1>
        <p className="text-center text-gray-500 mb-6">Sign in to manage the platform</p>
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-200">
            <MdOutlineMail className="text-xl text-gray-500" />
            <input
              type="email"
              className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
              placeholder="Admin Email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
          </label>
          <div className="space-y-2">
            <label className="input input-bordered rounded-full flex items-center gap-3 p-4 shadow-md bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-200">
              <MdPassword className="text-xl text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                className="grow bg-transparent border-none outline-none placeholder-gray-400 text-gray-800"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={formData.password}
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 focus:outline-none"
              >
                {showPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
              </button>
            </label>
          </div>
          {error && (
            <div className="p-3 bg-red-50 rounded-lg border border-red-100">
              <p className="text-red-600 text-center text-sm">{error}</p>
            </div>
          )}
          <button 
            className="btn rounded-full text-white py-3 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition duration-300 transform hover:scale-[1.02] font-semibold shadow-lg"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Logging in...
              </div>
            ) : 'Sign in'}
          </button>
          <div className="flex flex-col items-center mt-6">
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
              Return to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default adminlogin;

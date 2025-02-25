import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePage from "../profile/ProfilePage";

const AdminUserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${username}`);
        const data = await response.json();
        console.log(data.user);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    // Fetch user's posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/users/${username}/posts`);
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchUser();
    fetchPosts();
  }, [username]);

  console.log("User Data:", user);
  console.log("Posts Data:", posts);

  return (
    <div className="flex-1">
      <div className="p-4 border-b border-gray-700 bg-base-200">
        <h2 className="text-lg font-semibold">Admin View - User Profile</h2>
        <p className="text-sm text-gray-400">Viewing profile for @{username}</p>
      </div>

{user && Object.keys(user).length > 0 ? (
  <ProfilePage isAdminView={true} user={user} posts={posts} />
) : (
  <p className="text-center p-4">Loading user data...</p>
)}


    </div>
  );
};

export default AdminUserProfile;



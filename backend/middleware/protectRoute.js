import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
	try {
		// Get the token from cookies
		const token = req.cookies.jwt;

		// Check if token is provided
		if (!token) {
			return res.status(401).json({ error: "Unauthorized: No Token Provided" });
		}

		// Verify the token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// If decoding fails (e.g., invalid token), return an error
		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized: Invalid Token" });
		}

		// Find the user associated with the token
		const user = await User.findById(decoded.userId).select("-password");

		// If the user is not found, return a 404 error
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		// Attach the user information to the request object
		req.user = user;

		// Call the next middleware or route handler
		next();
	} catch (err) {
		// Log the error and return a server error response
		console.error("Error in protectRoute middleware:", err.message);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};


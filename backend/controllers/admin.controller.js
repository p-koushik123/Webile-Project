import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import Admin from "../models/admin.model.js";

export const registerAdmin = async (req, res) => {
    console.log("Insdi ethe regitser aadmin controller : ",req.body);
    try {
        const data = await Admin.create(req.body);
        generateTokenAndSetCookie(data._id, res);
        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const loginAdmin = async (req, res) => {
    console.log("Inside the login admin controller : ",req.body);
    try {
        const data = await Admin.findOne({ email: req.body.username });
        if (!data) {
            return res.status(404).json({ message: "Admin not found" });
        }
        if (data.password !== req.body.password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        generateTokenAndSetCookie(data._id, res);
        res.status(200).json({ data });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


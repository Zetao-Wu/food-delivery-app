import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';  // Import bcryptjs
import validator from "validator";
import "dotenv/config";

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        // Find the user by email
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message: 'User does not exist'})
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success: false, message: 'Invalid credentials'})
        }

        // Create and return JWT token
        const token = createToken(user._id);
        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Error'})
    }
};

// Function to create JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // checking if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validating email format and check for strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password cannot be less than 8 chars",
      });
    }

    // Hashing password with bcryptjs
    const salt = await bcrypt.genSalt(10);  // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt);  // Hash password

    // Creating a new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Save the user and create a token
    const user = await newUser.save();
    const token = createToken(user._id);

    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };

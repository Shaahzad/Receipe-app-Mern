import { Request, Response, NextFunction } from 'express';
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Register User Controller
export const registerUser = async (req: Request, res: Response, next: NextFunction) : Promise<any> => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
        });

    } catch (error) {
        next(error); 
    }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) : Promise<any> => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign({
            userId: user._id,
        }, process.env.JWT_SECRET as string, {
            expiresIn: "1h",
        })

        return res.status(200).json({
            success: true,
            token,
            userId: user._id,
            message: "Login successful",
        });

    } catch (error) {
        next(error);
        res.status(500).json({ 
            success: false, 
            message: "Internal Server Error"
         });
    }
}
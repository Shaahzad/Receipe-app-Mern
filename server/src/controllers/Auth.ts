import { Request, Response, NextFunction } from 'express';
import User from "../models/user";
import bcrypt from "bcryptjs";

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

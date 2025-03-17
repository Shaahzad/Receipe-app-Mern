import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
    userId: string
}

export interface AuthRequest extends Request {
    userId? : string
}


export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', "");

    if (!token) {
        res.status(401).json({
            success: false,
            message: 'No valid token is provided. Authorization denied',
        });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Token is not a valid token, please try again",
        });
    }
};

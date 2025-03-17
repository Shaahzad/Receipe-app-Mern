import { NextFunction, Response } from "express";
import Receipe from "../models/Receipe";
import { AuthRequest } from "../middleware/Authmiddleware";


export const CreateReceipe = async(req: AuthRequest, res:Response, next: NextFunction)=>{
    try {
        const {title, description, difficulty} = req.body;

    const newReceipe = new Receipe({
        title,
        description,
        difficulty,
        createdBy: req.userId
    });

    await newReceipe.save();

    res.status(201).json({
        success: true,
        message: "Receipe created successfully",
        data: newReceipe
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "something went wrong"})
    }

}

export const getReceipe = async(req: AuthRequest, res:Response, next: NextFunction)=>{
try {
    const fetchAllReceipes = await Receipe.find({});

    res.status(200).json({
        success: true,
        data: fetchAllReceipes
    })
} catch (error) {
    console.log(error)
    res.status(500).json({success: false, message: "something went wrong"})
}
}
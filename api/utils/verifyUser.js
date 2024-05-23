import { errorHandler } from "./error.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token) return next(errorHandler(404,'Unotharized'))

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=> {
        if(err) return next(errorHandler(403, 'Forbidden'));

        req.user= user; // here user is nothing but id of user
        next();
    })
}
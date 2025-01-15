import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ 
            success: false,
            message: "Authorization token invalid or expired",
            error: "Unauthorized"
        });
        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        const secretKey = process.env.JWT_SECRET as string;
        const decoded = jwt.verify(token, secretKey) as JwtPayload;
        req.body.userId = decoded.userId;
    
        next();
    } catch (error) {
        res.status(401).json({ 
            success: false,
            message: "Authorization token invalid or expired",
            error: "Unauthorized"
        });
    }
}

export default authenticate;
import { Request, Response } from "express";
import { TLogin, TRegister } from "../types";
import { loginSchema, registerSchema } from "../utils/validationSchema";
import bcrypt from "bcrypt";
import { db1 } from "../prisma";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler";
import { getWIB } from "../utils/helpers";

const authController = {
    register: async (req: Request, res: Response) => {
        try {
            await registerSchema.validate(req.body);
            
            const { name, email, password }: TRegister = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const userExist = await db1.user.findUnique({ where: { email }});
            if (userExist) {
                res.status(409).json({
                    success: false,
                    message: "User register failed.",
                    error: "User already exists."
                });
                return;
            }
            const user = await db1.user.create({
                data: { 
                    name, 
                    email, 
                    password: hashedPassword, 
                    createdAt: getWIB(),
                    updatedAt: getWIB()
                }
            }); 
            const { password: _, ...userWithoutPassword } = user;

            res.status(200).json({
                success: true,
                message: "User register successfully.",
                data: userWithoutPassword
            });
        } catch (error) {
            errorHandler(error, res);
        }
    },
    
    login: async (req: Request, res: Response) => {
        try {
            await loginSchema.validate(req.body);

            const { email, password }: TLogin = req.body;
            const user = await db1.user.findUnique({ where: { email }});
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: "Login failed.",
                    error: "User or password is wrong."
                });
                return;
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                res.status(404).json({
                    success: false,
                    message: "Login failed.",
                    error: "User or password is wrong."
                });
                return;
            }
            
            const token = jwt.sign(
                { userId: user.id},
                process.env.JWT_SECRET as string,
                { expiresIn: "1h" }
            );

            res.status(200).json({
                success: true,
                message: "Login successfully.",
                data: { token }
            });
        } catch (error) {
            errorHandler(error, res);
        }
    },
}

export default authController;
import { Request, Response } from "express";
import { productPayloadSchema } from "../utils/validationSchema";
import errorHandler from "../utils/errorHandler";
import { db2 } from "../prisma";
import { TProductPayload } from "../types";
import { getWIB } from "../utils/helpers";

const productController = {
    create: async (req: Request, res: Response) => {
        try {
            await productPayloadSchema.validate(req.body);
            const { name, description, price }: TProductPayload = req.body;
            const userId = req.body.userId;
            
            const product = await db2.product.create({
                data: { 
                    name, 
                    description, 
                    price, 
                    createdBy: userId, 
                    createdAt: getWIB(), 
                    updatedBy: userId, 
                    updatedAt: getWIB(),
                },
            });

            res.status(200).json({
                success: true,
                message: "Product created successfully",
                data: product
            });
        } catch (error) {
            errorHandler(error, res);          
        }
    },
    getAll: async (_req: Request, res: Response) => {
        try {
            const products = await db2.product.findMany({
                select: {
                    id: true,
                    name: true,
                    description: true,
                    price: true
                }
            });

            res.status(200).json({
                success: true,
                message: "Products fetched successfully",
                data: products
            });
        } catch (error) {
            errorHandler(error, res);
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const product = await db2.product.findUnique({
                select: {
                    id: true,
                    name: true,
                    description: true,
                    price: true
                },
                where: { id },
            });

            if (!product) {
                res.status(404).json({
                    success: false,
                    message: "Product not found",
                    error: "Not Found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Product fetched successfully",
                data: product
            });
        } catch (error) {
            errorHandler(error, res);
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const { name, description, price }: TProductPayload = req.body;
            const userId = req.body.userId;
            
            const product = await db2.product.update({
                where: { id },
                data: { 
                    name,
                    description, 
                    price, 
                    updatedBy: userId,
                    updatedAt: getWIB(),
                },
                select: {
                    id: true,
                    name: true,
                    description: true,
                    price: true,
                }
            });

            res.status(200).json({
                success: true,
                message: "Product updated successfully",
                data: product
            });
        } catch (error) {
            errorHandler(error, res);
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            await db2.product.delete({
                where: { id }
            });

            res.status(200).json({
                success: true,
                message: "Product deleted successfully"
            });
        } catch (error) {
            errorHandler(error, res);
        }
    }
}

export default productController;
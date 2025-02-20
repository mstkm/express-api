import { Request, Response } from "express";
import { productPayloadSchema } from "../utils/validationSchema";
import { errorHandler } from "../utils/errorHandler";
import { db2 } from "../prisma";
import { TProductPayload } from "../types";
import { deleteFile, getWIB } from "../utils/helpers";
import { getAuthUser } from "../service/auth";
import puppeteer from "puppeteer";
import ejs from "ejs";
import ExcelJS from "exceljs";
import path from "path";
import fs from "fs";

const productController = {
    create: async (req: Request, res: Response) => {
        try {
            const user = await getAuthUser(req.headers.authorization as string);

            await productPayloadSchema.validate(req.body);
            const { name, description, price }: TProductPayload = req.body;
         
            const product = await db2.product.create({
                data: { 
                    name, 
                    description, 
                    price: Number(price), 
                    createdBy: Number(user.id), 
                    createdAt: getWIB(), 
                    updatedBy: Number(user.id), 
                    updatedAt: getWIB(),
                },
            });

            const filesData = req.files as Express.Multer.File[];
            const savedFiles = await Promise.all(
                filesData.map(async (file) => {
                    return db2.productPicture.create({
                        data: {
                            productId: product.id,
                            fileName: file.filename,
                            createdBy: Number(user.id),
                            createdAt: getWIB(),
                            updatedBy: Number(user.id),
                            updatedAt: getWIB(),
                        },
                    })
                })
            );

            const result = { ...product, files: savedFiles };

            res.status(200).json({
                success: true,
                message: "Product created successfully",
                data: result
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
            const files = await db2.productPicture.findMany({
                where: { productId: id },
            });

            await db2.product.delete({
                where: { id }
            });

            files.forEach(async (file) => {
                const filePath = `src/uploads/${file.fileName}`;
                await deleteFile(filePath);
            });

            res.status(200).json({
                success: true,
                message: "Product deleted successfully"
            });
        } catch (error) {
            errorHandler(error, res);
        }
    },
    exportPdf: async (_req: Request, res: Response) => {
        try {
            const data = {
                title: 'Product List',
                products: [
                    { name: 'Product 1', price: '$10' },
                    { name: 'Product 2', price: '$20' },
                    { name: 'Product 3', price: '$30' }
                ]
            };

            const htmlFilePath = "src/views/template.ejs";
            const htmlContent = await ejs.renderFile(htmlFilePath, data);

            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            await page.setContent(htmlContent);

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline');

            const pdfBuffer = await page.pdf();

            res.end(pdfBuffer);

            await browser.close();
        } catch (error) {
            errorHandler(error, res);
        }
    },
    importExcel: async (req: Request, res: Response) => {
        try {
            if (!req.file) {
                res.status(400).json({ 
                    success: false,
                    message: "No file uploaded",
                });
                return;
            }

            const user = await getAuthUser(req.headers.authorization as string);
            const file = req.file as Express.Multer.File;
            const filePath = path.join(__dirname, "../uploads/import-product", file.filename);
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.readFile(filePath);

            const worksheet = workbook.getWorksheet(1);
            const data: any[] = [];
            worksheet?.eachRow(async (row, rowNumber) => {
                if (rowNumber > 1) {
                    const rowData = {
                        name: row.getCell(1).value,
                        description: row.getCell(2).value,
                        price: row.getCell(3).value,
                    };
                    data.push(rowData);
                }
            });

            if (data.length === 0) {
                res.status(400).json({ 
                    success: false,
                    message: "No data found in excel file",
                });
                return;
            }

            data.forEach(async (item) => {
                await db2.product.create({
                    data: {
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        createdBy: user.id!,
                        createdAt: getWIB(),
                        updatedBy: user.id!,
                        updatedAt: getWIB(),
                    }
                });
            });

            fs.unlinkSync(filePath);

            res.status(200).json({
                success: true,
                message: "Excel imported successfully",
                data: data
            });
        } catch (error) {
            errorHandler(error, res);
        }
    }
}

export default productController;
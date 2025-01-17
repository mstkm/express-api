import express from "express";
import authController from "../controllers/authController";
import productController from "../controllers/productController";
import authenticate from "../middlewares/authenticate";
import { imageUploader } from "../utils/multerConfiguration";
import downloadController from "../controllers/downloadController";

const router = express.Router();

// Authentication routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Product routes
router.post("/products", authenticate, imageUploader.array("files"), productController.create);
router.get("/products", authenticate, productController.getAll);
router.get("/products/:id", authenticate, productController.getById);
router.put("/products/:id", authenticate, productController.update);
router.delete("/products/:id", authenticate, productController.delete);
router.get("/export-pdf-product", productController.exportPdf);

// Download route
router.get("/download-template", downloadController.downloadTemplate);





export default router;
import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";

const downloadController = {
    downloadTemplate: (_req: Request, res: Response) => {
        try {
            const file = "src/files/Template.xlsx";
            res.download(file);
        } catch (error) {
            errorHandler(error, res);
        }
    }
}

export default downloadController;
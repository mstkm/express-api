import * as Yup from "yup";
import { Response } from "express";

const errorHandler = (error: any, res: Response) => {
    console.log(error);
    const e = error as Error;
    if (error instanceof Yup.ValidationError) {
        res.status(500).json({
            success: false,
            message: "Validation error",
            error: error.errors
        });
    } else {
        res.status(500).json({
            success: false,
            message: "Sorry! An error has occured.",
            error: e.message,
        });
    }
}

export default errorHandler;
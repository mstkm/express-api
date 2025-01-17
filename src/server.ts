import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/api";
import path from "path";
import authenticate from "./middlewares/authenticate";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', authenticate, express.static(path.join(__dirname, '/uploads')));

import { Request, Response, NextFunction } from "express";

// Handle error middleware
const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        res.status(err.status || 500).json({
            success: false,
            message: err.message || 'Internal Server Error',
            error: err
        });
    } else {
        next();
    }
};

app.use("/api", router);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;
const portTest = process.env.PORT_TEST;

let server: any;
if (process.env.NODE_ENV === "test") {
    server = app.listen(portTest, () => {
        console.log(`Testing is running on port ${portTest}`);
    });
} else {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

export { server };
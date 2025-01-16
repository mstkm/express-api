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

app.use("/api", router);

// console.log(`${__dirname}/uploads/1736999546978-comp-1.jpeg`);

const port = process.env.PORT;
const portTest = process.env.PORT_TEST;
if (process.env.NODE_ENV === "test") {
    app.listen(portTest, () => {
        console.log(`Testing is running on port ${portTest}`);
    });
} else {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

export default app;
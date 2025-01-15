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

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
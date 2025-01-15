import jwt from "jsonwebtoken";
import { db1 } from "../prisma";

export const getAuthUser = async (authHeader: string) => {
    const token = authHeader.split(' ')[1];
    const secretKey = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secretKey);
    const { userId } = decoded as { userId: string };
    const user = await db1.user.findUnique({  where: { id: Number(userId) } });

    return {
        id: user?.id,
        name: user?.name,
        email: user?.email,
    };
}
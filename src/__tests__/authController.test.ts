import request from "supertest";
import app from "../server";
import { db1 } from "../prisma";

const user = {
    name: "User Test",
    email: "usertest@gmail.com",
    password: "123456",
    confirmPassword: "123456"
};

describe("authController - Register", () => {
    it("should register a new user successfully", async () => {
        const response = await request(app)
                            .post("/api/register")
                            .send(user);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("message");
        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveProperty("id");
        expect(response.body.data).toHaveProperty("name");
        expect(response.body.data).toHaveProperty("email");
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("User register successfully.");
        expect(response.body.data.name).toBe(user.name);
        expect(response.body.data.email).toBe(user.email);
    });
});

describe("authController - Login", () => {
    it("should login successfully", async () => {
        const response = await request(app)
                            .post("/api/login")
                            .send({
                                email: user.email,
                                password: user.password
                            });
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("message");
        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveProperty("token");
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Login successfully.");
    });

    afterAll(async () => {
        await db1.user.delete({ where: { email: user.email } });
    });
});
import request from "supertest";
import { server } from "../server";
import { db1 } from "../prisma";

const user = {
    name: "User Test",
    email: "usertest@gmail.com",
    password: "123456",
    confirmPassword: "123456"
};



describe("authController - Register", () => {
    let response: request.Response;

    beforeAll(async () => { 
        response = await request(server)
                    .post("/api/register")
                    .send(user);

    });

    it("should return response status code 200", async () => {
        expect(response.status).toBe(200);
    });

    it("should return response body to have success, message and data properties", async () => {
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("message");
        expect(response.body).toHaveProperty("data");
    });

    it ("should return response body to have data property with id, name and email properties", async () => {
        expect(response.body.data).toHaveProperty("id");
        expect(response.body.data).toHaveProperty("name");
        expect(response.body.data).toHaveProperty("email");
    });

    afterAll(async () => {
        await db1.user.delete({ where: { email: user.email } });
    });
});

describe("authController - Login", () => {
    let response: request.Response;

    beforeAll(async () => { 
        await request(server)
                    .post("/api/register")
                    .send(user);
        
        response = await request(server)
                    .post("/api/login")
                    .send({
                        email: user.email,
                        password: user.password
                    });

    });
    
    it("should return response status code 200", async () => {
        expect(response.status).toBe(200);
    });

    it("should return response body to have success, message and data properties", async () => {    
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("message");
        expect(response.body).toHaveProperty("data");
    });

    afterAll(async () => {
        await db1.user.delete({ where: { email: user.email } });
        server.close();
    });
});
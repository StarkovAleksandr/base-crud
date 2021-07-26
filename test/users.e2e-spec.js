const request = require("supertest");

const app = require("../src/app");
const mappedUser = require("../src/modules/users/utils");

describe("Users e2e", () => {
  let id;

  const createdUser = mappedUser({
    name: "Elon",
    username: "Elon_Musk",
    email: "@gmail.com",
    address: "1 Rocket Rd, Hawthorne, CA 90250",
  });

  const updatedUser = mappedUser({
    name: "Alex",
    username: "Elon_Musk",
    email: "@gmail.com",
    address: "1 Rocket Rd, Hawthorne, CA 90250",
  });

  it("POST /users", async () => {
    const res = await request(app).post("/users").send(createdUser);

    id = res.body.id;

    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(createdUser.name);
    expect(res.body.username).toEqual(createdUser.username);
  });

  it("GET /users", async () => {
    const res = await request(app).get("/users").send();

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
  });

  it("GET /users/:id", async () => {
    const res = await request(app).get(`/users/${id}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(createdUser.name);
    expect(res.body.username).toEqual(createdUser.username);
  });

  it("PUT /users/:id", async () => {
    const res = await request(app).put(`/users/${id}`).send(updatedUser);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(updatedUser.name);
  });

  it("DELETE /users/:id", async () => {
    const res = await request(app).delete(`/users/${id}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(true);
  });
});

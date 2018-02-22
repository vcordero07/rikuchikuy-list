"use strict";
global.DATABASE_URL = "mongodb://localhost/rikuchikuy-list-demo-test";
const chai = require("chai");
const chaiHttp = require("chai-http");

const { app, runServer, closeServer } = require("../server");
const { User } = require("../lists/list.index");

const expect = chai.expect;

chai.use(chaiHttp);

describe("/api/lists/", function() {
  const title = "exTitle1";
  const items = "5a8dd021d31ebb0c9a792bd3";
  const titleB = "exTitle2";
  const itemsB = "5a8dd021s31bb0c9a7932a13";

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  beforeEach(function() {});

  afterEach(function() {
    return User.remove({});
  });

  describe("/api/lists", function() {
    describe("POST", function() {
      it("Should reject list with missing title", function() {
        return chai
          .request(app)
          .post("/api/lists/add/")
          .send({
            items
          })
          .then(() => expect.fail(null, null, "Request should not succeed"))
          .catch(err => {
            if (err instanceof chai.AssertionError) {
              throw err;
            }

            const res = err.response;
            expect(res).to.have.status(401);
          });
      });
      //   it("Should reject users with missing password", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username,
      //         email
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal("Missing field");
      //         expect(res.body.location).to.equal("password");
      //       });
      //   });
      //   it("Should reject users with non-string username", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username: 1234,
      //         password,
      //         email
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal(
      //           "Incorrect field type: expected string"
      //         );
      //         expect(res.body.location).to.equal("username");
      //       });
      //   });
      //   it("Should reject users with non-string password", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username,
      //         password: 1234,
      //         email
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal(
      //           "Incorrect field type: expected string"
      //         );
      //         expect(res.body.location).to.equal("password");
      //       });
      //   });
      //
      //   it("Should reject users with non-string email", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username,
      //         password,
      //         email: 1234
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal(
      //           "Incorrect field type: expected string"
      //         );
      //         expect(res.body.location).to.equal("email");
      //       });
      //   });
      //   it("Should reject users with non-trimmed username", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username: ` ${username} `,
      //         password,
      //         email
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal(
      //           "Cannot start or end with whitespace"
      //         );
      //         expect(res.body.location).to.equal("username");
      //       });
      //   });
      //   it("Should reject users with non-trimmed password", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username,
      //         password: ` ${password} `,
      //         email
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal(
      //           "Cannot start or end with whitespace"
      //         );
      //         expect(res.body.location).to.equal("password");
      //       });
      //   });
      //   it("Should reject users with empty username", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username: "",
      //         password,
      //         email
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal(
      //           "Must be at least 1 characters long"
      //         );
      //         expect(res.body.location).to.equal("username");
      //       });
      //   });
      //   it("Should reject users with password less than ten characters", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username,
      //         password: "123456789",
      //         email
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal(
      //           "Must be at least 10 characters long"
      //         );
      //         expect(res.body.location).to.equal("password");
      //       });
      //   });
      //   it("Should reject users with password greater than 72 characters", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username,
      //         password: new Array(73).fill("a").join(""),
      //         email
      //       })
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal(
      //           "Must be at most 72 characters long"
      //         );
      //         expect(res.body.location).to.equal("password");
      //       });
      //   });
      //   it("Should reject users with duplicate username", function() {
      //     // Create an initial user
      //     return User.create({
      //       username,
      //       password,
      //       email
      //     })
      //       .then(() =>
      //         chai
      //           .request(app)
      //           .post("/api/users")
      //           .send({
      //             username,
      //             password,
      //             email
      //           })
      //       )
      //       .then(() => expect.fail(null, null, "Request should not succeed"))
      //       .catch(err => {
      //         if (err instanceof chai.AssertionError) {
      //           throw err;
      //         }
      //
      //         const res = err.response;
      //         expect(res).to.have.status(422);
      //         expect(res.body.reason).to.equal("ValidationError");
      //         expect(res.body.message).to.equal("Username already taken");
      //         expect(res.body.location).to.equal("username");
      //       });
      //   });
      //   it("Should create a new user", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username,
      //         password,
      //         email
      //       })
      //       .then(res => {
      //         expect(res).to.have.status(201);
      //         expect(res.body).to.be.an("object");
      //         expect(res.body).to.have.keys("username", "email", "id");
      //         expect(res.body.username).to.equal(username);
      //         expect(res.body.email).to.equal(email);
      //         return User.findOne({
      //           username
      //         });
      //       })
      //       .then(user => {
      //         expect(user).to.not.be.null;
      //         expect(user.email).to.equal(email);
      //         return user.validatePassword(password);
      //       })
      //       .then(passwordIsCorrect => {
      //         expect(passwordIsCorrect).to.be.true;
      //       });
      //   });
      //   it("Should trim email", function() {
      //     return chai
      //       .request(app)
      //       .post("/api/users")
      //       .send({
      //         username,
      //         password,
      //         email: ` ${email} `
      //       })
      //       .then(res => {
      //         expect(res).to.have.status(201);
      //         expect(res.body).to.be.an("object");
      //         expect(res.body).to.have.keys("username", "email", "id");
      //         expect(res.body.username).to.equal(username);
      //         expect(res.body.email).to.equal(email);
      //         return User.findOne({
      //           username
      //         });
      //       })
      //       .then(user => {
      //         expect(user).to.not.be.null;
      //         expect(user.email).to.equal(email);
      //       });
      //   });
      // });

      // describe("GET", function() {
      //   it("Should return an empty array initially", function() {
      //     return chai
      //       .request(app)
      //       .get("/api/users")
      //       .then(res => {
      //         expect(res).to.have.status(200);
      //         expect(res.body).to.be.an("array");
      //         expect(res.body).to.have.length(0);
      //       });
      //   });
      //   it("Should return an array of users", function() {
      //     return User.create(
      //       {
      //         username,
      //         password,
      //         email
      //       },
      //       {
      //         username: usernameB,
      //         password: passwordB,
      //         email: emailB
      //       }
      //     )
      //       .then(() => chai.request(app).get("/api/users"))
      //       .then(res => {
      //         expect(res).to.have.status(200);
      //         expect(res.body).to.be.an("array");
      //         expect(res.body).to.have.length(2);
      //         expect(res.body[0]).to.deep.equal({
      //           id: res.body[0].id,
      //           username,
      //           email
      //         });
      //         expect(res.body[1]).to.deep.equal({
      //           id: res.body[1].id,
      //           username: usernameB,
      //           email: emailB
      //         });
      //       });
      //   });
    });
  });
});

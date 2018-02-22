"use strict";
const { User } = require("./user.model");
const { List } = require("../lists/list.model");
const { Item } = require("../items/item.model");

exports.getAllUsers = (req, res) => {
  return User.find()
    .populate({ path: "_list" })
    .exec()
    .then(users => res.json(users.map(user => user.serialize())))
    .catch(err => res.status(500).json({ message: "Internal server error" }));
};

exports.getSingleUser = (req, res) => {
  User.findById(req.params.id)
    .populate({ path: "_list" })
    .exec()
    .then(user => res.json(user.serialize()))
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getSingleUser" })
    );
};

exports.updateUser = (req, res) => {
  console.log(typeof req.body.username === "undefined");
  User.findByIdAndUpdate(req.params.id, {
    username: req.body.username,
    email: req.body.email
  })
    .then(u => res.status(202).json(u.serialize()))
    .catch(err => {
      console.log("err:", err);
      res.status(500).json({ meesage: "Internal server error: updateUser" });
    });
};

exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log(`deleted user from db`);
      res.status(204).end();
    })
    .catch(err =>
      res.status(500).json({ meesage: "Internal server error: deleteUser" })
    );
};

exports.newUser = (req, res) => {
  const requiredFields = ["username", "password"];
  const missingField = requiredFields.find(field => !(field in req.body));

  if (missingField) {
    return res.status(422).json({
      code: 422,
      reason: "ValidationError",
      message: "Missing field",
      location: missingField
    });
  }

  const stringFields = ["username", "password", "email"];
  const nonStringField = stringFields.find(
    field => field in req.body && typeof req.body[field] !== "string"
  );

  if (nonStringField) {
    return res.status(422).json({
      code: 422,
      reason: "ValidationError",
      message: "Incorrect field type: expected string",
      location: nonStringField
    });
  }

  const explicityTrimmedFields = ["username", "password"];
  const nonTrimmedField = explicityTrimmedFields.find(
    field => req.body[field].trim() !== req.body[field]
  );

  if (nonTrimmedField) {
    return res.status(422).json({
      code: 422,
      reason: "ValidationError",
      message: "Cannot start or end with whitespace",
      location: nonTrimmedField
    });
  }

  const sizedFields = {
    username: {
      min: 1
    },
    password: {
      min: 10,
      max: 72
    }
  };

  const tooSmallField = Object.keys(sizedFields).find(
    field =>
      "min" in sizedFields[field] &&
      req.body[field].trim().length < sizedFields[field].min
  );

  const tooLargeField = Object.keys(sizedFields).find(
    field =>
      "max" in sizedFields[field] &&
      req.body[field].trim().length > sizedFields[field].max
  );

  if (tooSmallField || tooLargeField) {
    return res.status(422).json({
      code: 422,
      reason: "ValidationError",
      message: tooSmallField
        ? `Must be at least ${sizedFields[tooSmallField].min} characters long`
        : `Must be at most ${sizedFields[tooLargeField].max} characters long`,
      location: tooSmallField || tooLargeField
    });
  }

  let { username, password, email = "" } = req.body;

  email = email.trim();

  return User.find({ username })
    .count()
    .then(count => {
      if (count > 0) {
        return Promise.reject({
          code: 422,
          reason: "ValidationError",
          message: "Username already taken",
          location: "username"
        });
      }

      return User.hashPassword(password);
    })
    .then(hash => {
      return User.create({
        username,
        password: hash,
        email
      });
    })
    .then(user => {
      return res.status(201).json(user.serialize());
    })
    .catch(err => {
      if (err.reason === "ValidationError") {
        return res.status(err.code).json(err);
      }
      res.status(500).json({ code: 500, message: "Internal server error" });
    });
};

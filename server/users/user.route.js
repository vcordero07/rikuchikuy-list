"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./user.controller");
const router = express.Router();
const jsonParser = bodyParser.json();

router.post("/", jsonParser, userController.newUser);
router.get("/", userController.getAllUsers);
//router.get("/:id", userController.getSingleUser);
//router.put("/:id", jsonParser, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = { router };

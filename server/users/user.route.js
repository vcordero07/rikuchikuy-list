"use strict";
const express = require("express");
const userController = require("./user.controller");
const router = express.Router();

router.post("/", userController.newUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getSingleUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = { router };

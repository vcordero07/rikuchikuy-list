"use strict";
const express = require("express");
const mongoose = require("mongoose");

const listController = require("./list.controller");
const { jwtAuth } = require("../auth/auth.route");
const router = express.Router();

mongoose.Promise = global.Promise;

router.get("/", jwtAuth, listController.getAllList);
router.get("/me", jwtAuth, listController.getUserlist);
router.get("/:listId", jwtAuth, listController.getSingleList);
router.post("/add/", jwtAuth, listController.newList);
router.put("/:listId", jwtAuth, listController.updateList);
router.delete("/:listId", jwtAuth, listController.deleteList);

module.exports = { router };

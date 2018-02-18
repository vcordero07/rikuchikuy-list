"use strict";
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const listController = require("./list.controller");
const router = express.Router();
const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

router.get("/", listController.getAllList);
router.get("/:listId", listController.getSingleList);
router.post("/add/", jsonParser, listController.newList);
router.put("/:listId", jsonParser, listController.updateList);
router.delete("/:listId", listController.deleteList);

module.exports = { router };

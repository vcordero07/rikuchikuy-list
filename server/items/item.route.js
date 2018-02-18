"use strict";
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const itemController = require("./item.controller");
const router = express.Router();
const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

router.get("/:listId/items", itemController.getAllItems);
router.get("/:listId/items/:id", itemController.getSingleItem);
router.post("/:listId/", jsonParser, itemController.newItem);
router.put("/:listId/items/:id", jsonParser, itemController.updateItem);
router.delete("/:listId/items/:id", itemController.deleteItem);

module.exports = { router };

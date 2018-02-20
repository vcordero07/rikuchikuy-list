"use strict";
const express = require("express");
const mongoose = require("mongoose");

const itemController = require("./item.controller");
const router = express.Router();

mongoose.Promise = global.Promise;

router.get("/:listId/items", itemController.getAllItems);
router.get("/:listId/items/:id", itemController.getSingleItem);
router.post("/:listId/", itemController.newItem);
router.put("/:listId/items/:id", itemController.updateItem);
router.delete("/:listId/items/:id", itemController.deleteItem);

module.exports = { router };

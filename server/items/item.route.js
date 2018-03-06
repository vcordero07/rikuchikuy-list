"use strict";
const express = require("express");
const mongoose = require("mongoose");
const itemController = require("./item.controller");
const { jwtAuth } = require("../auth/auth.route");
const router = express.Router();

// router.get("/:listId/items", jwtAuth, itemController.getAllItems);
router.get("/:listId/items", jwtAuth, itemController.getAllItems2);
router.get("/:listId/items/:id", jwtAuth, itemController.getSingleItem);
router.post("/:listId/", jwtAuth, itemController.newItem);
router.put("/:listId/items/:id", jwtAuth, itemController.updateItem);
router.delete("/:listId/items/:id", jwtAuth, itemController.deleteItem);

module.exports = { router };

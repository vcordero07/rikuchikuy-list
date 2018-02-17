"use strict";
const express = require("express");
const itemController = require("./item.controller");
const router = express.Router();

router.get("/api/list/:listId/items", itemController.getAllItems);
router.get("/api/list/:listId/items/:id", itemController.getSingleItem);
router.post("/api/list/:listId/", itemController.newItem);
router.put("/api/list/:listId/items/:id", itemController.updateItem);
router.delete("/api/list/:listId/items/:id", itemController.deleteItem);

module.exports = { router };

"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const listController = require("./list.controller");
const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/api/list", listController.getList);
router.get("/api/list/:id", listController.getSingleItem);
router.post("/api/list", listController.newItem);
router.put("/api/list/:id", listController.updateItem);
router.delete("/api/list/:id", listController.deleteItem);

module.exports = { router };

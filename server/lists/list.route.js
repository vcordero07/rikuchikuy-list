"use strict";
const express = require("express");
const listController = require("./list.controller");
const router = express.Router();

router.get("/api/list/", listController.getAllList);
router.get("/api/list/:listId", listController.getSingleList);
router.post("/api/list/", listController.newList);
router.put("api/list/:listId", listController.updateList);
router.delete("api/list/:listId", listController.deleteList);

module.exports = { router };

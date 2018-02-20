"use strict";
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const router = express.Router();
const authController = require("./auth.controller");

const localAuth = passport.authenticate("local", { session: false });
const jwtAuth = passport.authenticate("jwt", { session: false });

router.use(bodyParser.json());

router.post("/login", localAuth, authController.login);
router.post("/refresh", jwtAuth, authController.refresh);

module.exports = { router, localAuth, jwtAuth };

"use strict";
const { router } = require("./auth.route");
const { localStrategy, jwtStrategy } = require("./strategies");

module.exports = { router, localStrategy, jwtStrategy };

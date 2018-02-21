"use strict";
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { List } = require("../lists/list.model");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    requried: true
    // unique: true //ask emanuel about updating user with unique field.
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: ""
  },
  _lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lists"
    }
  ]
});

UserSchema.pre("remove", function(next) {
  List.find({
    _id: { $in: this._list }
  }).then(lists => {
    lists.forEach(ele => {
      ele.remove();
    });
  });
});

UserSchema.methods.serialize = function() {
  return {
    id: this._id,
    username: this.username || "",
    email: this.email || ""
  };
};

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};

const User = mongoose.model("User", UserSchema);

module.exports = { User };

"use strict";
const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: { type: String, default: "" },
  price: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  note: { type: String, default: "" }
  // ,
  // _user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User"
  // }
});

listSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    link: this.link,
    price: this.price,
    completed: this.completed,
    note: this.note
  };
};

const List = mongoose.model("List", listSchema);

module.exports = { List };

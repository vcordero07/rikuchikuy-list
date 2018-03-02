"use strict";
const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  _items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item"
    }
  ],
  created: {
    type: Date,
    required: true,
    default: Date.now
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

listSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    created: this.created
  };
};

const List = mongoose.model("List", listSchema);

module.exports = { List };

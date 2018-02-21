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
      ref: "Items"
    }
  ],
  created: {
    type: Date,
    required: true,
    default: Date.now
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

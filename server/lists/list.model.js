"use strict";
const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item"
    }
  ],
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  }
});

listSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    dateCreated: this.dateCreated
  };
};

const List = mongoose.model("List", listSchema);

module.exports = { List };

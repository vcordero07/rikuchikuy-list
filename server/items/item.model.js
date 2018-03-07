"use strict";
const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: { type: String, default: "" },
  price: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  bgcolor: { type: String, default: "#fff" },
  note: { type: String, default: "" },
  _list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List"
  },
  created: { type: Date, required: true, default: Date.now }
});

itemSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    link: this.link,
    price: this.price,
    completed: this.completed,
    note: this.note,
    _list: this._list,
    created: this.created
  };
};

const Item = mongoose.model("Item", itemSchema);

module.exports = { Item };

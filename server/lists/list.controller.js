"use strict";
const { List } = require("./list.model");
const { User } = require("../users/user.model");

exports.getAllList = (req, res) => {
  console.log("this is the user", req.user);
  return List.find()
    .then(lists => res.json(lists.map(list => list.serialize())))
    .catch(err => {
      console.log("err:", err);
      res.status(500).json({ message: "Internal server error: getAllList" });
    });
};

exports.getSingleList = (req, res) => {
  console.log("req.params:", req.params.listId);
  List.findById(req.params.listId)
    .then(item => res.json(item.serialize()))
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getSingleList" })
    );
};

exports.newList = (req, res) => {
  console.log("title: ", req.body.title);
  if (!req.body.title) {
    return res
      .status(400)
      .json({ error: "Missing title list in requrest body: newList" });
  }
  List.create({
    title: req.body.title
  })
    .then(data => {
      return User.findByIdAndUpdate(req.user.id, {
        $push: { _list: data._id }
      }).then(() => data);
    })
    .then(item => {
      return res.status(201).json(item.serialize());
    })
    .catch(err =>
      res.status(500).json({ message: "Internal server error: newList" })
    );
};

exports.updateList = (req, res) => {
  console.log("req.body:", req.body);
  const upList = req.body.title;
  if (!upList) {
    return res
      .status(400)
      .json({ error: "Missing list title in request body: updateList" });
  }
  List.findByIdAndUpdate(req.params.listId, { title: upList })
    .then(list => res.status(202).json(list.serialize()))
    .catch(err =>
      res.status(500).json({ meesage: "Internal server error: updateList" })
    );
};

exports.deleteList = (req, res) => {
  List.findByIdAndRemove(req.params.listId)
    .then(() => {
      console.log("deleted list from db");
      res
        .status(200)
        .json({ message: `success delete list id: '${req.params.listId}'` });
    })
    .catch(err =>
      res.status(500).json({ message: "Internal server error: deleteList" })
    );
};

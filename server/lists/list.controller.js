"use strict";
const { List } = require("./list.model");
const { Item } = require("../items/item.model");
const { User } = require("../users/user.model");

exports.getAllList = (req, res) => {
  console.log("this is the user", req.user);
  return List.find()
    .populate("_items") //ask E "err: { MissingSchemaError: Schema hasn't been registered for model "Items"."
    .exec()
    .then(lists => res.json(lists.map(list => list.serialize())))
    .catch(err => {
      console.log("err:", err);
      res.status(500).json({ message: "Internal server error: getAllList" });
    });
};

exports.getUserlist = (req, res) => {
  return List.findOne({
    _user: req.user.id
  })
    .populate("_items") //ask E "err: { MissingSchemaError: Schema hasn't been registered for model "Items"."
    .exec()
    .then(item => res.json(item.serialize()))
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getUserList" })
    );
};

exports.getSingleList = (req, res) => {
  console.log("req.params:", req.params.listId);
  List.findById(req.params.listId)
    .populate("_items") //ask E "err: { MissingSchemaError: Schema hasn't been registered for model "Items"."
    .exec()
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
  List.create({ title: req.body.title, _user: req.user.id })
    .then(data => {
      return User.findByIdAndUpdate(req.user.id, {
        $push: { _lists: data._id }
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
      res.status(500).json({ message: "Internal server error: updateList" })
    );
};

// exports.deleteList = (req, res) => {
//   const listID = req.params.listId;
//   List.findById(listID)
//     .then(listInfo => {
//       let listItems = listInfo._items;
//       // console.log(listItems);
//       // if (listInfo._items[0] != null) {
//       listInfo._items.forEach(ele => {
//         // console.log(ele);
//         Item.findByIdAndRemove(ele);
//         // .then(success => console.log("successfully remove an ele"))
//         // .catch(err =>
//         //   console.log("err trying to findByIdAndRemove an ele", err)
//         // );
//       });
//     })
//     .then(() => {
//       return User.findOneAndUpdate(
//         { _id: req.user.id },
//         { $pull: { _lists: listID } },
//         { safe: true }
//       );
//     })
//     .then(() => {
//       return List.findByIdAndRemove(listID);
//     })
//     .then(() => {
//       console.log("success");
//       res.status(204).end();
//     })
//     .catch(err => console.error(err));
// };

exports.deleteList = async (req, res) => {
  try {
    const listID = req.params.listId;
    const list = await List.findById(listId);
    const promises = list._items.map(el => Item.findByIdAndRemove(el));
    await Promise.all(promises);
    await User.findOneAndUpdate(
      { _id: req.user.id },
      { $pull: { _lists: listID } },
      { safe: true }
    );
    await List.findByIdAndRemove(listID);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error);
  }
};

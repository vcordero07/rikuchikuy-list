"use strict";
const { Item } = require("./item.model");
const { List } = require("../lists/list.model");

exports.getAllItems2 = (req, res) => {
  // console.log("req.params: ", req.params);
  const listId = req.params.listId;
  // console.log("listId: ", listId);
  return Item.find({ _list: listId })
    .sort({ created: -1 })
    .populate("_list")
    .exec()
    .then(items => res.json(items.map(item => item.serialize())))
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getAllItems2" })
    );
};

exports.getAllItems = (req, res) => {
  return Item.find()
    .sort({ created: -1 })
    .then(items => res.json(items.map(item => item.serialize())))
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getAllItems" })
    );
};

exports.getSingleItem = (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (item) {
        res.json(item.serialize());
      }
    })
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getSingleItem" })
    );
};

// exports.deleteItem = async (req, res) => {
//   try {
//     const listID = req.params.listId;
//     const itemID = req.params.id;
//     const promises = await List.findOneAndUpdate(
//       { _id: listID },
//       { $pull: { _items: itemID } },
//       { safe: true }
//     );
//     await Promise.all(promises);
//     await Item.findByIdAndRemove(itemID);
//     res.sendStatus(201).json();
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

exports.deleteItem = (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(item => {
      console.log(`deleted item from db`);
      res.status(201).json(item.serialize());
    })
    .catch(err =>
      res.status(500).json({ message: "Internal server error: deleteItem" })
    );
};

exports.newItem = (req, res) => {
  console.log("req.body:", req.body);
  if (!req.body.title) {
    return res
      .status(400)
      .json({ error: "Missing item `title` in request body: newItem" });
  }

  Item.create({
    title: req.body.title,
    note: req.body.note,
    _list: req.params.listId
    // ,
    // link: req.body.link,
    // price: req.body.price,
    //
  })
    .then(data => {
      // console.log("data:", data);
      // console.log("req.params.listId:", req.params.listId);
      return List.findByIdAndUpdate(req.params.listId, {
        $push: { _items: data._id }
      }).then(() => data);
    })
    .then(item => {
      return res.status(201).json(item.serialize());
    })

    .catch(err =>
      res.status(500).json({ message: "Internal server error: newItem" })
    );
};

exports.updateItem = (req, res) => {
  const upItem = {};
  const updateableFields = ["title", "completed", "link", "price", "note"];
  console.log("updateItem req.body:", req.body);
  updateableFields.forEach(field => {
    if (field in req.body) {
      upItem[field] = req.body[field];
    }
  });

  if (!upItem.title) {
    return res
      .status(400)
      .json({ error: "Missing `title` in request body: updateItem" });
  }

  Item.findByIdAndUpdate(req.params.id, upItem, { new: true })
    .then(item => {
      if (item) {
        res.json(item.serialize());
      }
    })
    .catch(err =>
      res.status(500).json({ message: "Internal server error: updateItem" })
    );
};

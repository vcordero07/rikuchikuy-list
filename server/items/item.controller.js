const { Item } = require("./item.model");

exports.getAllItems = (req, res) => {
  return Item.find()
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

exports.deleteItem = (req, res) => {
  Item.findByIdAndRemove(req.params.id).then(() => {
    console.log(`deleted item from db`);
    res.status(204).end();
  });
};

exports.newItem = (req, res) => {
  if (!req.body.title) {
    return res
      .status(400)
      .json({ error: "Missing item `title` in request body: newItem" });
  }

  Item.create({
    title: req.body.title,
    link: req.body.link,
    price: req.body.price,
    note: req.body.note
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

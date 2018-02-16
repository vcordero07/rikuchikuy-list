const { List } = require("./list.model");

exports.getList = (req, res) => {
  return List.find()
    .then(item => res.json(todos.map(item => todo.serialize())))
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getList" })
    );
};

exports.getSingleItem = (req, res) => {
  List.findById(req.params.id)
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
  List.findByIdAndRemove(req.params.id).then(() => {
    console.log(`deleted item from db`);
    res.status(204).end();
  });
};

exports.newItem = (req, res) => {
  if (!req.body.title) {
    return res
      .status(400)
      .json({ error: "Missing `title` in request body: newItem" });
  }

  List.create({
    title: req.body.title,
    link: req.body.link,
    price: req.body.price,
    note: req.body.note
  })
    .then(item => {
      return res.status(201).json(item.serialize());
    })
    .catch(err => res.status(500).json({ message: "Internal server error: newItem" });
};

exports.updateItem = (req, res) => {
  const updateItem = {};
  const updateableFields = ["title", "completed", "link", "price", "note"];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updateItem[field] = req.body[field];
    }
  });

  if (!updateItem.title) {
    return res
      .status(400)
      .json({ error: "Missing `title` in request body: updateItem" });
  }

  List.findByIdAndUpdate(req.params.id, updateItem, { new: true })
    .then(item => {
      if (item) {
        res.json(item.serialize());
      }
    })
    .catch(err =>
      res.status(500).json({ message: "Internal server error: updateItem" })
    );
};

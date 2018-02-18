const { List } = require("/list.model");

exports.getAllList = (req, res) => {
  return List.find()
    .then(lists => res.json(lists.map(list => item.serialize())))
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getAllList" })
    );
};

exports.getSingleList = (req, res) => {
  List.findById(req.params.id)
    .then(item => res.json(item.serialize()))
    .catch(err =>
      res.status(500).json({ message: "Internal server error: getSingleList" })
    );
};

exports.newList = (req, res) => {
  if (!req.body.title) {
    return res
      .status(400)
      .json({ error: "Missing title list in requrest body: newList" });
  }
  List.create({
    title: req.body.title
  })
    .then(item => {
      return res.status(201).json(item.serialize());
    })
    .catch(err =>
      res.status(500).json({ message: "Internal server error: newList" })
    );
};

exports.updateList = (req, res) => {
  const upList = {};
  const updateableFields = ["title"];
  updateableFields.forEach(field => {
    if (field in req.body) {
      upList[field] = req.body[field];
    }
  });
  if (!upList.title) {
    return res
      .status(400)
      .json({ error: "Missing list title in request body: updateList" });
  }
  List.findByIdAndUpdate(req.params.id, upList, { new: true })
    .then(list => {
      if (list) {
        res.json(list.serialize());
      }
    })
    .catch(err =>
      res.status(500).json({ meesage: "Internal server error: updateList" })
    );
};

exports.deleteList = (req, res) => {
  List.findByIdAndRemove(req.params.id).then(() => {
    console.log("deleted list from db");
    res.status(204).end();
  });
};

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

exports.newList = (req, res) => {};

exports.updateList = (req, res) => {};

exports.deleteList = (req, res) => {
  List.findByIdAndRemove(req.params.id).then(() => {
    console.log("deleted list from db");
    res.status(204).end();
  });
};

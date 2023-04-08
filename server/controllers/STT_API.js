const ListItem = require("../model/listItem");

module.exports.addToList = (req, res) => {
  const { listItem } = req.body;
  if (!listItem) {
    return res.status(400).json({
      error: "No task to add!",
    });
  }

  const item = new ListItem(req.body);
  item.save((err, item) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      item: item,
      message: "Added successfully!",
    });
  });
};

module.exports.getList = (req, res) => {
  ListItem.find({}, (err, items) => {
    if (err) {
      res.status(400).json({
        error: "No any tasks!",
      });
    }
    res.status(200).json({
      items: items,
    });
  });
};

// delete API
module.exports.deleteItem = (req, res, next) => {
  if (!req.listItem) {
    res.status(400).json({
      error: "Provide ID to delete!",
    });
  }
  ListItem.findByIdAndDelete(req.listItem._id).exec((err, item) => {
    if (err) {
      res.status(400).json({
        error: "Invalid ID!",
      });
    }
    next();
  });
};

// get listItem by id
module.exports.getItemById = (req, res, next, id) => {
  ListItem.findById(id).exec((err, result) => {
    if (err || !result) {
      return res.status(400).json({
        error: "List item not found!",
      });
    }
    req.listItem = result;
    next();
  });
};

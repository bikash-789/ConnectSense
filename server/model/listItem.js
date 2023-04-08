const mongoose = require("mongoose");

// Create an item schema
const listItemSchema = new mongoose.Schema(
  {
    listItem: {
      type: String,
      trim: true,
      required: true,
      maxlength: 128,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ListItem", listItemSchema);

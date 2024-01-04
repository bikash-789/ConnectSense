const express = require("express");
const router = express.Router();

const {
  addToList,
  getList,
  deleteItem,
  getItemById,
} = require("../controllers/STT_API");

router.post("/api/addToList", addToList);
router.get("/api/getList", getList);
router.delete("/api/deleteItem/:listItemId", deleteItem, (req, res) => {
  res.json({
    Success: "Successfully deleted item!",
  });
});
router.param("listItemId", getItemById);
module.exports = router;

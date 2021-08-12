const express = require("express");
const router = express.Router();

const postsService = require("../services/tag.service");

// READ
router.get("/", async (req, res) => {
  const tags = await postsService.getTags();
  res.send(tags);
});

module.exports = router;

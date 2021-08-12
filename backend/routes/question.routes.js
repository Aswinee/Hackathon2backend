const express = require("express");
const router = express.Router();

const questionsService = require("../services/question.service");

// READ
router.get("/", async (req, res) => {
  const questions = await questionsService.getQuestions();
  res.send(questions);
});

// UPDATE
try {
  router.put("/:id", async (req, res) => {
    const questions = await questionsService.updateQuestions(
      req.params.id,
      req.body
    );
    res.send(questions);
  });
} catch (err) {
  console.log(err);
  process.exit();
}

module.exports = router;

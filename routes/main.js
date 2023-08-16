const express = require("express");
const router = express.Router();

router.get("/getStudentById/:id", (req, res) => {
  res.status(200).send({
    id: req.params.id,
    name: "Jack",
    age: 23,
    sex: 1,
  });
});

module.exports = router;

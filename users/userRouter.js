const express = require("express");

const router = express.Router();

router.post("/", validateUser, (req, res) => {
  // do your magic!
});

router.post("/:id/posts", validateUserId, validatePost, (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
});

router.get("/:id", validateUserId, (req, res) => {
  // do your magic!
});

router.get("/:id/posts", validateUserId, (req, res) => {
  // do your magic!
});

router.delete("/:id", validateUserId, (req, res) => {
  // do your magic!
});

router.put("/:id", validateUserId, (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  if (req.params.id) {
    req.user = req.body;
    next();
  } else {
    res.status(400).json({ message: "invalid user id" });
  }
}

function validateUser(req, res, next) {
  // do your magic!
  if (req.body) {
    req.body.name
      ? next()
      : res.status(400).json({ message: "missing required name field" });
  } else {
    res.status(400).json({ message: "missing user data" });
  }
}

function validatePost(req, res, next) {
  // do your magic!
  if (req.body) {
    req.body.text
      ? next()
      : res.status(400).json({ message: "missing required text field" });
  } else {
    res.status(400).json({ message: "invalid post data" });
  }
}

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const ipaddress = req.ip,
    userAgent = req.headers["user-agent"],
    lang = req.headers["accept-language"];

  res.status(200).json({
    ipaddress,
    language: lang,
    software: userAgent,
  });
});

module.exports = router;

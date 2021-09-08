const authController = require("../controller/registerController"),
      router         = require("express").Router();

router.post("/new", authController.postUser);

module.exports = router;
const router = require("express").Router();
const Auth = require("../Middleware/Auth");

const { createAccount, login } = require("../Controller/Create");

router.route("/createaccount").post(createAccount);
router.route("/login").post(login);

module.exports = router;

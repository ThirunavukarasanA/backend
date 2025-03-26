const router = require("express").Router();
const Auth = require("../Middleware/Auth");

const { createAccount, login } = require("../Controller/Create");
const { createLabour, getno } = require('../Controller/Labour');

router.route("/createaccount").post(createAccount);
router.route("/login").post(login);
router.route("/labour").post(createLabour);
router.route("/getLabourNo").get(getno);

module.exports = router;

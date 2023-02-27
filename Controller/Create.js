const newAccount = require("../Model/Create");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create Account
exports.createAccount = (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    newAccount
      .findOne({ email: email })
      .then(async (user) => {
        if (!user) {
          const saltRounds = 10;
          const hashpassword = await bcrypt.hash(password, saltRounds);
          newAccount.create({
            email: email,
            name: name,
            password: hashpassword,
          });
          res.send("Account Created Succesfully");
          console.log("Account Created Succesfully");
        } else {
          res.send("user Already Exit");
          console.log("user Already Exit");
        }
      })
      .catch((err) => console.log(err));
  } catch (error) {
    next(error);
  }
};

// Login
exports.login = (req, res) => {
  try {
    const { email, password } = req.body;
    newAccount.findOne({ email: email }).then(async (user) => {
      if (user) {
        let pass = await bcrypt.compare(password, user.password);
        if (pass) {
          const token = jwt.sign(user.name, process.env.SECRET);
          res.status(200).send({ msg: "Login Successfully", token: token });
          // console.log("Login Successfully");
        } else {
          res.status(404).send("Incorrect Password");
          // console.log("Incorrect Password");
        }
      } else {
        res.status(404).send("user not found");
        // console.log("user not found");
      }
    });
  } catch (error) {
    res.send(err);
  }
};

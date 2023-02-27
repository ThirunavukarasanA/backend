const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

// Connecting DB
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to the Database Successfully");
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

const express = require("express");
const connectDB = require("./db");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("./models/User");
const { use } = require("bcrypt/promises");
const app = express();
dotenv.config();

//middleware
app.use(express.json());
/**
 * Route create here
 */

// register API
app.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   return res.status(400).send("message is Invalide");
  // }
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    } else {
      user = new User({ user, email, password });

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      user.password = hash;

      await user.save();
      return res
        .status(201)
        .json({ message: "User created Successfully", user });
    }
  } catch (e) {
    next(e);
  }
});

// login API

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentails" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid Credentails" });
    }
    return res.status(200).json({ message: "login Successfully" });
  } catch (e) {
    next(e);
  }
});

/**
 * root API
 */
app.get("/", (_, res) => {
  const obj = {
    name: "tarikul",
    email: "tarikul@gmail.com",
  };
  //res.send(obj);
  //res.send(JSON.stringify(obj))
  res.json(obj);
});

// global error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Server Error Occurred" });
});

connectDB(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Database coonceted succesfully");
    app.listen(4000, () => {
      console.log("I am listening on 4000");
    });
  })
  .catch((err) => console.log(err));

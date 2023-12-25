import express from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

const app = express();
const port = 5000;

const UserSchema = new Schema({
  username: String,
  password: Number,
  role: String,
});

const User = mongoose.model("User", UserSchema);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const users = new User({ ...req.body });
    await req.save(users);
    res.status(200).send(created);
  } catch (error) {
    res.status(500).send(error);
  }
});

mongoose
  .connect("mongodb+srv://nazile:nazile@cluster0.haleq1p.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(()=>console.log("not connect db"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});